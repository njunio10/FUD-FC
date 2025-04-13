import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Exportar a lista de produtos para uso em ProdutoDetalhe
export const produtos = [
  {
    id: 1,
    nome: "Camisa 1 Jogador",
    preco: 59.9,
    imagem: "/images/brancocamisa.jpg", // Ajustado para caminho relativo à pasta public
    promocao: true,
    precoAntigo: 99.9,
    novo: false,
    descricao:
      "A camisa oficial do time para a temporada atual. Fabricada com tecido de alta qualidade, oferecendo conforto e durabilidade.",
    detalhes:
      "• 100% Poliéster\n• Tecnologia de absorção de suor\n• Escudo do time bordado\n• Patrocinadores estampados",
    tamanhos: ["P", "M", "G", "GG", "XG"],
    cores: ["Branco"],
  },
  {
    id: 2,
    nome: "Camisa 2 Jogador",
    preco: 59.9,
    imagem: "/images/camisazul.jpg", // Ajustado
    promocao: true,
    precoAntigo: 99.9,
    novo: false,
    descricao:
      "A camisa oficial do time para a temporada atual. Fabricada com tecido de alta qualidade, oferecendo conforto e durabilidade.",
    detalhes:
      "• 100% Poliéster\n• Tecnologia de absorção de suor\n• Escudo do time bordado\n• Patrocinadores estampados",
    tamanhos: ["P", "M", "G", "GG", "XG"],
    cores: ["Azul"],
  },
  {
    id: 3,
    nome: "Camisa 3 Jogador",
    preco: 59.9,
    imagem: "/images/camisavermelha.jpg", // Ajustado
    promocao: true,
    precoAntigo: 99.9,
    novo: false,
    descricao:
      "A camisa oficial do time para a temporada atual. Fabricada com tecido de alta qualidade, oferecendo conforto e durabilidade.",
    detalhes:
      "• 100% Poliéster\n• Tecnologia de absorção de suor\n• Escudo do time bordado\n• Patrocinadores estampados",
    tamanhos: ["P", "M", "G", "GG", "XG"],
    cores: ["Vermelho"],
  },
  {
    id: 4,
    nome: "Camisa 4 Jogador",
    preco: 59.9,
    imagem: "/images/camisapreta.jpg", // Ajustado
    promocao: true,
    precoAntigo: 99.9,
    novo: false,
    descricao:
      "A camisa oficial do time para a temporada atual. Fabricada com tecido de alta qualidade, oferecendo conforto e durabilidade.",
    detalhes:
      "• 100% Poliéster\n• Tecnologia de absorção de suor\n• Escudo do time bordado\n• Patrocinadores estampados",
    tamanhos: ["P", "M", "G", "GG", "XG"],
    cores: ["Preto"],
  },
  {
    id: 5,
    nome: "Camisa 1 Goleiro",
    preco: 59.9,
    imagem: "/images/camisagoleiro1.jpg", // Ajustado
    promocao: true,
    precoAntigo: 99.9,
    novo: false,
    descricao:
      "A camisa oficial do goleiro para a temporada atual. Fabricada com tecido de alta qualidade, oferecendo conforto e durabilidade.",
    detalhes:
      "• 100% Poliéster\n• Tecnologia de absorção de suor\n• Escudo do time bordado\n• Patrocinadores estampados",
    tamanhos: ["P", "M", "G", "GG", "XG"],
    cores: ["Verde"],
  },
  {
    id: 6,
    nome: "Camisa 2 Goleiro",
    preco: 59.9,
    imagem: "/images/camisagoleiro2.jpg", // Ajustado
    promocao: true,
    precoAntigo: 99.9,
    novo: false,
    descricao:
      "A camisa oficial do goleiro para a temporada atual. Fabricada com tecido de alta qualidade, oferecendo conforto e durabilidade.",
    detalhes:
      "• 100% Poliéster\n• Tecnologia de absorção de suor\n• Escudo do time bordado\n• Patrocinadores estampados",
    tamanhos: ["P", "M", "G", "GG", "XG"],
    cores: ["Amarelo"],
  },
  {
    id: 7,
    nome: "Camisa 3 Goleiro",
    preco: 59.9,
    imagem: "/images/camisagoleiro3.jpg", // Ajustado
    promocao: true,
    precoAntigo: 99.9,
    novo: false,
    descricao:
      "A camisa oficial do goleiro para a temporada atual. Fabricada com tecido de alta qualidade, oferecendo conforto e durabilidade.",
    detalhes:
      "• 100% Poliéster\n• Tecnologia de absorção de suor\n• Escudo do time bordado\n• Patrocinadores estampados",
    tamanhos: ["P", "M", "G", "GG", "XG"],
    cores: ["Roxo"],
  },
  {
    id: 8,
    nome: "Camisa 4 Goleiro",
    preco: 59.9,
    imagem: "/images/camisagoleiro4.jpg", // Ajustado
    promocao: true,
    precoAntigo: 99.9,
    novo: false,
    descricao:
      "A camisa oficial do goleiro para a temporada atual. Fabricada com tecido de alta qualidade, oferecendo conforto e durabilidade.",
    detalhes:
      "• 100% Poliéster\n• Tecnologia de absorção de suor\n• Escudo do time bordado\n• Patrocinadores estampados",
    tamanhos: ["P", "M", "G", "GG", "XG"],
    cores: ["Cinza"],
  },
  {
    id: 9,
    nome: "Camisa Treinador",
    preco: 59.9,
    imagem: "/placeholder.svg?height=400&width=300", // Mantido como está
    promocao: true,
    precoAntigo: 99.9,
    novo: false,
    descricao:
      "A camisa oficial do treinador para a temporada atual. Fabricada com tecido de alta qualidade, oferecendo conforto e durabilidade.",
    detalhes:
      "• 100% Poliéster\n• Tecnologia de absorção de suor\n• Escudo do time bordado\n• Patrocinadores estampados",
    tamanhos: ["P", "M", "G", "GG", "XG"],
    cores: ["Azul Escuro"],
  },
];

