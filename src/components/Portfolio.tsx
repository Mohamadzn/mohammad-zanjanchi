import portfolio from '../../public/mohammad-zanjanchi-portfolio.mp4'

export default function Portfolio() {
  return (
    <div className='flex w-full flex-col gap-4'>
      <h2 className='scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight text-primary sm:text-3xl'>
        PORTFOLIO
      </h2>
      <div className='relative w-full overflow-hidden rounded-lg'>
        <video controls>
          <source src={portfolio} type='video/mp4' />
          Your browser does not support the video tag. Please{' '}
          <a href={portfolio}>click here to download the video.</a>
        </video>
      </div>
    </div>
  )
}
