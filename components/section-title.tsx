import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-12", className)}>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-medium">
          {subtitle}
        </p>
      )}
    </div>
  )
}
