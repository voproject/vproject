export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2" aria-hidden="true">
      <div className="h-px w-16 sm:w-24 bg-secondary/30" />
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 mx-4 text-secondary/60 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M12 2v20M4 8l8-6 8 6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2.2" />
      </svg>
      <div className="h-px w-16 sm:w-24 bg-secondary/30" />
    </div>
  )
}
