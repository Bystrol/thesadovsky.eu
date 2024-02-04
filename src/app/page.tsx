'use client'

import Header from '@/components/Header'
import LoadingScreen from '@/components/LoadingScreen'
import PromotionsSection from '@/components/PromotionsSection'
import useLanguagePicker from '@/hooks/useLanguagePicker'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const { currentLanguage, handleLanguageChange, translation } =
    useLanguagePicker()

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header
            currentLanguage={currentLanguage}
            handleLanguageChange={handleLanguageChange}
          />
          <main className="min-h-svh py-[105px]">
            <PromotionsSection translation={translation} />
          </main>
          <footer className="w-full py-4">
            <p className="text-center">© The Sadovsky Barbershop 2024</p>
          </footer>
        </>
      )}
    </>
  )
}
