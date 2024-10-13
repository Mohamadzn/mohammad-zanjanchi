import profilePic from '@/assets/mohammad-zanjanchi.jpg'
import { ThemeProvider } from '@/store/theme-provider'
import { Card } from '@/components/ui/card'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Summary from '@/components/Summary'

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      {/* <ThemeToggle /> */}
      <div className='w-full p-4 sm:p-6'>
        <Card>
          <div className='flex'>
            <div className='flex flex-col gap-4 p-4 sm:gap-6 sm:p-6'>
              <div className=''>
                <h1 className='scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl'>
                  MOHAMMAD ZANJANCHI
                </h1>
              </div>
              <Contact />
              <Summary />
              <div className='flex flex-col gap-4'>
                <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight'>
                  WORK EXPERIENCE
                </h2>
                <div className='mt-1 flex justify-between'>
                  <div className='flex flex-col'>
                    <h4 className='text-xl font-semibold'>Persia Arya Ceramic Co</h4>
                    <h5 className='text-lg font-medium'>Software Engineer</h5>
                  </div>
                  <div className='text-lg font-medium'>Tehran-Iran November 2021 - July 2024</div>
                </div>
                <div className=''>
                  Work with developed software and enhanced the products.Design, develop, test, and deploy
                  software applications and systems according to specifications and project requirements.
                </div>
              </div>
            </div>
            <div className='flex w-[400px] shrink-0 flex-col items-center gap-4 border-s p-4 sm:gap-6 sm:p-6'>
              <div className='py-4'>
                <img src={profilePic} className='w-40 rounded-lg' />
              </div>
              <Skills />
            </div>
          </div>
        </Card>
      </div>
    </ThemeProvider>
  )
}

export default App
