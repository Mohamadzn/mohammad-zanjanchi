export default function Education() {
  return (
    <div className='flex w-full flex-col gap-4'>
      <h2 className='scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight text-primary sm:text-3xl'>
        EDUCATION
      </h2>
      <div className='flex w-full flex-col gap-10'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col justify-between gap-2 lg:flex-row xl:flex-col'>
            <div className='flex flex-col'>
              <h4 className='text-xl font-semibold sm:text-2xl xl:text-xl'>
                Master of Artificial Intelligence
              </h4>
              <h5 className='text-lg font-medium sm:text-xl xl:text-lg'>
                Islamic Azad University South Tehran Branch
              </h5>
            </div>
            <div className='text-end text-base font-medium text-muted-foreground sm:text-lg md:text-xl'>
              September 2020 - Present
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col justify-between gap-2 lg:flex-row xl:flex-col'>
            <div className='flex flex-col'>
              <h4 className='text-xl font-semibold sm:text-2xl xl:text-xl'>
                Computer Engineer - Software Engineer
              </h4>
              <h5 className='text-lg font-medium sm:text-xl xl:text-lg'>Guilan University</h5>
            </div>
            <div className='text-end text-base font-medium text-muted-foreground sm:text-lg md:text-xl'>
              September 2015 -Agusut 2020
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
