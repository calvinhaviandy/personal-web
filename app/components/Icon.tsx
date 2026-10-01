type IconName = "arrow-up-right" | "arrow-up" | "arrow-down" | "arrow-left" | "plus" | "sparkle" | "asterisk";

const paths = {
  "arrow-up-right": "M6 18 18 6M6 6h12v12",
  "arrow-up": "M12 20V4M5 11l7-7 7 7",
  "arrow-down": "M12 4v16M5 13l7 7 7-7",
  "arrow-left": "M20 12H4M11 5l-7 7 7 7",
  plus: "M12 5v14M5 12h14",
  asterisk: "M12 3v18M3 12h18M5.6 5.6l12.8 12.8M5.6 18.4 18.4 5.6",
} as const;

// Decorative, server-rendered geometry keeps UI icons independent of device fonts.
export default function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg
      className={`ui-icon${className ? ` ${className}` : ""}`}
      data-icon={name}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {name === "sparkle" ? (
        <path d="M12 2 14.3 9.7 22 12 14.3 14.3 12 22 9.7 14.3 2 12 9.7 9.7Z" fill="currentColor" stroke="none" />
      ) : (
        <path d={paths[name]} />
      )}
    </svg>
  );
}
