import Image from 'next/image'
import {
  CloudArrowUpIcon,
  ShieldCheckIcon,
  PuzzlePieceIcon,
  BoltIcon,
} from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
const people = [
  {
    name: 'Orlando Cosme',
    role: 'Co-Founder & CEO',
    imageUrl:
      '/orlando.jpeg',
    bio: 'Previously: Startup/VC attorney at Gunderson, securities & government enforcement litigator at Sidley, expansion associate at WeWork, and interest rates trader at Citi.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Ryan Waits',
    role: 'Co-Founder & CTO',
    imageUrl:
      '/ryan.jpeg',
    bio: 'Previously: Head of Engineering at RabbitHole (web3 learn- to-earn), co-founder & lead developer at Sweep, and software developer at Sonic Healthcare.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]

const navigation = [
  { name: 'Product', href: '#', icon: BoltIcon, },
  { name: 'Features', href: '#', icon: BoltIcon, },
  { name: 'Marketplace', href: '#', icon: BoltIcon, },
  { name: 'Company', href: '#', icon: BoltIcon, },
]

const features = [
  {
    name: 'ZK Powered Privacy',
    description:
      'We Leverage Zero-Knowledge technology to enable users to control who they disclose compliance related verifications to via Polygon ID.',
    href: '#',
    icon: BoltIcon,
  },
  {
    name: 'Web3 Composability',
    description:
      'Easy integrations with smart contract protocols and frontend apps (DeFi, DAOs, etc.) to automate, disintermediate, and scale compliance. Users only verify once for a claim and can take it anywhere that accepts our claim.',
    href: '#',
    icon: PuzzlePieceIcon,
  },
  {
    name: 'AI Fraud Prevention',
    description:
      'We utilize AI to verify authenticity of documents and detect fraudulent users—providing customers with integrity and security.',
    href: '#',
    icon: ShieldCheckIcon,
  },
]

const subFeatures = [
  {
    name: 'Various Regulations',
    description:
      'Use Certify to meet requirements for KYC/AML securities, investment company, and other laws.',
    href: '#',
    icon: BoltIcon,
  },
  {
    name: 'Attorney Reviewed',
    description:
      'Our U.S. licensed attorneys review all documents and claims to ensure compliance with applicable laws.',
    href: '#',
    icon: PuzzlePieceIcon,
  },
  {
    name: 'Polygon ID Infrastructure',
    description:
      'Certify uses Polygon ID to issue claims and leverages the Polygon zero-knowledge identity ecosystem. Simply accept Certify claims in your app by easily integrating Polygon ID.',
    href: '#',
    icon: ShieldCheckIcon,
  },
]

export default function Home() {
  return (
    <div className='isolate bg-gray-900'>
      <div className="px-6 pt-6 lg:px-8">
      <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Lexproof</span>
              <Image src="/lexproof-logo.png" alt="" width={175} height={175} />
            </a>
          </div>
          </nav>
          </div>
    <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
      </svg>
      <svg
        viewBox="0 0 1108 632"
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      >
        <path
          fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
          fillOpacity=".2"
          d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
        />
        <defs>
          <linearGradient
            id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
            x1="1220.59"
            x2="-85.053"
            y1="432.766"
            y2="638.714"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4F46E5" />
            <stop offset={1} stopColor="#80CAFF" />
          </linearGradient>
        </defs>
      </svg>
      <main>
        <div className='relative px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl py-24 sm:py-48'>
            <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
              <div className='bg-indigo-900 relative rounded-full py-1 px-3 text-sm leading-6 text-white ring-1 ring-neutral-800/10 hover:ring-white-900/20'>
                Crypto native compliance solutions{' '}
                {/* <a href='#' className='font-semibold text-indigo-600'>
                  <span className='absolute inset-0' aria-hidden='true' />
                  Read more <span aria-hidden='true'>&rarr;</span>
                </a> */}
              </div>
            </div>
            <div className='text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
                Compliance verification <span className='bg-gradient-to-r from-white to-orange-500 text-transparent bg-clip-text'>for web3</span>
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Lexproof provides web3 organizations, dApps, investors, and
                financial institutions with ZK powered compliance solutions that
                complement—instead of undermine—web3's value prop.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='#'
                  className='rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 opacity-50'
                >
                  Coming soon
                </a>
                {/* <a
                  href='#'
                  className='text-base font-semibold leading-7 text-white'
                >
                  Learn more <span aria-hidden='true'>→</span>
                </a> */}
              </div>
            </div>
          </div>
          
        </div>
      </main>
      <div className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <h2 className='text-lg font-semibold leading-8 tracking-tight text-indigo-600'>
              Certify
            </h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              We take care of compliance so you don't have to.
            </p>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Our attorneys review your users' information and make
              verifications so that you can comply with KYC/AML, securities,
              investment company, and other laws.
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
              {features.map((feature) => (
                <div key={feature.name} className='flex flex-col'>
                  <dt className='flex items-center justify-center gap-x-3 text-base font-semibold leading-7 text-gray-900'>
                    <feature.icon
                      className='h-5 w-5 flex-none text-indigo-600'
                      aria-hidden='true'
                    />
                    {feature.name}
                  </dt>
                  <dd className='mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 text-center'>
                    <p className='flex-auto'>{feature.description}</p>
                    {/* <p className='mt-6'>
                      <a
                        href={feature.href}
                        className='text-base font-semibold leading-7 text-indigo-600'
                      >
                        Learn more <span aria-hidden='true'>→</span>
                      </a>
                    </p> */}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            We do the heavy lifting so you can focus on your business.
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {subFeatures.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-100">
                  <p className="flex-auto">{feature.description}</p>
                  
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lawyer + Web3 Veteran Dev: The perfect team to tackle web3 native compliance.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
        {/* <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div> */}
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2023 StackerDAO Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </div>
  )
}
