import './globals.css'


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <div>
          {children}
        </div>

      </body>
    </html>

  )
}