import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function ProdutosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0225C1] text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span>Voltar</span>
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold">Produtos</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white">
                <Image
                  src="/images/fud-fc-logo.png"
                  alt="Logo do Time"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-xl font-bold hidden md:inline-block">FUD FC</span>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
