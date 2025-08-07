"use client"

import { useEffect, useState } from 'react'

interface UTMParams {
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content: string
  utm_term: string
  gclid: string
  fbclid: string
  ttclid: string
}

export function useUTMParams() {
  const [utmParams, setUtmParams] = useState<UTMParams>({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: '',
    utm_term: '',
    gclid: '',
    fbclid: '',
    ttclid: '',
  })

  const [isLoaded, setIsLoaded] = useState(false)

  // Função para capturar UTMs da URL
  const getURLParams = (): UTMParams => {
    if (typeof window === 'undefined') {
      return {
        utm_source: '',
        utm_medium: '',
        utm_campaign: '',
        utm_content: '',
        utm_term: '',
        gclid: '',
        fbclid: '',
        ttclid: '',
      }
    }

    const urlParams = new URLSearchParams(window.location.search)
    return {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_content: urlParams.get('utm_content') || '',
      utm_term: urlParams.get('utm_term') || '',
      gclid: urlParams.get('gclid') || '',
      fbclid: urlParams.get('fbclid') || '',
      ttclid: urlParams.get('ttclid') || '',
    }
  }

  // Função para recuperar UTMs do localStorage
  const getStoredUTMs = (): Partial<UTMParams> => {
    if (typeof window === 'undefined') return {}

    try {
      const stored = localStorage.getItem('utm_params')
      const timestamp = localStorage.getItem('utm_timestamp')
      
      if (stored && timestamp) {
        const age = Date.now() - parseInt(timestamp)
        const maxAge = 30 * 24 * 60 * 60 * 1000 // 30 dias
        
        if (age < maxAge) {
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

  // Função para construir URL com UTMs
  const buildURLWithUTMs = (baseUrl: string, overrideParams?: Partial<UTMParams>): string => {
    try {
      const url = new URL(baseUrl)
      const finalParams = { ...utmParams, ...overrideParams }
      
      Object.entries(finalParams).forEach(([key, value]) => {
        if (value) {
          url.searchParams.set(key, value)
        }
      })

      // Para Hotmart, adiciona formato SCK
      if (baseUrl.includes('hotmart.com')) {
        const sckValues = [
          finalParams.utm_campaign,
          finalParams.utm_source,
          finalParams.utm_medium,
          finalParams.utm_content,
          finalParams.utm_term
        ].filter(value => value !== '')
        
        if (sckValues.length > 0) {
          url.searchParams.set('sck', sckValues.join('|'))
        }
      }
      
      return url.toString()
    } catch (error) {
      console.warn('Erro ao construir URL com UTMs:', error)
      return baseUrl
    }
  }

  // Função para verificar se temos UTMs
  const hasUTMs = (): boolean => {
    return Object.values(utmParams).some(value => value !== '')
  }

  // Função para obter string de UTMs formatada
  const getUTMString = (separator: string = '&'): string => {
    const params = Object.entries(utmParams)
      .filter(([_, value]) => value !== '')
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    
    return params.length > 0 ? params.join(separator) : ''
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Combina UTMs da URL com os armazenados
    const currentUTMs = getURLParams()
    const storedUTMs = getStoredUTMs()
    
    // Prioriza UTMs da URL atual, depois os armazenados
    const combinedUTMs: UTMParams = {
      utm_source: currentUTMs.utm_source || storedUTMs.utm_source || '',
      utm_medium: currentUTMs.utm_medium || storedUTMs.utm_medium || '',
      utm_campaign: currentUTMs.utm_campaign || storedUTMs.utm_campaign || '',
      utm_content: currentUTMs.utm_content || storedUTMs.utm_content || '',
      utm_term: currentUTMs.utm_term || storedUTMs.utm_term || '',
      gclid: currentUTMs.gclid || storedUTMs.gclid || '',
      fbclid: currentUTMs.fbclid || storedUTMs.fbclid || '',
      ttclid: currentUTMs.ttclid || storedUTMs.ttclid || '',
    }

    setUtmParams(combinedUTMs)
    
    // Salva UTMs atuais se existirem
    const hasCurrentUTMs = Object.values(currentUTMs).some(value => value !== '')
    if (hasCurrentUTMs) {
      localStorage.setItem('utm_params', JSON.stringify(currentUTMs))
      localStorage.setItem('utm_timestamp', Date.now().toString())
    }
    
    setIsLoaded(true)
  }, [])

  return {
    utmParams,
    isLoaded,
    hasUTMs,
    buildURLWithUTMs,
    getUTMString,
    getStoredUTMs,
  }
}