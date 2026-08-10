"use client";

import { useEffect, useState } from "react";
import { Project } from "@/app/lib/models";
import StaffInput from "./StaffInput";
import StaffTextarea from "./StaffTextarea";
import Tabs from "../tabs";
import { getLanguageId } from "@/app/services/global-config";

interface ProjectEditorProps {
  project: Project;
  onSave: (project: Project) => void;
  onDelete: (id: string) => void;
}

const initLanguage = {
  en: {
    id: 'en',
    navigation: {
        home: 'Home',
        projects: 'Projects',
        staff: 'Staff',
        contact: 'Contact'
    },
    pages: {
        home: {
          banner: {
            title: 'Designing\nSpaces\nThat Inspire',
            subtitle: 'Contemporary architecture rooted in timeless principles, crafted with precision, light, and materiality.',
          },
          philosophy: {
            title: 'Architecture begins long before the first line is drawn.',
            subtitle: 'Every commission represents an opportunity to understand how people inhabit space. Through careful observation, timeless materials and thoughtful proportions, we design places that improve everyday life while respecting their surroundings.',
          },
        },
        projects: {
            name: 'projects',
            tag: 'ON-GOING'
        },
        contact: {
            name: 'contact',
            title: "Let's discuss your next project",
            subtitle: "We collaborate with clients seeking architecture that is timeless, functional and deeply connected to its context."
        },
        staff: {
            name: 'staff',
            title: 'The people behind.'
        }
    },
    general: {
      copyright: '© 2026 Gascon Archicture',
      email: 'hello@gasconarchitecture.com',
      phone: '(+1) 123 456-7890',
      location: 'Canarias',
      country: 'spain',
    }
  },
  es: {
    id: 'es',
    navigation: {
        home: 'Inicio',
        projects: 'Proyectos',
        staff: 'Equipo',
        contact: 'Contacto'
    },
    pages: {
        home: {
          banner: {
            title: 'Designing\nSpaces\nThat Inspire',
            subtitle: 'Tu socio confiable en soluciones de ingeniería y construcción',
          },
          philosophy: {
            title: 'La arquitectura comienza mucho antes de que se trace la primera línea.',
            subtitle: 'Cada encargo representa una oportunidad para comprender cómo las personas habitan el espacio. Mediante una observación atenta, materiales atemporales y proporciones cuidadosamente estudiadas, diseñamos lugares que mejoran la vida cotidiana al tiempo que respetan su entorno.',
          },
        },
        projects: {
            name: 'Projectos',
            tag: 'En-Curso'
        },
        contact: {
            name: 'Contacto',
            title: "Hablemos de tu próximo proyecto.",
            subtitle: "Colaboramos con clientes que buscan una arquitectura atemporal, funcional y profundamente conectada con su contexto."
        },
        staff: {
            name: 'Equipo',
            title: 'El gente detrás.'
        }
    },
    general: {
      copyright: '© 2026 Gascon Archicture',
      email: 'hello@gasconarchitecture.com',
      phone: '(+1) 123 456-7890',
      location: 'Canarias',
      country: 'spain',
    } 
  }
}


