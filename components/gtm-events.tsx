"use client"

declare global {
  interface Window {
    dataLayer: any[]
  }
}

// Eventos para Google Tag Manager
export const GTMEvents = {
  // Evento para cliques em CTAs
  trackCTAClick: (ctaName: string, position: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'cta_click',
        cta_name: ctaName,
        cta_position: position,
        page_url: window.location.href
      })
    }
  },

  // Evento para scroll profundo (indicador de engajamento)
  trackScrollDepth: (percentage: number) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'scroll_depth',
        scroll_percentage: percentage,
        page_url: window.location.href
      })
    }
  },

  // Evento para tempo na página
  trackTimeOnPage: (seconds: number) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'time_on_page',
        time_seconds: seconds,
        page_url: window.location.href
      })
    }
  },

  // Evento para visualização de seções importantes
  trackSectionView: (sectionName: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'section_view',
        section_name: sectionName,
        page_url: window.location.href
      })
    }
  }
}

export default function GTMEventsTracker() {
  return null
}