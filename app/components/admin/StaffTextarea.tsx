"use client";

interface Props {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

export default function StaffTextarea({
    label,
    value,
    onChange,
}: Props) {
    return (
        <div className="space-y-2">

            <label className="text-sm font-medium text-slate-300">
                {label}
            </label>

            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="
                min-h-52
                w-full
                resize-none
                rounded-xl
                border
                border-white/10
                bg-slate-950
                p-4
                text-sm
                outline-none
                transition
                focus:border-indigo-500
                !text-white
                "
            />

        </div>
    );
}