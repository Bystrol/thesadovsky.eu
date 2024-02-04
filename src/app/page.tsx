'use client'

import Header from '@/components/Header'
import PromotionsSection from '@/components/PromotionsSection'
import useLanguagePicker from '@/hooks/useLanguagePicker'

export default function Home() {
  const { currentLanguage, handleLanguageChange, translation } =
    useLanguagePicker()

  return (
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
  )
}
