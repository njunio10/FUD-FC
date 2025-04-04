import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function History() {
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
              <h1 className="text-2xl md:text-3xl font-bold">Nossa História</h1>
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

      <main className="container mx-auto px-4 py-8">
        {/* Introdução */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Uma História de Paixão e Glória</h2>
              <p className="text-lg text-gray-700 mb-6">
                Fundado em 1950, o FUD FC nasceu da paixão de um grupo de amigos que compartilhavam o sonho de criar
                um clube que representasse os valores de determinação, excelência e espírito esportivo.
              </p>
              <p className="text-lg text-gray-700">
                Ao longo de mais de sete décadas, o clube construiu uma trajetória marcada por conquistas memoráveis,
                superação de desafios e formação de grandes ídolos que deixaram sua marca na história do futebol
                brasileiro e internacional.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Foto histórica do clube"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm">Time campeão de 1955 - Primeira conquista nacional</p>
              </div>
            </div>
          </div>
        </section>

        {/* Linha do tempo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Nossa Linha do Tempo</h2>

          <div className="relative">
            {/* Linha vertical */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#0225C1]"></div>

            {/* Eventos */}
            <div className="space-y-24">
              {/* 1950 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-[#DC2C1F] border-4 border-white shadow"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold text-[#DC2C1F]">1950</h3>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Fundação</h4>
                    <p className="text-gray-700">
                      O FUD FC foi fundado por um grupo de entusiastas do futebol, liderados por João Almeida, que
                      sonhavam em criar um clube que representasse os valores de determinação e excelência esportiva.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Fundação do clube"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 1955 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-[#DC2C1F] border-4 border-white shadow"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:order-2 md:text-left md:pl-12">
                    <h3 className="text-2xl font-bold text-[#DC2C1F]">1955</h3>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Primeiro Título</h4>
                    <p className="text-gray-700">
                      Apenas cinco anos após sua fundação, o FUD FC conquistou seu primeiro título nacional,
                      surpreendendo os grandes clubes da época e estabelecendo-se como uma força emergente no futebol
                      brasileiro.
                    </p>
                  </div>
                  <div className="md:order-1 md:text-right md:pr-12">
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Primeiro título"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 1970-1985 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-[#DC2C1F] border-4 border-white shadow"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold text-[#DC2C1F]">1970-1985</h3>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Era de Ouro</h4>
                    <p className="text-gray-700">
                      Durante os anos 70 e 80, o clube viveu sua era de ouro, conquistando diversos títulos nacionais e
                      formando uma geração de jogadores lendários que deixaram sua marca na história do futebol
                      brasileiro e internacional.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Era de ouro"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2000 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-[#DC2C1F] border-4 border-white shadow"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:order-2 md:text-left md:pl-12">
                    <h3 className="text-2xl font-bold text-[#DC2C1F]">2000</h3>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Novo Estádio</h4>
                    <p className="text-gray-700">
                      A inauguração do moderno Estádio Municipal marcou uma nova era para o clube, proporcionando uma
                      casa à altura de sua grandeza e oferecendo uma experiência incrível para os torcedores.
                    </p>
                  </div>
                  <div className="md:order-1 md:text-right md:pr-12">
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Novo estádio"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Atualidade */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-7 h-7 rounded-full bg-[#DC2C1F] border-4 border-white shadow"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold text-[#DC2C1F]">Atualidade</h3>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Rumo ao Futuro</h4>
                    <p className="text-gray-700">
                      Hoje, o FUD FC continua sua busca pela excelência, investindo em infraestrutura moderna,
                      formação de base e conexão com seus torcedores. O clube mantém viva a chama da paixão pelo futebol
                      e trabalha incansavelmente para escrever novos capítulos gloriosos em sua história.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Time atual"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ídolos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Você sabia?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((idol) => (
              <div key={idol} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative h-80">
                  <Image
                    src={`/placeholder.svg?height=400&width=300`}
                    alt={`Curiosidade ${idol}`}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900">Curiosidade #{idol}</h3>
                  <p className="text-sm text-gray-500 mb-2">Você sabia que...</p>
                  <p className="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit
                    arcu sed erat molestie vehicula.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Títulos */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Conquistas</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#0225C1] mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
                Campeonatos Nacionais
              </h3>
              <ul className="space-y-2">
                {[1955, 1972, 1980, 1985, 2010].map((year) => (
                  <li key={year} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#DC2C1F] rounded-full"></div>
                    <span>{year}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#0225C1] mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
                Copas Regionais
              </h3>
              <ul className="space-y-2">
                {[1960, 1965, 1975, 1982, 1990, 1995, 2005, 2015].map((year) => (
                  <li key={year} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#DC2C1F] rounded-full"></div>
                    <span>{year}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#0225C1] mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
                Torneios Internacionais
              </h3>
              <ul className="space-y-2">
                {[1983, 2012].map((year) => (
                  <li key={year} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#DC2C1F] rounded-full"></div>
                    <span>{year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

