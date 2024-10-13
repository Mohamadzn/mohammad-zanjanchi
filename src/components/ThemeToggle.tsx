import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useTheme } from '@/store/theme-provider'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light')
    if (theme === 'light') setTheme('dark')
  }

  return (
    <Button variant='outline' size='icon' onClick={toggleTheme} className='flex'>
      <Sun className='h-6 w-6 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute h-6 w-6 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
