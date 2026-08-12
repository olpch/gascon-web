"use client";

import { Languages } from "../lib/models";

interface Tab {
  id: 'en' | 'es';
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  active: string;
  onChange: (tab: keyof Languages) => void;
}

export default function Tabs({
  tabs,
  active,
  onChange,
}: TabsProps) {
  return (
    <div className="border-b border-white/10">
      <nav className="flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`
              relative
              cursor-pointer
              px-6
              py-4
              text-sm
              font-medium
              transition-colors
              ${active === tab.id
                ? "text-indigo-400"
                : "text-slate-400 hover:text-white"
              }
            `}
          >
            {tab.label}

            {active === tab.id && (
              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-0.5
                  w-full
                  rounded-full
                  bg-indigo-500
                "
              />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}