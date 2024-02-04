import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { DM_Sans } from 'next/font/google'

const dm_sans = DM_Sans({ weight: '400', subsets: ['latin'] })

type PromotionCardProps = {
  bgClass: string
  paragraph: string
  linkHref: string
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 75
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

export default function PromotionCard({
  bgClass,
  paragraph,
  linkHref
}: PromotionCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.1, once: true })

  return (
    <motion.div
      ref={containerRef}
      variants={cardVariants}
      initial="hidden"
      transition={{ duration: 0.5 }}
      animate={isInView ? 'visible' : 'hidden'}
      className="group relative w-full md:w-[32%] h-[50vh] md:h-[60vh] hover:cursor-pointer overflow-hidden"
    >
      <Link href={linkHref} target="_blank">
        <div
          className={`w-full h-full ${bgClass} bg-center bg-cover group-hover:scale-105 transition-all duration-300`}
        />
        <div className="md:opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 w-full bg-black/60 p-2 transition-all duration-300">
          <p className={`text-[3vh] ${dm_sans.className}`}>{paragraph}</p>
        </div>
      </Link>
    </motion.div>
  )
}
