"use client"

import { useUTMParams } from '@/hooks/use-utm-params'
import { ReactNode, forwardRef } from 'react'

interface SmartLinkProps {
  href: string
  children: ReactNode
  className?: string
  target?: string
  rel?: string
  'aria-label'?: string
  onClick?: () => void
  forceUTMs?: boolean // Força adição de UTMs mesmo para links internos
  overrideUTMs?: Record<string, string> // UTMs específicos para este link
}

const SmartLink = forwardRef<HTMLAnchorElement, SmartLinkProps>(
  ({ 
    href, 
    children, 
    className, 
    target, 
    rel, 
    'aria-label': ariaLabel, 
    onClick,
    forceUTMs = false,
    overrideUTMs = {},
    ...props 
  }, ref) => {
    const { buildURLWithUTMs, hasUTMs } = useUTMParams()

    // Verifica se é URL externa ou se deve forçar UTMs
    const isExternalURL = (url: string): boolean => {
      if (typeof window === 'undefined') return false
      
      try {
        const link = new URL(url, window.location.origin)
        return link.hostname !== window.location.hostname
      } catch {
        return false
      }
    }

    // Determina se deve adicionar UTMs
    const shouldAddUTMs = forceUTMs || isExternalURL(href)
    
    // Constrói URL final
    const finalHref = shouldAddUTMs && hasUTMs() 
      ? buildURLWithUTMs(href, overrideUTMs)
      : href

    // Define target automático para links externos
    const finalTarget = target || (isExternalURL(href) ? '_blank' : undefined)
    
    // Define rel automático para links externos
    const finalRel = rel || (isExternalURL(href) ? 'noopener noreferrer' : undefined)

    return (
      <a
        ref={ref}
        href={finalHref}
        className={className}
        target={finalTarget}
        rel={finalRel}
        aria-label={ariaLabel}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    )
  }
)

SmartLink.displayName = 'SmartLink'

export default SmartLink