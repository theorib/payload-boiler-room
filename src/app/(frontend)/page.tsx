import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload/payload.config'
import './styles.css'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="m-auto flex h-full max-w-lg flex-col items-center justify-between p-11">
      <div className="flex grow flex-col items-center justify-between">
        <picture className="">
          <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
          <Image
            className="block h-auto max-w-full invert"
            alt="Payload Logo"
            height={65}
            src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
            width={65}
          />
        </picture>
        {!user && (
          <h1 className="my-10 text-center text-6xl leading-16 font-bold">
            Welcome to your new project.
          </h1>
        )}
        {user && (
          <h1 className="my-10 text-center text-6xl leading-16 font-bold">
            Welcome back, {user.email}
          </h1>
        )}
        <div className="flex items-center gap-3">
          <Link
            className={buttonVariants({ variant: 'default' })}
            href={payloadConfig.routes.admin}
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to admin panel
          </Link>
          <Link
            className={buttonVariants({ variant: 'outline' })}
            href="https://payloadcms.com/docs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Documentation
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="m-6">Update this page by editing</p>
        <a className="bg-neutral-600 px-2 py-1 text-neutral-300" href={fileURL}>
          <code>app/(frontend)/page.tsx</code>
        </a>
      </div>
    </div>
  )
}
