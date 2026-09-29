import Image from "next/image";

type ProjectVisualProps = {
  title: string;
  category: string;
  year: string;
  cover?: string;
};

export default function ProjectVisual({ title, category, year, cover }: ProjectVisualProps) {
  if (cover) {
    return (
      <div className="project-visual has-cover">
        <Image
          src={`/image/project/${cover}`}
          alt={`${title} project preview`}
          fill
          sizes="(max-width: 800px) 100vw, 760px"
          className="project-cover-image"
        />
      </div>
    );
  }

  return (
    <div className="project-visual" role="img" aria-label={`${title} graphic project cover`}>
      <div className="visual-header visual-kicker"><span>CALVIN / SELECTED WORK</span><span>{year}</span></div>
      <p className="visual-title">{title}</p>
      <div className="visual-footer visual-kicker"><span>{category}</span><span aria-hidden="true">✳</span></div>
    </div>
  );
}
