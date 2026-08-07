"use client";

interface StaffInputProps {
    label: string;
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
}

export default function StaffInput({
    label,
    value,
    placeholder,
    onChange,
}: StaffInputProps) {
    return (
        <div className="space-y-2">

            <label className="text-sm font-medium text-slate-300">
                {label}
            </label>

            <input
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className="
                h-12
                w-full
                rounded-xl
                border
                border-white/10
                bg-slate-950
                px-4
                text-sm
                !text-white
                outline-none
                transition
                placeholder:text-slate-500
                focus:border-indigo-500
                "
            />

        </div>
    );
}