// Utilitários para trabalhar com UTMs

export interface UTMParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  gclid?: string
  fbclid?: string
  ttclid?: string
}

/**
 * Extrai parâmetros UTM da URL atual
 */
export function extractUTMsFromURL(): UTMParams {
  if (typeof window === 'undefined') return {}

  const urlParams = new URLSearchParams(window.location.search)
  return {
    utm_source: urlParams.get('utm_source') || undefined,
    utm_medium: urlParams.get('utm_medium') || undefined,
    utm_campaign: urlParams.get('utm_campaign') || undefined,
    utm_content: urlParams.get('utm_content') || undefined,
    utm_term: urlParams.get('utm_term') || undefined,
    gclid: urlParams.get('gclid') || undefined,
    fbclid: urlParams.get('fbclid') || undefined,
    ttclid: urlParams.get('ttclid') || undefined,
  }
}

/**
 * Salva UTMs no localStorage
 */
export function saveUTMsToStorage(utms: UTMParams): void {
  if (typeof window === 'undefined') return

  try {
    // Remove valores undefined/null
    const cleanUTMs = Object.fromEntries(
      Object.entries(utms).filter(([_, value]) => value != null && value !== '')
    )

    if (Object.keys(cleanUTMs).length > 0) {
      localStorage.setItem('utm_params', JSON.stringify(cleanUTMs))
      localStorage.setItem('utm_timestamp', Date.now().toString())
    }
  } catch (error) {
    console.warn('Erro ao salvar UTMs no storage:', error)
  }
}

/**
 * Recupera UTMs do localStorage
 */
export function getStoredUTMs(maxAgeMs: number = 30 * 24 * 60 * 60 * 1000): UTMParams {
  if (typeof window === 'undefined') return {}

  try {
    const stored = localStorage.getItem('utm_params')
    const timestamp = localStorage.getItem('utm_timestamp')
    
    if (stored && timestamp) {
      const age = Date.now() - parseInt(timestamp)
      
      if (age < maxAgeMs) {
        return JSON.parse(stored)
      } else {
        // Remove UTMs expirados
        localStorage.removeItem('utm_params')
        localStorage.removeItem('utm_timestamp')
      }
    }
  } catch (error) {
    console.warn('Erro ao recuperar UTMs do storage:', error)
  }
  return {}
}

/**
 * Constrói URL com parâmetros UTM
 */
export function buildURLWithUTMs(baseURL: string, utms: UTMParams): string {
  try {
    const url = new URL(baseURL)
    
    Object.entries(utms).forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(key, value)
      }
    })

    // Para Hotmart, adiciona formato SCK
    if (baseURL.includes('hotmart.com')) {
      const sckValues = [
        utms.utm_campaign,
        utms.utm_source,
        utms.utm_medium,
        utms.utm_content,
        utms.utm_term
      ].filter(value => value != null && value !== '')
      
      if (sckValues.length > 0) {
        url.searchParams.set('sck', sckValues.join('|'))
      }
    }
    
    return url.toString()
  } catch (error) {
    console.warn('Erro ao construir URL com UTMs:', error)
    return baseURL
  }
}

/**
 * Verifica se uma URL é externa
 */
export function isExternalURL(url: string): boolean {
  if (typeof window === 'undefined') return false
  
  try {
    const link = new URL(url, window.location.origin)
    return link.hostname !== window.location.hostname
  } catch {
    return false
  }
}

/**
 * Converte UTMs para query string
 */
export function utmsToQueryString(utms: UTMParams, prefix: string = ''): string {
  const params = Object.entries(utms)
    .filter(([_, value]) => value != null && value !== '')
    .map(([key, value]) => `${prefix}${key}=${encodeURIComponent(value!)}`)
  
  return params.join('&')
}

/**
 * Adiciona UTMs aos links de uma página
 */
export function addUTMsToPageLinks(utms: UTMParams): void {
  if (typeof window === 'undefined') return

  const hasUTMs = Object.values(utms).some(value => value != null && value !== '')
  if (!hasUTMs) return

  const links = document.querySelectorAll('a[href]:not(.utm-processed)')
  
  links.forEach(link => {
    const href = link.getAttribute('href')
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return
    }
    
    if (isExternalURL(href)) {
      const newHref = buildURLWithUTMs(href, utms)
      link.setAttribute('href', newHref)
      link.classList.add('utm-processed')
    }
  })
}

/**
 * Exemplo de uso para APIs ou tracking
 */
export function trackEventWithUTMs(eventName: string, additionalData: Record<string, any> = {}): void {
  const utms = extractUTMsFromURL()
  const storedUTMs = getStoredUTMs()
  const finalUTMs = { ...storedUTMs, ...utms }

  // Exemplo de envio para GTM
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...finalUTMs,
      ...additionalData,
      timestamp: new Date().toISOString(),
    })
  }

  // Exemplo de envio para API própria
  // fetch('/api/events', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     event: eventName,
  //     utm_params: finalUTMs,
  //     additional_data: additionalData,
  //     timestamp: new Date().toISOString(),
  //   })
  // })
}