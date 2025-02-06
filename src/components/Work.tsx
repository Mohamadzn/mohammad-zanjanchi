import { Separator } from '@/components/ui/separator'

export default function Work() {
  return (
    <div className='flex w-full flex-col gap-4'>
      <h2 className='scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight text-primary sm:text-3xl'>
        WORK EXPERIENCE
      </h2>
      <div className='flex w-full flex-col items-center gap-6'>
        <div className='flex w-full flex-col gap-4'>
          <div className='flex flex-col justify-between gap-2 sm:flex-row'>
            <div className='flex flex-col'>
              <h4 className='text-xl font-semibold sm:text-2xl'>FIXENT.CA</h4>
              <h5 className='text-lg font-medium sm:text-xl'>Data Engineer</h5>
            </div>
            <div className='text-end text-base font-medium text-muted-foreground sm:text-lg md:text-xl'>
              September 2024 - Present
            </div>
          </div>
          <ul className='ml-6 list-disc [&>li]:mt-1'>
            <li>
              Created a data pipeline for extracting data from an API and loading it into Snowflake tables as
              variant type.
            </li>
            <li>
              Developed an ETL process to extract multiple files on a daily basis using AWS Glue, storing
              transformed data in Parquet format in AWS S3.
            </li>
            <li>Created stored procedures in Snowflake to retrieve data from the audit framework.</li>
            <li>
              Developed several lambda functions in Python for converting to CSV files and decrypting text
              files in AWS S3 bucket.
            </li>
            <li>
              Developed and executed SQL queries to extract and analyze data from multiple database tables,
              providing valuable insights for business stakeholders.
            </li>
            <li>Migrated MySQL Stored Procedure to snowflake SP.</li>
          </ul>
        </div>
        <Separator className='w-3/5' />

        <div className='flex w-full flex-col gap-4'>
          <div className='flex flex-col justify-between gap-2 sm:flex-row'>
            <div className='flex flex-col'>
              <h4 className='text-xl font-semibold sm:text-2xl'>Persia Ceramic Arya</h4>
              <h5 className='text-lg font-medium sm:text-xl'>Data Engineer</h5>
            </div>
            <div className='text-end text-base font-medium text-muted-foreground sm:text-lg md:text-xl'>
              January 2021 -July 2024
            </div>
          </div>
          <ul className='ml-6 list-disc [&>li]:mt-1'>
            <li>
              Developed and executed optimized SQL queries to extract and analyze data from multiple database
              tables, delivering actionable insights for business stakeholders.
            </li>
            <li>
              Designed and implemented scalable and efficient data pipelines for data processing and
              transformation using distributed computing frameworks such as PySpark.{' '}
            </li>
            <li>
              Enhanced the ETL platform by developing Python-based automation scripts, adding new features
              that improved efficiency and reduced manual intervention.
            </li>
            <li>
              Built Spark applications using PySpark in a distributed environment to process and load large
              volumes of CSV files with varying schemas into a centralized data repository.
            </li>
            <li>
              Developed Python code to merge, join, and concatenate different CSV files, ensuring data
              consistency and accuracy across the pipeline.
            </li>
            <li>
              Created a data model for survey data and built a Python script to fetch data from the Survey
              API. The data was loaded into PostgreSQL database to support Tableau reporting.
            </li>
            <li>
              Utilized advanced database development techniques and analytical skills to streamline data
              workflows and support business intelligence needs.
            </li>
          </ul>
        </div>
        <Separator className='w-3/5' />

        <div className='flex w-full flex-col gap-4'>
          <div className='flex flex-col justify-between gap-2 sm:flex-row'>
            <div className='flex flex-col'>
              <h4 className='text-xl font-semibold sm:text-2xl'>MIDOPIA Game Studio</h4>
              <h5 className='text-lg font-medium sm:text-xl'>Software Engineer</h5>
            </div>
            <div className='text-end text-base font-medium text-muted-foreground sm:text-lg md:text-xl'>
              November 2016-May 2018
            </div>
          </div>
          <ul className='ml-6 list-disc [&>li]:mt-1'>
            <li>Designed and developed engaging 2D and 3D games using Unity3D and Unreal Engine.</li>
            <li>
              Proficient in game physics, AI behavior scripting, and level design to create immersive player
              experiences.
            </li>
            <li>
              Developed and deployed mobile games for Android in Iranian market, achieving 500K downloads in
              10 months.
            </li>
            <li>
              Developed automation scripts with Python and added as a new feature to existing ETL platform.
            </li>
            <li>
              Introduced procedural generation techniques, improving game replayability and reducing manual
              level design time
            </li>
            <li>
              Collaborated with artists and sound designers to align game assets with gameplay mechanics.
            </li>
            <li>Pioneered the use of machine learning for NPC behavior, enhancing player engagement.</li>
            <li>
              Knowledge of AR/VR development, creating immersive gaming experiences using Unity XR Toolkit.
            </li>
            <li>
              Utilized automated testing scripts to ensure game stability across multiple devices and
              platforms.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
