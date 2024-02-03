import { useState, useEffect } from 'react'
import translations from '../utils/data/translations.json'
import { Languages } from '@/enums/languages'

export default function useLanguagePicker() {
  const [currentLanguage, setCurrentLanguage] = useState<string>(
    Languages.Polish
  )

  const handleLanguageChange = (e: React.MouseEvent<HTMLLIElement>) => {
    const lang = e.currentTarget.id
    setCurrentLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  useEffect(() => {
    setCurrentLanguage(
      localStorage.getItem('lang') ??
        (navigator.language.includes(Languages.Polish)
          ? Languages.Polish
          : navigator.language.includes(Languages.Ukrainian)
          ? Languages.Ukrainian
          : Languages.English)
    )
  }, [])

  return {
    currentLanguage,
    handleLanguageChange,
    translation:
      currentLanguage == Languages.Polish
        ? translations.pl
        : currentLanguage == Languages.Ukrainian
        ? translations.uk
        : translations.en
  }
}
