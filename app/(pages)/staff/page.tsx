'use client';

import { StaffMember } from "@/app/lib/models";
import { useLanguage } from "@/app/providers/language-context";
import { getMembersList } from "@/app/services/staff";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import StaffCard from "@/app/components/staff/StaffCard";

export default function Staff() {
  
  const { t } = useLanguage();
  const [staff, setStaff] = useState<StaffMember[]>([]);

  useEffect(() =>{
    loadStaff()
  } , []);

    async function loadStaff() {
    try {
      const data = await getMembersList();
      setStaff(data);
    } catch {
      toast.error("No fue posible cargar los proyectos.");
    } 
  }
  
  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-12 lg:px-16">
      <div className="mb-24">
        <p className="uppercase tracking-[.35em] text-xs text-black/45">
          { t('pages.staff.name') }
        </p>
        <h1 className="mt-6 text-5xl md:text-7xl font-light tracking-[-.05em]">
          { t('pages.staff.title') }
        </h1>
      </div>

      <div className="space-y-40">
        {
          staff?.length > 0 &&
            staff.map((member: StaffMember) => (<StaffCard key={member.id} member={member} />))
        }
      </div>
    </section>
  );
}