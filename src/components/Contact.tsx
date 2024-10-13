import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <div className='flex w-full flex-col items-start gap-2 sm:w-fit xl:w-full'>
      <a href='tel:+1 343 597 2566' className='flex gap-2 transition-colors hover:text-primary'>
        <Phone className='text-muted-foreground' />
        +1 343 597 2566
      </a>
      <a href='mailto:someone@example.com' className='flex gap-2 transition-colors hover:text-primary'>
        <Mail className='text-muted-foreground' />
        Mohammad.zanjanchi@gmail.com
      </a>
      <a
        target='_blank'
        href='https://github.com/Mohamadzn'
        className='flex gap-2 transition-colors hover:text-primary'
      >
        <Github className='text-muted-foreground' />
        Mohamadzn
      </a>
      <a
        target='_blank'
        href='https://www.linkedin.com/in/mohammad-zanjanchi-b980a0140'
        className='flex gap-2 transition-colors hover:text-primary'
      >
        <Linkedin className='text-muted-foreground' />
        Mohammad Zanjanchi
      </a>
    </div>
  )
}
