"use client";

interface Tab {
  id: string;
  label: string;
}

interface GenericTabsProps {
  tabs: Tab[];
  active: string;
  labelText?: string;
  onChange: (tab: string) => void;
}

export default function GenericTabs({
  tabs,
  active,
  onChange,
  labelText = '',
}: GenericTabsProps) {

  const classBase = 'relative cursor-pointer px-6 py-4 text-sm font-medium transition-colors';

  return (
    <div className="border-b border-white/10">
      <nav className="flex gap-8">
        {labelText &&
          <span className={`text-slate-400 ${classBase}`}>
            {labelText}:
          </span>
        }
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`
              ${classBase}
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