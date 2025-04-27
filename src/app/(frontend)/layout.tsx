import './styles.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

// eslint-disable-next-line @typescript-eslint/require-await
export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="">
        <main>{children}</main>
      </body>
    </html>
  )
}
