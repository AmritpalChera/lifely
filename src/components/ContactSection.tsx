import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import NewsletterForm from './NewsletterForm'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Allow us to help you be &#34;better&#34;
            </h2>
            <p className='font-display mt-2 text-lg font-medium text-gray-300 [text-wrap:balance] sm:text-xl'>
              Live like a pro - with Lifely.PRO
            </p>
            {/* <div className="mt-6 flex">
              <Button href="/contact" invert>
                Get started
              </Button>
            </div> */}
            <div className="mt-10 border-t border-white/10 pt-10">
              <NewsletterForm isDark />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
