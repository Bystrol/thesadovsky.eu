import { useState, useEffect, useRef } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { Languages } from '@/enums/languages'

type LanguagePickerProps = {
  currentLanguage: string
  handleLanguageChange: (e: React.MouseEvent<HTMLLIElement>) => void
}

export default function LanguagePicker({
  currentLanguage,
  handleLanguageChange
}: LanguagePickerProps) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const pickerRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setShowDropdown((prevShow) => !prevShow)
  }

  useEffect(() => {
    const handleDropdownVisibility = (e: MouseEvent) => {
      const targetElement = e.target as Element

      if (!pickerRef.current?.contains(targetElement)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('click', handleDropdownVisibility)

    return () => document.removeEventListener('click', handleDropdownVisibility)
  }, [])

  const languagesList = [
    {
      lang: Languages.Polish,
      bgClass: "bg-[url('/pl_flag.png')]"
    },
    {
      lang: Languages.Ukrainian,
      bgClass: "bg-[url('/uk_flag.png')]"
    },
    {
      lang: Languages.English,
      bgClass: "bg-[url('/en_flag.png')]"
    }
  ]

  return (
    <>
      <div
        ref={pickerRef}
        className={`group absolute top-1/2 -translate-y-1/2 right-0 flex justify-between gap-2 ${
          showDropdown ? 'bg-white border-black' : 'bg-transparent border-white'
        } hover:bg-white border hover:border-black rounded-md p-2 hover:cursor-pointer transition-all duration-300`}
        onClick={toggleDropdown}
      >
        <div
          className={`w-[30px] h-[20px] bg-center bg-cover bg-[url('/${currentLanguage}_flag.png')]`}
        />
        <MdOutlineKeyboardArrowDown
          size={20}
          className={`group-hover:text-black transition-all duration-300 ${
            showDropdown ? 'rotate-180 text-black' : 'text-white'
          }`}
        />
      </div>
      {showDropdown ? (
        <ul className="flex flex-col absolute top-1/2 translate-y-[19px] right-[28px] rounded-md border border-black overflow-hidden">
          {languagesList
            .filter((language) => language.lang !== currentLanguage)
            .map((language) => {
              return (
                <li
                  id={language.lang}
                  key={language.lang}
                  className="p-2 bg-white hover:bg-zinc-300 hover:cursor-pointer transition-all duration-300"
                  onClick={(e) => handleLanguageChange(e)}
                >
                  <div
                    className={`w-[30px] h-[20px] bg-center bg-cover ${language.bgClass}`}
                  />
                </li>
              )
            })}
        </ul>
      ) : null}
    </>
  )
}
