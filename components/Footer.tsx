import Link from './Link'
//import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import websiteJson from '../website.json'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="github" href={websiteJson.github} size="6" />
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{websiteJson.languages.default.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{websiteJson.languages.default.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/ShoyuRamen1/shoyas-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  )
}

/*<SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" /> use this when you have a
youtube account to link to
<SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
<SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
*/