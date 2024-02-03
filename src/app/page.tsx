'use client'

import Header from '@/components/Header'
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
      <main className="min-h-svh"></main>
    </>
  )
}
