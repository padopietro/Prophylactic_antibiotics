import type { SVGProps } from "react";

/** Placeholder mark (a stylised capsule). TODO(content): replace with the study logo. */
export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" {...props}>
      <rect width="32" height="32" rx="9" className="fill-brand-600 dark:fill-brand-500" />
      <g transform="rotate(-45 16 16)">
        <path d="M16 11.5h-5a4.5 4.5 0 0 0 0 9h5z" className="fill-brand-200" />
        <path d="M16 11.5h5a4.5 4.5 0 0 1 0 9h-5z" className="fill-white" />
      </g>
    </svg>
  );
}