export default function LanguajeEditor() {
  const localLanguage = initLanguage[getLanguageId() as keyof typeof initLanguage] || initLanguage.en;
  const [form, setForm] = useState({});
  const [language, setlanguage] = useState(localLanguage);
  const [languageTab, setLanguageTab] = useState(() => getLanguageId());

  function changeLanguageTab(tab: string) {
    const newLanguage = initLanguage[tab as keyof typeof initLanguage] || initLanguage.en;
    setlanguage(newLanguage);
  }

  useEffect(() => {
    localStorage.setItem("language", languageTab);
    changeLanguageTab(languageTab);
  }, [languageTab]);
  
  // useEffect(() => {
  //   setForm(project);
  // }, [project]);

  const updateField = (path: string, value: string) => {
    // setLanguage((prev) => {
    //   const copy = structuredClone(prev);
    //   const keys = path.split(".");
    //   let current: any = copy;
    //   for (let i = 0; i < keys.length - 1; i++) {
    //     current = current[keys[i]];
    //   }
    //   current[keys[keys.length - 1]] = value;
    //   return copy;
    // });
    return;
  }

  const handleSave = () => {

  }

  return (
    <>
      <Tabs
        active={languageTab}
        onChange={setLanguageTab}
        tabs={[
          {id: "en", label: "Inglés"},
          {id: "es", label: "Español"},
      ]}/>
      <div className="mt-10 mx-auto max-w-4xl">
        <h2 className="mb-10 text-2xl font-semibold text-white">
          Editor de idioma { languageTab } 
        </h2>
        
        <h2 className="mt-12 text-1xl font-semibold text-white">
          Navegación
        </h2>
        <hr className="mb-6 mt-2 border border-white/10" />
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          <StaffInput
            label="Home"
            value={language.navigation.home}
            onChange={(v)=>updateField("navigation.home",v)}/>
          <StaffInput
            label="Projects"
            value={language.navigation.projects}
            onChange={(v)=>updateField("navigation.projects",v)} />
        </div>
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          <StaffInput
            label="Staff"
            value={language.navigation.staff}
            onChange={(v)=>updateField("navigation.staff",v)}/>
          <StaffInput
              label="Contact"
              value={language.navigation.contact}
              onChange={(v)=>updateField("navigation.contact",v)}/>
        </div>
        
        <h2 className="mt-12 text-1xl font-semibold text-white">
          Página de inicio
        </h2>
        <hr className="mt-2 border border-white/10" />
        <h2 className="mt-8 text-1xl font-semibold text-white">
          Banner
        </h2>
        <div className="mt-6">
          <StaffInput
            label="Título"
            value={language.pages.home.banner.title}
            onChange={(v)=>updateField("pages.home.philosophy.title",v)}/>
        </div>
        <div className="mt-6">
          <StaffTextarea
            label="Subtítulo"
            value={language.pages.home.banner.subtitle}
            onChange={(v)=>updateField("pages.home.philosophy.subtitle",v)}/>
        </div>
        <h2 className="mt-8 text-1xl font-semibold text-white">
          Filosofía
        </h2>
        <div className="mt-6">
          <StaffInput
            label="Título"
            value={language.pages.home.philosophy.title}
            onChange={(v)=>updateField("pages.home.philosophy.title",v)}/>
        </div>
        <div className="mt-6">
          <StaffTextarea
            label="Subtítulo"
            value={language.pages.home.philosophy.subtitle}
            onChange={(v)=>updateField("pages.home.philosophy.subtitle",v)}/>
        </div>
          
        <h2 className="mt-10 text-1xl font-semibold text-white">
          Página de Projectos
        </h2>
        <hr className="mt-2 border border-white/10" />
        <div className="mt-6 grid gap-6 md:grid-cols-2">
            <StaffInput
              label="Nombre"
              value={language.pages.projects.name}
              onChange={(v)=>updateField("pages.projects.name",v)}/>
          <StaffInput
            label="Tag"
            value={language.pages.projects.tag}
            onChange={(v)=>updateField("pages.projects.tag",v)} />
        </div>
        
        <h2 className="mt-10 text-1xl font-semibold text-white">
          Página de Contacto
        </h2>
        <hr className="mt-2 border border-white/10" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <StaffInput
            label="Nombre"
            value={language.pages.contact.name}
            onChange={(v)=>updateField("pages.contact.name",v)} />
          <StaffInput
            label="Título"
            value={language.pages.contact.title}
            onChange={(v)=>updateField("pages.contact.title",v)} />
        </div>
        <div className="mt-6">
          <StaffTextarea
            label="Subtítulo"
            value={language.pages.contact.subtitle}
            onChange={(v)=>updateField("pages.contact.subtitle",v)} />
        </div>

        <h2 className="mt-10 text-1xl font-semibold text-white">
          Miembros del equipo
        </h2>
        <hr className="mt-2 border border-white/10" />
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <StaffInput
            label="Nombre"
            value={language.pages.staff.name}
            onChange={(v)=>updateField("pages.staff.name",v)} />
          <StaffInput
            label="Título"
            value={language.pages.staff.title}
            onChange={(v)=>updateField("pages.staff.title",v)} />
        </div>

        <h2 className="mt-10 text-1xl font-semibold text-white">
          Información General
        </h2>
        <hr className="mt-2 border border-white/10" />
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <StaffInput
            label="Email"
            value={language.general.email}
            onChange={(v)=>updateField("general.email",v)} />

          <StaffInput
            label="Teléfono"
            value={language.general.phone}
            onChange={(v)=>updateField("general.phone",v)} />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <StaffInput
            label="Ubicación"
            value={language.general.location}
            onChange={(v)=>updateField("general.location",v)} />
          <StaffInput
              label="País"
              value={language.general.country}
              onChange={(v)=>updateField("general.country",v)} />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <StaffInput
            label="Texto Copyright"
            value={language.general.copyright}
            onChange={(v)=>updateField("general.copyright",v)} />
        </div>

        <hr className="mb-10 mt-10 border border-white/10" />
        <div className="mt-10 flex justify-end">
          <button
            onClick={handleSave}
            className="cursor-pointer rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500">
              Actualizar cambios
          </button>
        </div>
      </div>
    </>
  );
}