"use client";

import { useState } from "react";
import LanguajeEditor from "@/app/components/admin/LanguajeEditor";
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
        subtitle: "Cambio de contraseña actual" },
]

export default function GeneralPage() {
    const [optionSelected, setOptionSelected] = useState(options[0]);

    const handleSelect = (option: Option) => {
        setOptionSelected(option);
    };


    return (
        <div className="flex h-[calc(100vh-80px)] overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <aside className="flex w-96 flex-col border-r border-white/10">
                <div className="mt-5 space-y-2 px-8">
                    {
                        options.map((option,index) => (
                            <SidebarOption
                                key={option.id}
                                option={option}
                                selected={ optionSelected.id === option.id }
                                onClick={() => handleSelect(option)} />
                        ))
                    }
                    
                </div> 
            </aside>

            <main className="flex-1 overflow-auto p-10">
                <div className="mx-auto max-w-4xl">                    
                    { optionSelected.id === "edit-pages" && <PagesEditor /> }
                    { optionSelected.id === "language"  && <LanguajeEditor /> }
                    { optionSelected.id === "password"  && <ChangePassword /> }
                    
                </div>
            </main>
        </div>
    );
}

