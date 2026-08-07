"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import StaffInput from "@/app/components/admin/StaffInput";
import StaffPhotoUpload from "@/app/components/admin/StaffPhotoUpload";
import StaffTextarea from "@/app/components/admin/StaffTextarea";
import StaffSwitch from "@/app/components/admin/StaffSwitch";
import StaffMemberItem from "@/app/components/admin/StaffMemberItem";
import StaffToolbar from "@/app/components/admin/StaffToolbar";

import { DeleteDialog } from "@/app/components/dialogs/delete";

import { StaffMember } from "@/app/lib/models";
import { createMember, getMembersList } from "@/app/services/staff";

export default function StaffPage() {
    const [members, setMembers] = useState<StaffMember[]>([]);
    const [selected, setSelected] = useState<StaffMember | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadMembers();
    }, []);

    async function loadMembers() {
        try {
            setLoading(true);
            const data = await getMembersList();
            setMembers(data);
            if (data.length > 0) setSelected(data[0]);
        } catch {
            toast.error("No fue posible cargar los miembros.");
        } finally {
            setLoading(false);
        }
    }

    function updateField<K extends keyof StaffMember>(
        field: K,
        value: StaffMember[K]
    ) {
        if (!selected) return;
        const updated = {
            ...selected,
            [field]: value,
        };
        setSelected(updated);
        setMembers((prev) =>
            prev.map((member) =>
                member.id === updated.id ? updated : member
            )
        );
    }

    async function handleSave() {
      if (!selected) return;

      const id = toast.loading("Guardando...");

      try {
        await createMember(selected);
        toast.success("Registro guardado correctamente.", {id});
        await loadMembers();
      } catch (error) {
        console.error(error);
        toast.error("No fue posible guardar el registro.", {id});
      }
    }

    if (loading) {
        return (
            <div className="flex h-full items-center justify-center">
                <p className="text-slate-400">Cargando miembros...</p>
            </div>
        );
    }

    if (!selected) {
        return (
            <div className="flex h-full items-center justify-center">
                <p className="text-slate-400">
                    No existen miembros registrados.
                </p>
            </div>
        );
    }

    return (
        <div className="flex h-[calc(100vh-80px)] overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <aside className="flex w-96 flex-col border-r border-white/10">
                <StaffToolbar onAdd={() => {}} />

                <div className="mt-5 space-y-2 px-8">
                    {members.map((member) => (
                        <StaffMemberItem
                            key={member.id}
                            member={member}
                            selected={selected.id === member.id}
                            onClick={() => setSelected(member)}
                        />
                    ))}
                </div>
            </aside>

            <main className="flex-1 overflow-auto p-10">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-8 text-2xl font-semibold text-white">
                        Editar miembro
                    </h2>

                    <div className="flex gap-10">
                        <StaffPhotoUpload
                            image={selected.image}
                            onChange={(url) =>
                                updateField("image", url)
                            }
                        />

                        <div className="flex-1 space-y-6">
                            <StaffInput
                                label="Nombre"
                                value={selected.name}
                                onChange={(v) =>
                                    updateField("name", v)
                                }
                            />

                            <StaffInput
                                label="Perfil"
                                value={selected.role}
                                onChange={(v) =>
                                    updateField("role", v)
                                }
                            />

                            <StaffInput
                                label="Correo electrónico"
                                value={selected.email}
                                onChange={(v) =>
                                    updateField("email", v)
                                }
                            />

                            <label className="flex h-12 items-center rounded-xl border border-white/10 bg-slate-950 px-4 text-sm text-slate-300">
                                {selected.image}
                            </label>
                        </div>
                    </div>

                    <div className="mt-10">
                        <StaffTextarea
                            label="Biografía"
                            value={selected.bio}
                            onChange={(v) =>
                                updateField("bio", v)
                            }
                        />
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        <StaffInput
                            label="LinkedIn"
                            value={selected.linkedin}
                            onChange={(v) =>
                                updateField("linkedin", v)
                            }
                        />

                        <StaffInput
                            label="Instagram"
                            value={selected.instagram}
                            onChange={(v) =>
                                updateField("instagram", v)
                            }
                        />
                    </div>

                    <div className="mt-10 flex items-center justify-between rounded-xl border border-white/10 p-5">
                        <div>
                            <h3 className="text-white">
                                Visible en la web
                            </h3>

                            <p className="text-sm text-slate-400">
                                Oculta o muestra este miembro.
                            </p>
                        </div>

                        <StaffSwitch
                            checked={selected.visible}
                            onChange={(v) =>
                                updateField("visible", v)
                            }
                        />
                    </div>

                    <div className="mt-10 flex justify-between">
                        <DeleteDialog />

                        <div className="flex gap-4">
                            <button className="cursor-pointer rounded-lg border border-white/10 px-6 py-3 transition-colors hover:text-white">
                                Cancelar
                            </button>

                            <button
                                onClick={handleSave}
                                className="cursor-pointer rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500"
                            >
                                Guardar cambios
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}