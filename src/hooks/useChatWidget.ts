import { useSyncExternalStore } from "react";

// State of the Selo Assist chat widget (loaded in index.html). Its loader fires a
// `chat-widget` event whenever it becomes ready or opens/closes. The listener is
// registered at import time so an event fired before React mounts is not missed.
export interface ChatWidgetState {
  ready: boolean;
  open: boolean;
  position: "left" | "right";
  /** The visitor has opened the chat at least once on this page. */
  hasOpened: boolean;
}

// The widget's iframe is 92px square when closed, pinned to the bottom corner,
// with a 60px launcher centred inside it.
export const CHAT_LAUNCHER_BOX = 92;

let state: ChatWidgetState = { ready: false, open: false, position: "right", hasOpened: false };
const listeners = new Set<() => void>();

if (typeof window !== "undefined") {
  window.addEventListener("chat-widget", (event) => {
    const detail = (event as CustomEvent<Partial<ChatWidgetState>>).detail ?? {};
    state = {
      ready: Boolean(detail.ready),
      open: Boolean(detail.open),
      position: detail.position === "left" ? "left" : "right",
      hasOpened: state.hasOpened || Boolean(detail.open),
    };
    listeners.forEach((listener) => listener());
  });
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useChatWidget() {
  return useSyncExternalStore(subscribe, () => state, () => state);
}
