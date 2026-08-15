import SidebarOption from "@/app/components/admin/SidebarOption";

interface Option {
  id: string;
  title: string;
  image: string;
  url: string;
  subtitle: string;
}

const options: Option[] = [
  {
    id: "edit-pages",
    title: "Página Inicio",
    url: "/admin/general",
    image: "/imgs/edit-pages.png",
    subtitle: "Edición página inicio"
  },
  {
    id: "language",
    title: "Idioma",
    url: "/admin/languages",
    image: "/imgs/language.png",
    subtitle: "Edición de textos"
  },

  {
    id: "security",
    url: "/admin/change-password",
    title: "Seguridad",
    image: "/imgs/change-password.png",
    subtitle: "Cambio de contraseña",
  },
]

export default function GegeralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-between h-[100vh] w-full bg-slate-900">
      <aside className="flex w-[520] flex-col border-r border-white/10">
        <div className="mt-5 space-y-2 px-8">
          {
            options.map((option, index) => (
              <SidebarOption key={option.id} option={option} />
            ))
          }
        </div>
      </aside>
      <aside className="w-full min-h-0 admin-scrollbar overflow-y-auto">
        {children}
      </aside>
    </div>
  );
}