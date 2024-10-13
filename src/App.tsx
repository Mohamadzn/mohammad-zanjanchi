import { ThemeProvider } from '@/store/theme-provider'
import { Card } from '@/components/ui/card'
import profilePic from '@/assets/mohammad-zanjanchi.jpg'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Summary from '@/components/Summary'
import Work from '@/components/Work'
import Education from '@/components/Education'

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='mx-auto w-full max-w-screen-2xl p-4 sm:p-6'>
        <Card>
          <div className='flex'>
            <div className='flex flex-col items-center gap-6 p-4 sm:p-6'>
              <h1 className='scroll-m-20 whitespace-nowrap text-2xl font-semibold tracking-tight md:text-4xl xl:text-5xl'>
                MOHAMMAD ZANJANCHI
              </h1>
              <div className='xl:hidden'>
                <img src={profilePic} className='w-40 rounded-lg' />
              </div>
              <Contact />
              <Summary />
              <div className='w-full xl:hidden'>
                <Skills />
              </div>
              <Work />
              <div className='w-full xl:hidden'>
                <Education />
              </div>
            </div>
            <div className='hidden w-[420px] shrink-0 flex-col items-center gap-6 border-s p-6 xl:flex'>
              <div className='py-4'>
                <img src={profilePic} className='w-40 rounded-lg' />
              </div>
              <Skills />
              <Education />
            </div>
          </div>
        </Card>
      </div>
    </ThemeProvider>
  )
}

export default App
