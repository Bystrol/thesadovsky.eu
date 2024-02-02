import Image from 'next/image'
import Logo from '../../public/logo.png'

export default function Header() {
  return (
    <header className="flex justify-center w-full bg-black/30 py-4 border-b border-white">
      <Image
        src={Logo}
        alt="The Sadovsky Said Done Est. 2019"
        width={80}
        height={80}
        quality={100}
      ></Image>
    </header>
  )
}
