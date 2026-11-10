import type { ReactNode } from 'react'
import type { Link } from '../content/profile'

const marks: Record<Link['icon'], ReactNode> = {
  github: (
    <path
      fill="currentColor"
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"
    />
  ),
  x: (
    <path
      fill="currentColor"
      d="M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.1L4.7 21H1.5l7.5-8.6L1.2 3h6.6l4.5 5.6L17.5 3zm-1.1 16.1h1.8L7.7 4.8H5.8l10.6 14.3z"
    />
  ),
  blog: (
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8.5 8h7M8.5 12h7M8.5 16h4" />
    </g>
  ),
  mail: (
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7.5 8.5 6 8.5-6" />
    </g>
  ),
}

export function Icon({ name }: { name: Link['icon'] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      aria-hidden="true"
      focusable="false"
    >
      {marks[name]}
    </svg>
  )
}
