import { Badge } from '@/components/ui/badge'

export default function Skills() {
  return (
    <div className='flex w-full flex-col gap-4'>
      <h2 className='scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight text-primary sm:text-3xl'>
        SKILLS
      </h2>
      <div className='flex flex-wrap gap-2'>
        <Badge variant='secondary' className='whitespace-nowrap text-base'>
          Python
        </Badge>
        <Badge variant='secondary' className='whitespace-nowrap text-base'>
          PySpark
        </Badge>
        <Badge variant='secondary' className='whitespace-nowrap text-base'>
          SQL
        </Badge>
        <Badge variant='secondary' className='whitespace-nowrap text-base'>
          C#
        </Badge>
        <Badge variant='secondary' className='whitespace-nowrap text-base'>
          JAVA
        </Badge>
        <Badge variant='secondary' className='whitespace-nowrap text-base'>
          AWS Cloud Services
        </Badge>
        <Badge variant='secondary' className='whitespace-nowrap text-base'>
          Snowflake
        </Badge>
        <Badge variant='secondary' className='whitespace-nowrap text-base'>
          Machine Learning
        </Badge>
        <Badge variant='secondary' className='whitespace-nowrap text-base'>
          Unity Engine
        </Badge>
      </div>
    </div>
  )
}
