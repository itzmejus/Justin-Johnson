import { useEffect, useState } from "react";
import { CHAT_LAUNCHER_BOX, useChatWidget } from "../hooks/useChatWidget";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const chat = useChatWidget();
  // Stack above the chat launcher when the widget sits in this corner.
  const sharesCorner = chat.ready && chat.position === "left";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      style={sharesCorner ? { bottom: CHAT_LAUNCHER_BOX + 8, left: CHAT_LAUNCHER_BOX / 2 - 24 } : undefined}
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant text-primary shadow-lg transition-all hover:scale-110 active:scale-95"
    >
      <span className="material-symbols-outlined">arrow_upward</span>
    </button>
  );
}
