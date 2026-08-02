"use client"

function CornerArch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 220"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer gothic arch line tracing the corner */}
      <path
        d="M0 220 L0 90 C0 40 40 0 90 0 L220 0"
        stroke="oklch(0.68 0.09 75)"
        strokeWidth="1"
        strokeOpacity="0.35"
      />
      {/* Inner hairline echo */}
      <path
        d="M18 220 L18 96 C18 54 54 18 96 18 L220 18"
        stroke="oklch(0.68 0.09 75)"
        strokeWidth="0.75"
        strokeOpacity="0.2"
      />
      {/* Small finial ornament at the arch springpoint */}
      <circle cx="90" cy="0" r="3" fill="oklch(0.68 0.09 75)" fillOpacity="0.3" />
    </svg>
  )
}

export function EcclesiasticalFrame() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[60]">
      <CornerArch className="absolute top-0 left-0 w-24 h-24 sm:w-36 sm:h-36" />
      <CornerArch className="absolute top-0 right-0 w-24 h-24 sm:w-36 sm:h-36 -scale-x-100" />
      <CornerArch className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 -scale-y-100" />
      <CornerArch className="absolute bottom-0 right-0 w-24 h-24 sm:w-36 sm:h-36 -scale-x-100 -scale-y-100" />
    </div>
  )
}
