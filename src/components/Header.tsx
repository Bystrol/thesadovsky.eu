import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/logo.svg'
import LanguagePicker from './LanguagePicker'
import { FaInstagram } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

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
      <div className="relative flex justify-center items-center w-full max-w-[1440px]">
        <Link
          href="https://www.instagram.com/thesadovsky_warszawa/"
          target="_blank"
          className="absolute left-0 hover:cursor-pointer"
        >
          <FaInstagram size={38} color="#fff" />
        </Link>
        <Link
          href="https://thesadovsky.pl/"
          target="_blank"
          className="absolute left-[50px] hover:cursor-pointer"
        >
          <TbWorldWww size={38} color="#fff" />
        </Link>
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
