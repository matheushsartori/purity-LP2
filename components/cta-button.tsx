"use client"

import { Button } from "@/components/ui/button"
import SmartLink from "@/components/smart-link"
import { GTMEvents } from "@/components/gtm-events"
import { ReactNode } from "react"

interface CTAButtonProps {
  href: string
  children: ReactNode
  className?: string
  "aria-label"?: string
  eventLabel: string
  eventCategory: string
}

export default function CTAButton({ 
  href, 
  children, 
  className, 
  "aria-label": ariaLabel,
  eventLabel,
  eventCategory
}: CTAButtonProps) {
  const handleClick = () => {
    GTMEvents.trackCTAClick(eventLabel, eventCategory)
  }

  return (
    <Button 
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
      asChild
    >
      <SmartLink href={href}>
        {children}
      </SmartLink>
    </Button>
  )
}