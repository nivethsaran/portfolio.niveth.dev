import Link from '@/components/Link'

type ExperienceProps = {
  title: string
  company: string
  location: string
  range: string
  url: string
  bullets: string[]
}

const Experience = ({ title, company, location, range, url, bullets }: ExperienceProps) => {
  return (
    <div className="my-3">
      <div className="flex flex-row text-xl">
        <span className="text-gray-500 dark:text-gray-400">{title}</span>{' '}
        <span className="text-gray-500 dark:text-gray-400">&nbsp;@&nbsp;</span>{' '}
        <span className="text-primary-color-500 dark:text-primary-color-dark-500">
          <Link href={url} className="company">
            {company}
          </Link>
        </span>
      </div>
      <div>
        <div className="p-1 font-mono text-sm text-gray-400 dark:text-gray-600">
          {range} · {location}
        </div>
        <div className="p-2">
          {bullets.map((bullet, index) => (
            <div key={index} className="mb-2 flex items-start gap-2">
              <div className="text-primary-color-500 dark:text-primary-color-dark-500 text-lg leading-none">
                &#8227;
              </div>
              <div className="text-gray-500 dark:text-gray-400">{bullet}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="justify-center text-center text-2xl font-medium text-gray-200  dark:text-gray-600">
        &#126;&#126;&#126;
      </div>
    </div>
  )
}

export default Experience
