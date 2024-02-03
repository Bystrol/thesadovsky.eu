import Image from 'next/image'
import Logo from '../../public/logo.svg'
import LanguagePicker from './LanguagePicker'

type HeaderProps = {
  currentLanguage: string
  handleLanguageChange: (e: React.MouseEvent<HTMLLIElement>) => void
}

export default function Header({
  currentLanguage,
  handleLanguageChange
}: HeaderProps) {
  return (
    <header className="absolute top-0 left-0 w-full flex justify-center bg-black/25 p-4 border-b border-white">
      <div className="relative flex justify-center w-full max-w-[1440px]">
        <Image
          src={Logo}
          alt="The Sadovsky Said Done Est. 2019"
          width={80}
          height={80}
          quality={100}
        />
        <LanguagePicker
          currentLanguage={currentLanguage}
          handleLanguageChange={handleLanguageChange}
        />
      </div>
    </header>
  )
}
