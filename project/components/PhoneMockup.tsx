'use client'

import { useEffect, useRef } from 'react'
import { cn } from "@/lib/utils"

interface PhoneMockupProps {
  children: React.ReactNode
  slideFrom?: 'left' | 'right'
  className?: string
}

export function PhoneMockup({ children, slideFrom = 'right', className }: PhoneMockupProps) {
  const phoneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('translate-x-0', 'opacity-100')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (phoneRef.current) {
      observer.observe(phoneRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={phoneRef}
      className={cn(
        "relative w-full max-w-[350px] mx-auto transition-all duration-1000",
        slideFrom === 'left' ? 'translate-x-[-100%]' : 'translate-x-[100%]',
        'opacity-0',
        className
      )}
    >
      <div className="relative aspect-[9/16]">
        {children}
      </div>
    </div>
  )
} 