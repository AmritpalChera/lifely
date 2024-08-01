import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoLumeResource from '@/images/clients/lume-resource/dark.png'
import amritpal from '@/images/team/amritpal.jpg'
import logoCorite from '@/images/clients/corite/dark.png'
import logoSnow from '@/images/clients/snow/dark.png'
import logoLazuli from '@/images/clients/lazuli/dark.png'
import logoWakefully from '@/images/clients/wakefully/dark.png'
import logofortysix from '@/images/clients/fortysix/dark.png'
import logoExper from '@/images/clients/experai/dark.png'
import logoMindplug from '@/images/clients/mindplug/dark.png'
import imageLaptop from '@/images/laptop.jpg'
import { Article, type CaseStudy, type MDXEntry, loadArticles, loadCaseStudies } from '@/lib/mdx'
import { Button } from '@/components/Button'

const clients = [
  ['Lazuli Marketing Conseil', logoLazuli],
  ['Snow', logoSnow],
  ['Corite', logoCorite],
  ['Lume Resource Group', logoLumeResource],
  ['Wakefully', logoWakefully],
  ['Forty six ten studios', logofortysix],
  ['ExperAI', logoExper],
  ['Mindplug', logoMindplug],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-black py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client as string}>
                <FadeIn>
                  <Image src={logo} alt={client as string} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  articles,
}: {
  articles: Array<MDXEntry<Article>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We use AI coaching to provide tailored guidance to reach your goals. And help you find
          a sense of purpose, develop creativity, manage stress and overcome
          bad habits.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {articles.map((article) => (
            <FadeIn key={article.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={article.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={article.logo}
                      alt={article.title}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={article.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {article.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Article</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {article.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {article.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and eliminate life's roadblocks"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Make progress in your life to attain greater fulfillment and reach your goals
           — we can come up with an endless number of ways.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Personal growth and development">
              If you feel stagnant or unchallenged.
              Have desire for continuous learning and development.
              Experiencing difficulty breaking bad habits or forming good ones.
            </ListItem>
            <ListItem title="Stress and anxiety management">
              Feeling constantly stressed or anxious?
              Difficulty in relaxing or disconnecting from work?
              Experiencing burnout or compassion fatigue?
            </ListItem>
            <ListItem title="Finding life purpose or direction">
              When you feel unfulfilled or uncertain about life goals.
              Having difficulty identifying passions and personal values.
              Looking for future clarity.
            </ListItem>
            <ListItem title="Career disatisfaction">
              Feeling stuck in a job or career path?
              Difficulty in finding work-life balance?
              Challenges in career advancement or transitions?
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'A life coaching newsletter for personal and career growth - written by an engineer!',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  let articles = (await loadArticles()).slice(0, 3);

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Personal And Career Growth Hacks 
          </h1>
          <h2 className='font-display text-2xl mt-4 tracking-tight text-neutral-950 [text-wrap:balance] sm:text-4xl'>
            For Engineers and Entrepreneurs
            </h2>
          <p className="mt-6 text-xl text-neutral-600">
            Simple tricks to help you level up so you can achieve your goals.
          </p>
          <Button href={"#newsletter_form"} className='px-12 bg-black rounded-full text-3xl py-3 mt-6'>
            Subscribe
          </Button>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies articles={articles} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Amritpal', logo: amritpal }}
      >
        Lifely transformed the way I see my life. It helped me recognize
        patterns that were hindering my success and happiness. Now I feel much more aligned with
        my goals!
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
