'use client'

import Image from 'next/image'
import { cn } from "@/lib/utils"

interface PhoneFrameProps {
  children: React.ReactNode
  className?: string
}

export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div className={cn("relative aspect-[1170/2532] max-w-[400px] mx-auto", className)}>
      {/* Screen Content Container */}
      <div className="absolute inset-0 rounded-[12%] overflow-hidden z-10 bg-black">
        {children}
      </div>
      
      {/* iPhone 15 Frame */}
      <div className="absolute inset-0 pointer-events-none z-50">
        <div className="absolute inset-0 rounded-[12%] border-[14px] border-black bg-transparent" />
        <div className="absolute top-[2%] left-1/2 -translate-x-1/2 w-[30%] h-[4%] bg-black rounded-full" />
      </div>
    </div>
  )
} 