export default function ProdutosPage() {
  return (
    <div className="container mx-auto py-10">
      <Link href="/" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
        <ArrowLeft className="h-5 w-5" />
        <span>Voltar</span>
      </Link>
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4 text-team-blue">Produtos Oficiais</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Vista as cores do seu time com orgulho. Nossa coleção de camisas oficiais combina qualidade premium com o
          espírito do clube.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <Card key={produto.id} className="overflow-hidden">
            <div className="relative h-80 bg-muted">
              <Image src={produto.imagem || "/placeholder.svg"} alt={produto.nome} fill className="object-cover" />
              <div className="absolute top-2 left-2 flex gap-2">
                {produto.novo && <Badge className="bg-team-blue hover:bg-team-blue/90 text-team-white">Novo</Badge>}
                {produto.promocao && (
                  <Badge className="bg-team-blue hover:bg-team-blue/90 text-team-white">Promoção</Badge>
                )}
              </div>
            </div>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-xl mb-2">{produto.nome}</h3>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">R$ {produto.preco.toFixed(2).replace(".", ",")}</span>
                {produto.promocao && (
                  <span className="text-muted-foreground line-through text-sm">
                    R$ {produto.precoAntigo?.toFixed(2).replace(".", ",")}
                  </span>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="border-team-blue text-team-blue hover:bg-team-blue/10" asChild>
                <Link href={`/produtos/${produto.id}`}>Detalhes</Link>
              </Button>
              <Button className="bg-team-red hover:bg-team-red/90 text-team-white" asChild>
                <Link
                  href={`https://wa.me/55556294626833?text=Olá! Tenho interesse na ${produto.nome} por R$ ${produto.preco
                    .toFixed(2)
                    .replace(".", ",")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" /> Comprar
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}