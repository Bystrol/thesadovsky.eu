import Image from 'next/image'

export default function LoadingScreen() {
  return (
    <div className="flex justify-center items-center w-full h-svh">
      <Image
        src="/logo.svg"
        alt="The Sadovsky Said Done Est. 2019"
        width={160}
        height={160}
        quality={100}
        className="animate-bounce"
      />
    </div>
  )
}
