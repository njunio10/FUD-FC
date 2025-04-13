import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { produtos } from "../page"; // Importar a lista de produtos de ProdutosPage

export default async function ProdutoDetalhe({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await the params before using them
  const { id } = await params;

  // Buscar o produto com base no ID
  const produto = produtos.find((p) => p.id === Number.parseInt(id));

  // Caso o produto não seja encontrado
  if (!produto) {
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold">Produto não encontrado</h1>
        <Link href="/produtos" className="text-team-blue hover:underline">
          Voltar para produtos
        </Link>
      </div>
    );
  }

  // Log para depuração (executado no servidor)
  console.log("Caminho da imagem em ProdutoDetalhe:", produto.imagem);

  return (
    <div className="container mx-auto py-10">
      <Link
        href="/produtos"
        className="flex items-center text-muted-foreground mb-8 hover:text-foreground transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para produtos
      </Link>

      <div className="grid md:grid-cols-2 gap-10">
      <div className="relative h-64 sm:h-80 md:h-[30rem] bg-muted rounded-lg overflow-hidden">
        <Image
          src={produto.imagem || "/placeholder.svg"}
          alt={produto.nome}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {produto.novo && <Badge className="bg-team-blue hover:bg-team-blue/90 text-team-white">Novo</Badge>}
          {produto.promocao && <Badge className="bg-team-blue hover:bg-team-blue/90 text-team-white">Promoção</Badge>}
        </div>
      </div>

        <div>
          <h1 className="text-3xl font-bold mb-2 text-team-blue">{produto.nome}</h1>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl font-bold text-team-red">R$ {produto.preco.toFixed(2).replace(".", ",")}</span>
            {produto.promocao && (
              <span className="text-muted-foreground line-through text-lg">
                R$ {produto.precoAntigo?.toFixed(2).replace(".", ",")}
              </span>
            )}
          </div>

          <p className="text-muted-foreground mb-8">{produto.descricao}</p>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">Tamanho</h3>
              <RadioGroup defaultValue="M" className="flex flex-wrap gap-3">
                {produto.tamanhos.map((tamanho) => (
                  <div key={tamanho} className="flex items-center space-x-2">
                    <RadioGroupItem value={tamanho} id={`tamanho-${tamanho}`} className="peer sr-only" />
                    <Label
                      htmlFor={`tamanho-${tamanho}`}
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background peer-data-[state=checked]:border-team-blue peer-data-[state=checked]:bg-team-blue/10 peer-data-[state=checked]:text-team-blue cursor-pointer"
                    >
                      {tamanho}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="font-medium mb-3">Cor</h3>
              <RadioGroup defaultValue={produto.cores[0]} className="flex flex-wrap gap-3">
                {produto.cores.map((cor) => (
                  <div key={cor} className="flex items-center space-x-2">
                    <RadioGroupItem value={cor} id={`cor-${cor}`} className="peer sr-only" />
                    <Label
                      htmlFor={`cor-${cor}`}
                      className="flex px-4 py-2 items-center justify-center rounded-md border border-muted bg-background peer-data-[state=checked]:border-team-blue peer-data-[state=checked]:bg-team-blue/10 peer-data-[state=checked]:text-team-blue cursor-pointer"
                    >
                      {cor}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex gap-4 pt-4">
              <Button size="lg" className="flex-1 bg-team-red hover:bg-team-red/90 text-team-white" asChild>
                <Link
                  href={`https://wa.me/556294626833?text=Olá! Tenho interesse na ${produto.nome} por R$ ${produto.preco
                    .toFixed(2)
                    .replace(".", ",")}. Tamanho: M, Cor: ${produto.cores[0]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" /> Clique aqui para pedir a sua
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Tabs defaultValue="detalhes">
          <TabsList className="w-full justify-start bg-team-blue text-team-white">
            <TabsTrigger
              value="detalhes"
              className="data-[state=active]:bg-team-white data-[state=active]:text-team-blue"
            >
              Detalhes do Produto
            </TabsTrigger>
            <TabsTrigger
              value="entrega"
              className="data-[state=active]:bg-team-white data-[state=active]:text-team-blue"
            >
              Entrega e Devolução
            </TabsTrigger>
          </TabsList>
          <TabsContent value="detalhes" className="mt-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Especificações</h3>
              <p className="whitespace-pre-line text-muted-foreground">{produto.detalhes}</p>
            </div>
          </TabsContent>
          <TabsContent value="entrega" className="mt-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Política de Entrega</h3>
              <p className="text-muted-foreground">
                Entrega combinada com o cliente.
              </p>

              <h3 className="text-xl font-semibold">Política de Devolução</h3>
              <p className="text-muted-foreground">
                Você tem até 30 dias para devolver o produto caso não esteja satisfeito. O produto deve estar em
                perfeitas condições, com a etiqueta original e sem sinais de uso.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}