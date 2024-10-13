import { Separator } from '@/components/ui/separator'

export default function Work() {
  return (
    <div className='flex w-full flex-col gap-4'>
      <h2 className='scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight text-primary sm:text-3xl'>
        WORK EXPERIENCE
      </h2>
      <div className='flex w-full flex-col items-center gap-6'>
        <div className='flex w-full flex-col gap-4'>
          <div className='flex flex-col justify-between gap-2 lg:flex-row'>
            <div className='flex flex-col'>
              <h4 className='text-xl font-semibold sm:text-2xl'>Persia Arya Ceramic Co</h4>
              <h5 className='text-lg font-medium sm:text-xl'>Software Engineer</h5>
            </div>
            <div className='text-end text-base font-medium text-muted-foreground sm:text-lg md:text-xl'>
              Tehran-Iran November 2021 - July 2024
            </div>
          </div>
          <p className='leading-7'>
            Work with developed software and enhanced the products.Design, develop, test, and deploy software
            applications and systems according to specifications and project requirements.
          </p>
          <h6 className='text-muted-foreground'>Accomplishments</h6>
          <ul className='-mt-3 ml-6 list-disc [&>li]:mt-1'>
            <li>
              Designed, developed, tested, and deployed software applications and systems based on project
              requirements.
            </li>
            <li>Created well-documented technical documents in compliance with template standards.</li>
            <li>
              Built positive relationships with stakeholders, effectively coordinating work activities to
              achieve project goals.
            </li>
            <li>
              Wrote clean, testable code, and conducted troubleshooting, debugging, and system upgrades.
            </li>
            <li>
              Ensured software was updated with the latest features, maintaining relevance and functionality.
            </li>
          </ul>
        </div>

        <Separator className='w-3/5' />

        <div className='flex w-full flex-col gap-4'>
          <div className='flex flex-col justify-between gap-2 lg:flex-row'>
            <div className='flex flex-col'>
              <h4 className='text-xl font-semibold sm:text-2xl'>Ertebat Gostar Partov-e-Abi Company</h4>
              <h5 className='text-lg font-medium sm:text-xl'>Post Processing Engineer</h5>
            </div>
            <div className='text-end text-base font-medium text-muted-foreground sm:text-lg md:text-xl'>
              Tehran - Iran - March 2021 - July 2021
            </div>
          </div>
          <p className='leading-7'>
            Working in a telecom company as a post processing engineer .Established strong working
            relationships with clients through exceptional communication skills, fostering trust and
            collaboration.
          </p>
          <h6 className='text-muted-foreground'>Accomplishments</h6>
          <ul className='-mt-3 ml-6 list-disc [&>li]:mt-1'>
            <li>Wrote, reviewed and edited technical document in accordance with template requirements.</li>
            <li>
              Developed positive working relationships with stakeholders to effectively coordinate work
              activities.
            </li>
            <li>
              Achieved successful project outcomes by maintaining accurate documentation and meeting strict
              deadlines.
            </li>
          </ul>
        </div>

        <Separator className='w-3/5' />

        <div className='flex w-full flex-col gap-4'>
          <div className='flex flex-col justify-between gap-2 lg:flex-row'>
            <div className='flex flex-col'>
              <h4 className='text-xl font-semibold sm:text-2xl'>Tettra puzzle</h4>
              <h5 className='text-lg font-medium sm:text-xl'>Game designer</h5>
            </div>
            <div className='text-end text-base font-medium text-muted-foreground sm:text-lg md:text-xl'>
              Tehran - Iran - December 2020 - February 2021
            </div>
          </div>
          <p className='leading-7'>
            Worked on transitioning an Android game version to iOS using the Unity platform.
          </p>
          <h6 className='text-muted-foreground'>Accomplishments</h6>
          <ul className='-mt-3 ml-6 list-disc [&>li]:mt-1'>
            <li>Successfully exported a fully functional version of the game to iOS.</li>
            <li>Ensured high-quality gameplay and performance on iOS devices.</li>
          </ul>
        </div>

        <Separator className='w-3/5' />

        <div className='flex w-full flex-col gap-4'>
          <div className='flex flex-col justify-between gap-2 lg:flex-row'>
            <div className='flex flex-col'>
              <h4 className='text-xl font-semibold sm:text-2xl'>MIDOPIA GAME STUDIO</h4>
              <h5 className='text-lg font-medium sm:text-xl'>Game designer programmer</h5>
            </div>
            <div className='text-end text-base font-medium text-muted-foreground sm:text-lg md:text-xl'>
              Rasht - Iran - November 2016 - May 2018
            </div>
          </div>
          <p className='leading-7'>
            Contributed to game development in a startup environment, releasing three games in the Iranian
            market with positive feedback.
          </p>
          <h6 className='text-muted-foreground'>Accomplishments</h6>
          <ul className='-mt-3 ml-6 list-disc [&>li]:mt-1'>
            <li>
              Collaborated with software development and testing teams to design and develop robust solutions
              meeting client requirements.
            </li>
            <li>Identified and implemented process improvements, enhancing development efficiency.</li>
            <li>Resolved complex coding issues, improving software functionality.</li>
            <li>Designed user interfaces that improved product usability and customer satisfaction.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
