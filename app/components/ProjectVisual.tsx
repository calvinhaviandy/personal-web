type ProjectVisualProps = {
  title: string;
  category: string;
  year: string;
  tone: string;
  cover?: string;
  priority?: boolean;
};

const palettes: Record<string, { background: string; foreground: string; accent: string }> = {
  paper: { background: "#d9d5ca", foreground: "#171714", accent: "#ef4d23" },
  rose: { background: "#ecb6b2", foreground: "#2b1515", accent: "#fff5ec" },
  lime: { background: "#c8ff52", foreground: "#10130b", accent: "#1c54ff" },
  coffee: { background: "#5a3827", foreground: "#f3e8d2", accent: "#e96632" },
  blue: { background: "#3157f5", foreground: "#f7f4ea", accent: "#ffdb4d" },
  violet: { background: "#8b72ff", foreground: "#17131f", accent: "#f6ef63" },
  yellow: { background: "#f3d432", foreground: "#19170f", accent: "#e94b27" },
  red: { background: "#d8342b", foreground: "#fff4e8", accent: "#10100e" },
  green: { background: "#8cbf89", foreground: "#102016", accent: "#f6e950" },
};

export default function ProjectVisual({
  title,
  category,
  year,
  tone,
  cover,
  priority = false,
}: ProjectVisualProps) {
  const palette = palettes[tone] ?? palettes.paper;

  if (cover) {
    return (
      <div className="project-visual relative aspect-[4/3] overflow-hidden bg-[#242421]">
        <img
          src={`/image/project/${cover}`}
          alt=""
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.015]"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-5 pt-20 text-white sm:p-7">
          <span className="text-xs uppercase tracking-[0.18em]">{category}</span>
          <span className="font-mono text-xs">{year}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="project-visual relative aspect-[4/3] overflow-hidden p-5 sm:p-7"
      style={{ background: palette.background, color: palette.foreground }}
    >
      <div className="absolute inset-0 grid grid-cols-4 opacity-20" aria-hidden="true">
        <span className="border-r border-current" />
        <span className="border-r border-current" />
        <span className="border-r border-current" />
        <span />
      </div>
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between gap-4 border-b border-current/30 pb-3 font-mono text-[10px] uppercase tracking-[0.16em] sm:text-xs">
          <span>CVH / Selected work</span>
          <span>{year}</span>
        </div>

        <div>
          <span
            className="mb-5 block h-3 w-3 sm:h-4 sm:w-4"
            style={{ background: palette.accent }}
            aria-hidden="true"
          />
          <p className="max-w-[90%] break-words text-[clamp(2rem,7vw,4.5rem)] font-archiabold leading-[0.88] tracking-[-0.065em]">
            {title}
          </p>
        </div>

        <div className="flex items-end justify-between gap-4 border-t border-current/30 pt-3 text-xs uppercase tracking-[0.14em]">
          <span>{category}</span>
          <span aria-hidden="true">↗</span>
        </div>
      </div>
    </div>
  );
}
