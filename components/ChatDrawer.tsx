"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import ChatPanel from "./ChatPanel";

export default function ChatDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            fixed
            bottom-6
            right-6
            z-50
            flex
            items-center
            gap-2
            rounded-full
            bg-gradient-to-r
            from-blue-600
            to-indigo-700
            px-6
            py-4
            text-white
            font-semibold
            shadow-xl
            hover:scale-105
            transition
            duration-200
          "
        >
          <Sparkles size={20} />
          <span>Ask Agent</span>
        </button>
      )}

      {isOpen && (
        <ChatPanel
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}