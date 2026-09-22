type ExperienceItem = {
  name: string;
  time: string;
  position: string;
  type: string;
  description: string;
};

export default function ExperienceList({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="border-t border-black/20">
      {items.map((experience, index) => (
        <article
          key={`${experience.name}-${experience.position}`}
          className="grid gap-6 border-b border-black/20 py-7 sm:grid-cols-[3rem_0.85fr_1.15fr] sm:py-9 lg:gap-10"
        >
          <span className="font-mono text-[10px] text-black/35">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-xl font-archiabold tracking-[-0.025em] sm:text-2xl">
              {experience.position}
            </h3>
            <p className="mt-2 text-sm text-black/55">
              {experience.name} · {experience.type}
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-black/35">
              {experience.time}
            </p>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
            {experience.description}
          </p>
        </article>
      ))}
    </div>
  );
}
