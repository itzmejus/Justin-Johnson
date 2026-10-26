import { useEffect, useState } from "react";
import { CHAT_LAUNCHER_BOX, useChatWidget } from "../hooks/useChatWidget";

const DISMISS_KEY = "chat-hint-dismissed";

function wasDismissed() {
  try {
    return sessionStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    return false;
  }
}

function rememberDismissed() {
  try {
    sessionStorage.setItem(DISMISS_KEY, "1");
  } catch {
    // Storage can be blocked; the hint just comes back on the next visit.
  }
}

// A "Try me!" callout beside the Selo Assist launcher, like the one on assist.siteselo.com.
export default function ChatWidgetHint() {
  const { ready, position, hasOpened } = useChatWidget();
  const [dismissed, setDismissed] = useState(wasDismissed);
  const [shown, setShown] = useState(false);

  // Wait a moment after the widget appears so the hint doesn't compete with the page load.
  useEffect(() => {
    if (!ready) return;
    const timer = setTimeout(() => setShown(true), 1500);
    return () => clearTimeout(timer);
  }, [ready]);

  // Once the visitor has opened the chat, the hint has done its job for this session.
  useEffect(() => {
    if (hasOpened) rememberDismissed();
  }, [hasOpened]);

  function dismiss() {
    setDismissed(true);
    rememberDismissed();
  }

  if (!ready || !shown || hasOpened || dismissed) return null;

  const left = position === "left";

  return (
    <div
      className={`fixed z-[60] flex items-end gap-1 animate-hint-in ${left ? "flex-row-reverse" : ""}`}
      style={{ bottom: CHAT_LAUNCHER_BOX - 30, [left ? "left" : "right"]: CHAT_LAUNCHER_BOX - 4 }}
    >
      <div className="relative animate-hint-bob">
        <button
          type="button"
          data-chat-open
          className={`block px-4 py-2 bg-white border border-outline-variant rounded-2xl shadow-lg shadow-primary/10 text-left hover:border-primary/40 transition-colors ${left ? "rotate-[3deg]" : "-rotate-[3deg]"}`}
        >
          <span className="block font-headline font-bold text-primary text-base leading-tight">Try me!</span>
          <span className="block text-[11px] text-on-surface-variant leading-tight">Ask my AI assistant</span>
        </button>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Hide hint"
          className={`absolute -top-2 ${left ? "-left-2" : "-right-2"} flex items-center justify-center w-5 h-5 rounded-[999px] bg-white border border-outline-variant text-on-surface-variant shadow-sm hover:text-primary`}
        >
          <span className="material-symbols-outlined text-[14px]">close</span>
        </button>
      </div>

      {/* Hand-drawn arrow curving down toward the launcher */}
      <svg
        viewBox="0 0 48 40"
        className={`w-10 h-9 mb-[-6px] text-primary ${left ? "-scale-x-100" : ""}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 6 C 14 26, 26 32, 42 32" />
        <path d="M34 25 L 43 32 L 34 38" />
      </svg>
    </div>
  );
}
