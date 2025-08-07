"use client"

import { useEffect } from 'react'

export default function UTMTracker() {
  useEffect(() => {
    // Função para capturar UTMs da URL atual
    const getURLParams = () => {
      const urlParams = new URLSearchParams(window.location.search)
      return {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_content: urlParams.get('utm_content') || '',
        utm_term: urlParams.get('utm_term') || '',
        gclid: urlParams.get('gclid') || '', // Google Ads
        fbclid: urlParams.get('fbclid') || '', // Facebook Ads
        ttclid: urlParams.get('ttclid') || '', // TikTok Ads
      }
    }

    // Função para verificar se é URL externa
    const isExternalURL = (url) => {
      try {
        const link = new URL(url, window.location.origin)
        return link.hostname !== window.location.hostname
      } catch {
        return false
      }
    }

    // Função para adicionar UTMs aos links
    const addUTMsToLinks = () => {
      const currentUTMs = getURLParams()
      
      // Verifica se temos UTMs para propagar
      const hasUTMs = Object.values(currentUTMs).some(value => value !== '')
      
      if (!hasUTMs) return

      // Seleciona todos os links externos
      const allLinks = document.querySelectorAll('a[href]')
      
      allLinks.forEach(link => {
        const href = link.getAttribute('href')
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return
        
        const isExternal = isExternalURL(href)
        if (!isExternal) return

        try {
          const url = new URL(href, window.location.origin)
          
          // Para links da Hotmart, usa formato SCK
          if (href.includes('hotmart.com')) {
            const sckValues = [
              currentUTMs.utm_campaign,
              currentUTMs.utm_source, 
              currentUTMs.utm_medium,
              currentUTMs.utm_content,
              currentUTMs.utm_term
            ].filter(value => value !== '')
            
            if (sckValues.length > 0) {
              url.searchParams.set('sck', sckValues.join('|'))
            }
          }
          
          // Para todos os links externos, adiciona UTMs padrão
          Object.entries(currentUTMs).forEach(([key, value]) => {
            if (value) {
              url.searchParams.set(key, value)
            }
          })
          
          link.setAttribute('href', url.toString())
          
          // Adiciona classe para identificar links processados
          link.classList.add('utm-processed')
          
        } catch (error) {
          console.warn('Erro ao processar link:', href, error)
        }
      })
    }

    // Salva UTMs no localStorage para persistência
    const saveUTMsToStorage = () => {
      const currentUTMs = getURLParams()
      const hasUTMs = Object.values(currentUTMs).some(value => value !== '')
      
      if (hasUTMs) {
        localStorage.setItem('utm_params', JSON.stringify(currentUTMs))
        localStorage.setItem('utm_timestamp', Date.now().toString())
      }
    }

    // Recupera UTMs do localStorage se não estiverem na URL
    const getStoredUTMs = () => {
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

    // Execução principal
    const initUTMTracking = () => {
      // Salva UTMs atuais
      saveUTMsToStorage()
      
      // Processa links
      addUTMsToLinks()
      
      // Log para debug
      const currentUTMs = getURLParams()
      const storedUTMs = getStoredUTMs()
      console.log('UTM Tracker:', {
        current: currentUTMs,
        stored: storedUTMs,
        linksProcessed: document.querySelectorAll('a.utm-processed').length
      })
    }

    // Executa imediatamente
    initUTMTracking()
    
    // Observer para novos links adicionados dinamicamente
    const observer = new MutationObserver((mutations) => {
      let shouldProcess = false
      
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Verifica se o novo elemento é um link ou contém links
            if (node.tagName === 'A' || node.querySelector('a')) {
              shouldProcess = true
            }
          }
        })
      })
      
      if (shouldProcess) {
        // Pequeno delay para garantir que o DOM esteja estável
        setTimeout(addUTMsToLinks, 100)
      }
    })
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
    
    // Reprocessa links quando a página ganha foco (útil para SPAs)
    const handleFocus = () => {
      setTimeout(addUTMsToLinks, 100)
    }
    
    window.addEventListener('focus', handleFocus)
    
    // Cleanup
    return () => {
      observer.disconnect()
      window.removeEventListener('focus', handleFocus)
    }
  }, [])

  return null
}