# SBJ · Ilha de Capri

Landing page para remarketing via WhatsApp, com foco na evolução da obra do Residencial Ilha de Capri. Projeto independente da campanha SBJ no Topo.

## Publicar no GitHub e na Vercel

1. Crie um repositório no GitHub e envie **o conteúdo desta pasta**.
2. Na Vercel, importe esse repositório. Use **Other** como framework e mantenha a raiz do projeto.
3. A configuração já define `npm run build` e a pasta de saída `public`.
4. Publique. Não é necessário configurar variáveis de ambiente nesta versão.

Se enviar esta pasta dentro de um repositório maior, selecione `SBJ-Capri-GitHub` como **Root Directory** na Vercel.

## Visualizar no computador

Com Node.js 22 instalado:

```sh
npm run dev
```

Abra `http://localhost:4174`. Para conferir os arquivos: `npm run build`.

### Vídeos na prévia

O play carrega o vídeo dentro da página quando ela é servida por HTTP/HTTPS e o JavaScript está habilitado. Ao abrir o HTML diretamente por `file://`, ou em uma prévia que não executa JavaScript, o play usa o link do YouTube em outra aba. O link “Abrir no YouTube” permanece disponível abaixo de cada vídeo.

O YouTube pode recusar reprodução incorporada quando o ambiente não envia a identificação de origem (erro 153). Para avaliar a incorporação, use o servidor local acima ou o endereço publicado na Vercel.

## Conteúdo incluído

- Identidade inspirada no site oficial: branco, azul petróleo, detalhes em verde água e fontes Athiti/Roboto Condensed.
- Capa com o registro da obra fornecido na pasta, recortado visualmente por CSS para mostrar apenas a foto.
- Marco informado pelo cliente: último pavimento de construção concluído.
- Vídeo da obra: `aGA2MHudpkM`.
- Vídeo do empreendimento: `QrXh_095d9g`.
- Botões de agendamento com Fábio: **+55 47 99165-1033**.
- Destaques de 22 anos de história e zero obras em atraso, conforme briefing.
- Informações de localização e produto conferidas no site oficial.

## Contato pelo WhatsApp

O contato é feito diretamente pelo WhatsApp do Fábio: **+55 47 99165-1033**, com mensagem inicial pronta sobre o Ilha de Capri. Os botões funcionam mesmo sem JavaScript.

Por solicitação do cliente, o formulário foi retirado. Esta versão não tem integração com o RD Station nem coleta dados de cadastro na página.

## Atualizar fotos

- Capa atual: `public/assets/capri-obra.png`. É o arquivo `Carrossel Capri 01.png`, com texto e rodapé escondidos pelo recorte CSS em `.work-photo img`.
- Para uma nova foto limpa, substituir o arquivo e mudar `.work-photo img` para `inset: 0; width: 100%; height: 100%; min-width: 0; object-fit: cover; transform: none;`.
- Fachada: `public/assets/capri-fachada.png`, perspectiva ilustrada do site oficial (498 × 622 px). Substituir por uma versão de maior resolução quando disponível. A versão menor original está em `capri-projeto.png`.
- Antes de divulgar no WhatsApp, definir `og:url` e `og:image` com URLs absolutas do domínio publicado, para uma prévia consistente.

## Referências

- [Site da SBJ](https://www.sbjconstrutora.com.br/)
- [Ilha de Capri](https://www.sbjconstrutora.com.br/empreendimento/residencial-ilha-de-capri/)

O andamento mostrado nos vídeos corresponde à data de gravação. Nenhuma previsão de entrega, percentual de obra ou preço foi acrescentado.
