import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import lilyImage from '@/images/lily.png'
import { Button } from '@/components/Button'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Coach Lily - Personal Life Coach" image={{ src: lilyImage }}>
      <div className="space-y-6 text-base text-neutral-600">
        <div>
          <p> We looked at the main needs of our clients; identifying them to be: </p>
          <ul>
              <li><b>Building resilience: </b> Bouncing back from setbacks and adapting.</li>
              <li><b>Work-life balance: </b> Avoiding burnout and better handeling responsibilites.</li>
              <li><b>Finding purpose: </b> Aligning actions with personal values.</li>
              <li><b>Managing stress: </b> Taking control of your life.</li>
          </ul>
         

        </div>
        <p>
          Our team has carefully trained coach Lily to guide our users through their needs - {' '}
          <strong className="font-semibold text-neutral-950">step-by-step</strong>{' '}
          . The users can chat with Lily 24/7 as she grows alongside them on their journey.
        </p>
        <p>
          Coach Lily is specifically meant for users looking to chat with someone regarding their
          personal and career needs.
        </p>
      </div>
      <Button href={"https://coachlily.com"} target='blank' className='px-10 bg-black rounded-full text-3xl py-3 mt-6'>
          Try Now
      </Button>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Self-discovery</TagListItem>
        <TagListItem>Life coaching sessions</TagListItem>
        <TagListItem>Mental wellness reports</TagListItem>
        <TagListItem>Mood charts</TagListItem>
        <TagListItem>Soulful companion</TagListItem>
      </TagList>
    </Section>
  )
}


function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them. We stand by our core values
          to justify each decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Products',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Toolkit For Your Life" title="Tools List">
        <p>
        Lifely&#39;s products are crafted with care and high attention to detail. Each product serves a niche purpose for efficiency and maximizing our resources to transform lives. Satisfaction guaranteed.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        {/* <Build />
        <Deliver /> */}
      </div>

      {/* <Values /> */}

      <ContactSection />
    </>
  )
}
