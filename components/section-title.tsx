import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-12 group cursor-pointer", className)}>
      {/* Logo par défaut */}
      <div className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      
      {/* Titre qui apparaît au hover */}
      <h2 className="text-xs md:text-sm font-bold text-white mb-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[10px] md:text-xs text-gray-400 max-w-2xl font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
          {subtitle}
        </p>
      )}
    </div>
  )
}
