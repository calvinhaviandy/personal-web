export type IconName =
  | "arrow-up-right"
  | "arrow-up"
  | "arrow-down"
  | "arrow-left"
  | "plus"
  | "sparkle"
  | "asterisk"
  | "github"
  | "linkedin"
  | "instagram"
  | "mail";

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
      ) : name === "github" ? (
        <path
          d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10Z"
          fill="currentColor"
          stroke="none"
        />
      ) : name === "linkedin" ? (
        <>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="7.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
          <path d="M7.5 10.5v6M11 16.5v-6M11 13a3 3 0 0 1 6 0v3.5" />
        </>
      ) : name === "instagram" ? (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </>
      ) : name === "mail" ? (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 6 8 6 8-6" />
        </>
      ) : (
        <path d={paths[name]} />
      )}
    </svg>
  );
}
