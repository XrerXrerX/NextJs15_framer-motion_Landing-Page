import './globals.css'
import Navbar from "@/components/page1/Navbar"


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <div className="bg-custom">
          <Navbar />
          {children}
        </div>

      </body>
    </html>

  )
}