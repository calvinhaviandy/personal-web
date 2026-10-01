import Icon from "./Icon";

type ExperienceItem = {
  name: string;
  time: string;
  position: string;
  type: string;
  description: string;
};

export default function ExperienceList({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="experience-list">
      {items.map((experience, index) => (
        <details className="experience-item" key={`${experience.name}-${experience.position}`}>
          <summary>
            <span className="experience-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="experience-identity">
              <strong>{experience.position}</strong>
              <span>{experience.name}</span>
            </span>
            <span className="experience-time">{experience.time}</span>
            <span className="experience-plus" aria-hidden="true"><Icon name="plus" /></span>
          </summary>
          <p>{experience.description}</p>
        </details>
      ))}
    </div>
  );
}
