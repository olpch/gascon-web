"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';
import {
  CalendarDays,
  Folder,
  Home,
  Users,
  FileText,
  PieChart,
} from "lucide-react";

const navigation = [
  {
    name: "Website",
    href: "/admin/general",
    icon: Home,
  },
  {
    name: "Proyectos",
    href: "/admin/projects",
    icon: Folder,
  },
  {
    name: "Equipo (Staff)",
    href: "/admin/staff",
    icon: Users,
  }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-white/10 bg-slate-950 text-slate-300">
      <div className="px-6 py-8">
        <div className="text-4xl font-bold text-indigo-500">
            <Image
                src="/imgs/logo-white.png"
                width={25} height={25}
                alt="logo" />
        </div>
      </div>

      {/* Navigation */}

      <nav className="space-y-1 px-3">
        {navigation.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                active
                  ? "bg-slate-800 text-white"
                  : "text-slate-400 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" />

              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-white/10 p-5">
        <button className="flex w-full items-center gap-3 rounded-lg p-2 transition hover:bg-slate-900">
          <img
            src="/imgs/avatar-m.jpg"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="text-left">
            <p className="text-sm font-medium text-white">
              Maria
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>
          </div>
        </button>
      </div>
    </aside>
  );
}