import { cn } from '@/lib/utils'

type PlaceholderImageProps = {
  label: string
  className?: string
  rounded?: string
}

export function PlaceholderImage({
  label,
  className,
  rounded = 'rounded-2xl',
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        'flex items-center justify-center overflow-hidden bg-gradient-to-br from-blush/50 via-linen to-linen ring-1 ring-blush/30',
        rounded,
        className,
      )}
    >
      <span className="px-6 text-center font-heading text-lg italic text-espresso/45">
        {label}
      </span>
    </div>
  )
}
