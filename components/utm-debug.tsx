"use client"

import { useUTMParams } from '@/hooks/use-utm-params'
import { useState } from 'react'

export default function UTMDebug() {
  const { utmParams, isLoaded, hasUTMs, getUTMString } = useUTMParams()
  const [isVisible, setIsVisible] = useState(false)

  // Só mostra em desenvolvimento ou com parâmetro ?debug=utm
  const shouldShow = process.env.NODE_ENV === 'development' || 
    (typeof window !== 'undefined' && window.location.search.includes('debug=utm'))

  if (!shouldShow || !isLoaded) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-mono hover:bg-gray-700 transition-colors"
      >
        UTM {hasUTMs() ? '✅' : '❌'}
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-sm font-mono text-xs">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-sm">UTM Debug</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-2">
            <div>
              <strong>Status:</strong> {hasUTMs() ? 'Ativo' : 'Sem UTMs'}
            </div>
            
            {Object.entries(utmParams).map(([key, value]) => (
              <div key={key} className={value ? 'text-green-400' : 'text-gray-500'}>
                <strong>{key}:</strong> {value || 'não definido'}
              </div>
            ))}
            
            {hasUTMs() && (
              <div className="mt-3 p-2 bg-gray-800 rounded">
                <strong>Query String:</strong>
                <div className="mt-1 break-all text-blue-400">
                  ?{getUTMString()}
                </div>
              </div>
            )}
            
            <div className="mt-3 text-gray-400 text-xs">
              Links processados: {document.querySelectorAll('a.utm-processed').length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}