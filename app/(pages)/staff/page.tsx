import { staff } from "@/app/components/staff/staff";
import StaffCard from "@/app/components/staff/StaffCard";

export default function Staff() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-12 lg:px-16">
      <div className="mb-24">
        <p className="uppercase tracking-[.35em] text-xs text-black/45">
          Team
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-light tracking-[-.05em]">
          The people behind
          <br />
          Gascon Architecture.
        </h1>
      </div>

      <div className="space-y-40">
        {staff.map((member) => (
          <StaffCard
            key={member.id}
            member={member}
          />
        ))}
      </div>
    </section>
  );
}