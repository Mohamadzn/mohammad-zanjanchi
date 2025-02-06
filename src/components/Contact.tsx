import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <div className='flex w-full flex-col items-start sm:w-fit xl:w-full'>
      <a href='tel:+1 343 597 2566' className='group flex gap-2 py-1 transition-colors hover:text-primary'>
        <Phone className='text-muted-foreground group-hover:text-primary' />
        +1 343 597 2566
      </a>
      <a
        href='mailto:someone@example.com'
        className='group flex gap-2 py-1 transition-colors hover:text-primary'
      >
        <Mail className='text-muted-foreground group-hover:text-primary' />
        Mohammad.zanjanchi@gmail.com
      </a>
      <a
        target='_blank'
        href='https://github.com/Mohamadzn'
        className='group flex gap-2 py-1 transition-colors hover:text-primary'
      >
        <Github className='text-muted-foreground group-hover:text-primary' />
        Mohamadzn
      </a>
      <a
        target='_blank'
        href='https://www.linkedin.com/in/mohammad-zanjanchi-b980a0140'
        className='group flex gap-2 py-1 transition-colors hover:text-primary'
      >
        <Linkedin className='text-muted-foreground group-hover:text-primary' />
        Mohammad Zanjanchi
      </a>
      {/* <a
        target='_blank'
        href='https://maps.app.goo.gl/CA1YULQCnFPptjMv7'
        className='group flex gap-2 py-1 transition-colors hover:text-primary'
      >
        <MapPin className='text-muted-foreground group-hover:text-primary' />
        308 MCConvey Drive, Richmond Hill, Ontario, L4C 3K3
      </a> */}
    </div>
  )
}
