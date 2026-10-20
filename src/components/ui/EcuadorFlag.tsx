/** Bandera de Ecuador en SVG: los emoji de bandera no se muestran en Windows. */
export function EcuadorFlag({ className = 'h-3 w-[1.125rem]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 6 4" aria-hidden="true" className={`shrink-0 overflow-hidden rounded-[2px] ring-1 ring-black/5 ${className}`}>
      <rect width="6" height="2" fill="#FFD100" />
      <rect y="2" width="6" height="1" fill="#0033A0" />
      <rect y="3" width="6" height="1" fill="#EF3340" />
    </svg>
  );
}
