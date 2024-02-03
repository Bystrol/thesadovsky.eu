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
      <main className="min-h-svh py-[105px] md:pb-[20px]">
        <PromotionsSection translation={translation} />
      </main>
    </>
  )
}
