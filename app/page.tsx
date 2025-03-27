import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Users, Instagram, Facebook, Twitter, Youtube } from "lucide-react"
import MatchCard from "@/components/match-card"
import MiniCalendar from "@/components/mini-calendar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <button className="mr-4 text-gray-700 md:hidden">
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
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
                <span className="sr-only">Menu</span>
              </button>
              <div className="flex items-center gap-2">
                <Image
                  src="images\fud-fc-logo.png"
                  alt="Logo do Time"
                  width={40}
                  height={40}
                  className="w-16 h-16 bg-blue-500 rounded-full"
                />
                <span className="text-xl font-bold hidden md:inline-block">FUT UH DOIDO FC</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-700 hover:text-[#0225C1] font-medium transition-colors">
                Jogos
              </Link>
              <Link href="#" className="text-gray-700 hover:text-[#0225C1] font-medium transition-colors">
                História
              </Link>
              <Link href="#" className="text-gray-700 hover:text-[#0225C1] font-medium transition-colors">
                Redes Sociais
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <span className="text-sm font-medium text-gray-600">Patrocinadores:</span>
                <Link href="#" className="w-16 h-16">
                  <Image
                    src="images/ciclon.png"
                    alt="Patrocinador 1"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </Link>
                <Link href="#" className="w-16 h-16">
                  <Image
                    src="images/g7.png"
                    alt="Patrocinador 2"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </Link>
              </div>
              <button className="text-gray-700 md:hidden">
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
                  className="lucide lucide-more-vertical"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
                <span className="sr-only">Mais opções</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden bg-[#0225C1]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0225C1]/90 to-[#0225C1]/70 z-10" />
        <Image
          src="images/fudgrande.png"
          alt="Time de futebol"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#DC2C1F] px-4 py-1 rounded-full text-white text-sm font-medium mb-4">
              Próximo jogo: Sábado, 15:30
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">O Time Mais Ousado de Goiânia</h1>
            <p className="text-white/90 text-lg md:text-xl mb-8">
              Acompanhe de perto nosso time. Junte-se à nossa torcida e faça parte desta
              história.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="bg-[#DC2C1F] hover:bg-[#DC2C1F]/90 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all"
              >
                Ver Próximos Jogos <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="bg-white hover:bg-white/90 text-[#0225C1] px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all"
              >
                Calendário do Time
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Next Matches Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Próximos Jogos</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <MatchCard />
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Calendário</h3>
              <MiniCalendar />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nosso Elenco</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça os jogadores que defendem nossas cores e levam nossa paixão para dentro de campo.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((player) => (
              <div key={player} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-gray-200 mb-3 relative">
                  <Image
                    src={`/placeholder.svg?height=400&width=300`}
                    alt={`Jogador ${player}`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-gray-900">Jogador {player}</h3>
                <p className="text-sm text-gray-500">Posição</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-white border border-[#0225C1] text-[#0225C1] hover:bg-[#0225C1] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Users className="h-5 w-5" /> Ver elenco completo
            </Link>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa História</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Conheça a trajetória do nosso time, uma equipe formada pela paixão e dedicação ao futebol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="images/arlivre.jpg"
                alt="História do clube"
                width={800}
                height={600}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#DC2C1F] mb-2">Fundação - 2019</h3>
                  <p className="text-gray-700">
                    Nosso time nasceu em 2019, fruto da amizade e do amor pelo futebol. Desde o primeiro jogo, tivemos 
                    jogadores que marcaram nossa trajetória e ajudaram a construir essa equipe que hoje chamamos de família.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#DC2C1F] mb-2">Evolução e Desafios</h3>
                  <p className="text-gray-700">
                    Com o passar dos anos, enfrentamos desafios, disputamos campeonatos e realizamos amistosos 
                    que fortaleceram nossa equipe. Cada partida foi uma lição, cada vitória, uma conquista, 
                    e cada derrota, um aprendizado para nos tornarmos ainda melhores.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#DC2C1F] mb-2">Compromisso Social</h3>
                  <p className="text-gray-700">
                    Acreditamos que o futebol vai além das quatro linhas. Nosso time já organizou ações solidárias 
                    e contribuiu com doações para instituições que precisam de apoio. Fazemos questão de usar 
                    nossa união e paixão pelo esporte para ajudar o próximo.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#DC2C1F] mb-2">O Futuro</h3>
                  <p className="text-gray-700">
                    Ainda estamos em busca da nossa glória eterna. Com garra, dedicação e união, seguimos 
                    escrevendo nossa história, sonhando alto e batalhando para deixar nossa marca no futebol.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-[#0225C1]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Siga-nos nas Redes Sociais</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Fique por dentro de todas as novidades, bastidores e conteúdos exclusivos do clube.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            <a
              href="https://www.instagram.com/futuhdoidofc/"  
              target="_blank"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all rounded-xl p-6 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <span className="text-white font-medium">Instagram</span>
            </a>

            <a
              href="https://www.tiktok.com/@futuhdoidofc"
              target="_blank"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all rounded-xl p-6 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.59 6.69C19.51 6.53 19.35 6.44 19.17 6.44H15.79C15.61 6.44 15.45 6.53 15.37 6.69L12.29 12.39C12.21 12.55 12.21 12.74 12.29 12.9C12.37 13.06 12.53 13.15 12.71 13.15H16.09C16.27 13.15 16.43 13.06 16.51 12.9L19.59 7.2C19.67 7.04 19.67 6.85 19.59 6.69Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.71 11.04C11.63 10.88 11.47 10.79 11.29 10.79H7.91C7.73 10.79 7.57 10.88 7.49 11.04L4.41 16.74C4.33 16.9 4.33 17.09 4.41 17.25C4.49 17.41 4.65 17.5 4.83 17.5H8.21C8.39 17.5 8.55 17.41 8.63 17.25L11.71 11.55C11.79 11.39 11.79 11.2 11.71 11.04Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-white font-medium">TikTok</span>
            </a>

            <a
              href="https://www.youtube.com/@futuhdoidofc" 
              target="_blank"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all rounded-xl p-6 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42c-.19-.71-.77-1.28-1.48-1.47C19.99 4 12 4 12 4s-7.99 0-9.06.95c-.71.19-1.29.76-1.48 1.47-.19.71-.19 1.49-.19 1.49s0 .78.19 1.49c.19.71.77 1.28 1.48 1.47C4.01 12 12 12 12 12s7.99 0 9.06-.95c.71-.19 1.29-.76 1.48-1.47.19-.71.19-1.49.19-1.49s0-.78-.19-1.49zM9.54 14.15v-4.3l3.84 2.15-3.84 2.15z"/>
                </svg>
              </div>
              <span className="text-white font-medium">YouTube</span>
            </a>


            <a
              href="https://x.com/futuhdoidofc?s=21&t=1HrdEnwuC4dney46RA_Gmg&fbclid=PAZXh0bgNhZW0CMTEAAaafxSsffahlNsN4UKDhRxU0Esvji6a2s1s5bnBTUNGUqBZ1r83fyW1IRwE_aem_N9SzkaQ0LcPD_Jr2BnR41g"
              target="_blank"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all rounded-xl p-6 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                <Twitter className="h-8 w-8 text-white" />
              </div>
              <span className="text-white font-medium">X (Twitter)</span>
            </a>

            <a
              href="https://www.whatsapp.com/channel/0029Va55dAh9MF8ywmScl032?fbclid=PAZXh0bgNhZW0CMTEAAaaAyrRorAYkbk7O6Odyn6cyv8B6JS45gnUMsOThvi9ls-MMv4pYCb68w3Q_aem_aeMEli_-X3EG7L5_dlwPeQ"
              target="_blank"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all rounded-xl p-6 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M12 17a5 5 0 0 1-5-5v-1a5 5 0 0 1 10 0v1a5 5 0 0 1-5 5Z" />
                </svg>
              </div>
              <span className="text-white font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

{/* Footer */}
<footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 bg-[#DC2C1F] rounded-full flex items-center justify-center overflow-hidden">
            <img src="images/fud-fc-logo.png" alt="Logo" className="w-full h-full object-cover rounded-full" />
          </div>
          <span className="text-xl font-bold">FUD FC</span>
        </div>
        <p className="text-gray-400 mb-6">Tradição, paixão e comprometimento com o esporte desde 2019.</p>
        <div className="flex gap-4">
          {[
            { name: "instagram", icon: <Instagram className="h-5 w-5" />, link: "https://www.instagram.com/futuhdoidofc/",   }, 
            {
              name: "tiktok",
              icon: (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.59 6.69C19.51 6.53 19.35 6.44 19.17 6.44H15.79C15.61 6.44 15.45 6.53 15.37 6.69L12.29 12.39C12.21 12.55 12.21 12.74 12.29 12.9C12.37 13.06 12.53 13.15 12.71 13.15H16.09C16.27 13.15 16.43 13.06 16.51 12.9L19.59 7.2C19.67 7.04 19.67 6.85 19.59 6.69Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.71 11.04C11.63 10.88 11.47 10.79 11.29 10.79H7.91C7.73 10.79 7.57 10.88 7.49 11.04L4.41 16.74C4.33 16.9 4.33 17.09 4.41 17.25C4.49 17.41 4.65 17.5 4.83 17.5H8.21C8.39 17.5 8.55 17.41 8.63 17.25L11.71 11.55C11.79 11.39 11.79 11.2 11.71 11.04Z"
                    fill="currentColor"
                  />
                </svg>
              ),
              link: "https://www.tiktok.com/@futuhdoidofc" 
            },
            { name: "youtube", icon: <Youtube className="h-5 w-5" />, link: "https://www.youtube.com/@futuhdoidofc" },

            { name: "twitter", icon: <Twitter className="h-5 w-5" />, link: "https://x.com/futuhdoidofc?s=21&t=1HrdEnwuC4dney46RA_Gmg&fbclid=PAZXh0bgNhZW0CMTEAAaafxSsffahlNsN4UKDhRxU0Esvji6a2s1s5bnBTUNGUqBZ1r83fyW1IRwE_aem_N9SzkaQ0LcPD_Jr2BnR41g" }, 
            {
              name: "whatsapp",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M12 17a5 5 0 0 1-5-5v-1a5 5 0 0 1 10 0v1a5 5 0 0 1-5 5Z" />
                </svg>
              ),
              link: "https://www.whatsapp.com/channel/0029Va55dAh9MF8ywmScl032?fbclid=PAZXh0bgNhZW0CMTEAAaaAyrRorAYkbk7O6Odyn6cyv8B6JS45gnUMsOThvi9ls-MMv4pYCb68w3Q_aem_aeMEli_-X3EG7L5_dlwPeQ" // INSIRA O LINK AQUI
            },
          ].map((social) => (
            <Link
              key={social.name}
              href={social.link} // Link adicionado aqui
              target="_blank"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#DC2C1F] transition-colors"
            >
              <span className="sr-only">{social.name}</span>
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Páginas</h3>
        <ul className="space-y-2">
          {["Jogos", "História", "Comunidade", "Notícias"].map((link) => (
            <li key={link}>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Informações Gerais</h3>
        <div className="bg-gray-800 rounded-lg p-4 mb-4">
          <p className="mb-2 font-medium">Dias de Jogo:</p>
          <p className="text-gray-400 mb-3">Qualquer Dia</p>
          <p className="mb-2 font-medium">Cidade:</p>
          <p className="text-gray-400">Goiânia</p>
        </div>
        <address className="not-italic text-gray-400">
          <p className="mb-2">Goiânia - Goiás</p>
          <p className="mb-2">Bairro do Futebol</p>
          <p>CEP: 74000-000</p>
        </address>
      </div>
    </div>

    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-400 text-sm mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} FUT UH DOIDO FC. Todos os direitos reservados.
      </p>
      <div className="flex gap-6">
        <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
          Termos de uso
        </Link>
        <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
          Política de privacidade
        </Link>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

