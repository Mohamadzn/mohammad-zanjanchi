import { ThemeProvider } from '@/store/theme-provider'
import { Card } from '@/components/ui/card'
import profilePic from '@/assets/mohammad-zanjanchi.jpg'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Summary from '@/components/Summary'
import Work from '@/components/Work'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import ThemeToggle from '@/components/ThemeToggle'
import Portfolio from '@/components/Portfolio'

export default function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='mx-auto w-full max-w-screen-2xl p-4 sm:p-6'>
        <Card>
          <div className='flex w-full'>
            <div className='flex flex-col items-center gap-10 p-4 sm:p-6'>
              <h1 className='scroll-m-20 whitespace-nowrap text-2xl font-semibold tracking-tight md:text-4xl xl:text-5xl'>
                MOHAMMAD ZANJANCHI
              </h1>
              <div className='relative flex w-full justify-center xl:hidden'>
                <img src={profilePic} className='w-40 rounded-lg' />
                <div className='absolute end-0 top-0'>
                  <ThemeToggle />
                </div>
              </div>
              <Contact />
              <div className='w-full xl:hidden'>
                <Summary />
              </div>
              <Portfolio />
              <div className='w-full xl:hidden'>
                <Skills />
              </div>
              <Work />
              <div className='w-full xl:hidden'>
                <Education />
              </div>
              <div className='w-full xl:hidden'>
                <Projects />
              </div>
            </div>
            <div className='hidden w-[420px] shrink-0 flex-col items-center gap-10 border-s p-6 xl:flex'>
              <div className='relative flex w-full justify-center py-7'>
                <img src={profilePic} className='w-48 rounded-lg' />
                <div className='absolute end-0 top-6'>
                  <ThemeToggle />
                </div>
              </div>
              <Summary />
              <Skills />
              <Education />
              <Projects />
            </div>
          </div>
        </Card>
      </div>
    </ThemeProvider>
  )
}
