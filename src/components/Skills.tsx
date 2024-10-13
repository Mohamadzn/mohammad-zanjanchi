import { Badge } from '@/components/ui/badge'

export default function Skills() {
  return (
    <div className='flex w-full flex-col gap-4'>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight'>SKILLS</h2>
      <div className='flex flex-col gap-2'>
        <h3 className='text-xl font-semibold tracking-tight'>Programming Languages</h3>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='secondary' className='whitespace-nowrap text-sm'>
            C# (proficient)
          </Badge>
          <Badge variant='secondary' className='whitespace-nowrap text-sm'>
            Python
          </Badge>
          <Badge variant='secondary' className='whitespace-nowrap text-sm'>
            Java
          </Badge>
        </div>
      </div>
      <h3 className='mt-4 text-xl font-semibold tracking-tight'>Game Development</h3>
      <div className='mt-3 flex flex-wrap gap-2'>
        <Badge variant='secondary' className='whitespace-nowrap text-sm'>
          Unity game engine (proficient)
        </Badge>
        <Badge variant='secondary' className='whitespace-nowrap text-sm'>
          Unreal engine
        </Badge>
        <Badge variant='secondary' className='whitespace-nowrap text-sm'>
          Game Maker
        </Badge>
      </div>
      <h3 className='mt-4 text-xl font-semibold tracking-tight'>Software Development</h3>
      <div className='mt-3 flex flex-wrap gap-2'>
        <Badge variant='secondary' className='whitespace-nowrap text-sm'>
          Visual Studio
        </Badge>
        <Badge variant='secondary' className='whitespace-nowrap text-sm'>
          Agile Methodology
        </Badge>
      </div>
      <h3 className='mt-4 text-xl font-semibold tracking-tight'>Tools and Technologies</h3>
      <div className='mt-3 flex flex-wrap gap-2'>
        <Badge variant='secondary' className='whitespace-nowrap text-sm'>
          Numpy
        </Badge>
        <Badge variant='secondary' className='whitespace-nowrap text-sm'>
          Pandas
        </Badge>
        <Badge variant='secondary' className='whitespace-nowrap text-sm'>
          Matplotlib
        </Badge>
      </div>
      <h3 className='mt-4 text-xl font-semibold tracking-tight'>Operating system</h3>
      <div className='mt-3 flex flex-wrap gap-2'>
        <Badge variant='secondary' className='whitespace-nowrap text-sm'>
          GNU/Linux
        </Badge>
        <Badge variant='secondary' className='whitespace-nowrap text-sm'>
          Windows
        </Badge>
      </div>
    </div>
  )
}
