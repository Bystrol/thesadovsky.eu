import { Translation } from '@/types/translation'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import PromotionCard from './PromotionCard'

type PromotionsSectionProps = {
  translation: Translation
}

const textVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const promotionCards = [
  {
    bgClass: "bg-[url('/logo.svg')]",
    linkHref: 'https://thesadovsky.pl/'
  },
  {
    bgClass: "bg-[url('/logo.svg')]",
    linkHref: 'https://thesadovsky.pl/'
  },
  {
    bgClass: "bg-[url('/logo.svg')]",
    linkHref: 'https://thesadovsky.pl/'
  },
  {
    bgClass: "bg-[url('/logo.svg')]",
    linkHref: 'https://thesadovsky.pl/'
  },
  {
    bgClass: "bg-[url('/logo.svg')]",
    linkHref: 'https://thesadovsky.pl/'
  },
  {
    bgClass: "bg-[url('/logo.svg')]",
    linkHref: 'https://thesadovsky.pl/'
  }
]

export default function PromotionsSection({
  translation
}: PromotionsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <section ref={containerRef} className="flex justify-center">
      <div className="px-4 md:px-0 w-full max-w-[1440px]">
        <motion.h1
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.05 }}
          className="text-center text-[4vh] md:text-[8vh] my-4"
        >
          {translation.heading.split('').map((char, index) => {
            return (
              <motion.span key={index} variants={textVariants}>
                {char}
              </motion.span>
            )
          })}
        </motion.h1>
        <motion.div className="flex flex-col items-center justify-between md:flex-row flex-wrap gap-y-14 md:gap-y-8">
          {translation.cards.map((card, index) => {
            return (
              <PromotionCard
                key={index}
                bgClass={promotionCards[index].bgClass}
                paragraph={card.paragraph}
                linkHref={promotionCards[index].linkHref}
              />
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
