"use client";

import { Camera } from "lucide-react";
import ImageUpload from "../image-upload/image-upload";

interface Props {
    image: string;
    onChange: (url: string) => void;
}

export default function StaffPhotoUpload({
    image,
    onChange
}: Props) {

    const indentifier = "staff-ip";

    return (
        <label className="space-y-4" htmlFor={indentifier}>
            <h3 className="text-sm font-medium text-slate-300">
                Foto de Perfil
            </h3>
            <div
                className="
                group
                relative
                flex
                aspect-square
                w-60
                cursor-pointer
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border-2
                border-dashed
                border-white/10
                transition
                hover:border-indigo-500
                "
            >
            <ImageUpload
                category="staff"
                onUploaded={onChange}
                indentifier={indentifier} />
            <img
                src={image}
                alt="image staff"
                className="absolute inset-0 h-full w-full object-cover"
            />
            </div>
            <Camera />
        </label>
    );
}