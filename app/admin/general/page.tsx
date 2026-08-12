"use client";

import { useState } from "react";
import LanguajesEditor from "@/app/components/admin/LanguajesEditor";
import SidebarOption from "@/app/components/admin/SidebarOption";
import ChangePassword from "@/app/components/admin/ChangePassword";
import PagesEditor from '@/app/components/admin/PagesEditor';

interface Option {
    id: string;
    title: string;
    image: string;
    subtitle: string;
}

const options: Option[] = [
    {
        id: "edit-pages",
        title: "Páginas",
        image: "/imgs/edit-pages.png",
        subtitle: "Edición de las páginas"
    },
    {
        id: "language",
        title: "Idioma",
        image: "/imgs/language.png",
        subtitle: "Edición de textos"
    },
    {
        id: "password",
        title: "Cambio de Contraseña",
        image: "/imgs/change-password.png",
        subtitle: "Cambio de contraseña actual"
    },
]

export default function GeneralPage() {
    const [optionSelected, setOptionSelected] = useState(options[0]);

    const handleSelect = (option: Option) => {
        setOptionSelected(option);
    };


    return (
        <div className="flex justify-between h-[100vh] w-full bg-slate-900">
            <aside className="flex w-[520] flex-col border-r border-white/10">
                <div className="mt-5 space-y-2 px-8">
                    {
                        options.map((option, index) => (
                            <SidebarOption
                                key={option.id}
                                option={option}
                                selected={optionSelected.id === option.id}
                                onClick={() => handleSelect(option)} />
                        ))
                    }

                </div>
            </aside>
            <aside className="w-full min-h-0 admin-scrollbar overflow-y-auto">
                {optionSelected.id === "edit-pages" && <PagesEditor />}
                {optionSelected.id === "language" && <LanguajesEditor />}
                {optionSelected.id === "password" && <ChangePassword />}
            </aside>
        </div>
    );
}

