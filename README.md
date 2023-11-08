## Projeto 🤾‍♂️

Desafio de Geolocalização para o processo seletivo para Front-End Engineer do Grupo SBF.

### Execução 💻

Use o comando `npm install` para instalar as dependências necessárias para a aplicação.

O comando `npm run dev` inicia um servidor local para desenvolvimento.

Os comandos `npm run build` e `npm run start` criam um build de produção e o inicia em um servidor local, respectivamente.

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar a aplicação em execução.

## Requisitos funcionais 🗺️

- Aplicação em Mobile First.
- Exibição de lista com as três lojas mais próximas do usuário para retirada de pedidos.
- Mapa com indicadores da localização das lojas encontradas.

## Demonstração da aplicação 📱

<!-- TODO -->

## Estrutura de pastas 📂

- **public**: criada por padrão pelo NextJS
  - **assets**: armazena recursos estáticos como imagens, fontes e etc.
- **src:**
  - **components**: composta por componentes reutilizáveis de UI e componentes específicos da aplicação.
  - **context**: armazena e expõe variáveis de estado global (Context API do React).
  - **pages**: utilizada para as páginas da aplicação com roteamento feito pelo NextJS.
  - **services**: composta por arquivos de classes com métodos de requisição às APIs REST.
  - **styles**: possui arquivos de estilos globais.
  - **types**: armazena tipos customizados para utilização na aplicação.
  - **utils**: armazena arquivos de funções utilitárias.

## Ferramentas utilizadas 👩‍🔧

#### Editor de Código

- Visual Studio Code

#### Ambiente

- Node v20.9.0

#### Boas práticas de código

- Eslint
- Prettier
- TypeScript

#### Biblioteca de interface do usuário

- ReactJS

#### Server Side Rendering

- NextJS

#### Estilização

- Styled Components

#### Testes unitários

- Jest
- React Testing Library

#### Maps API

- [Google Maps React Wrapper](https://github.com/googlemaps/react-wrapper)

## Cobertura de testes 👩‍💻

<!-- TODO -->

## Implementações futuras 📌

- Fazer tratamento de possíveis erros das APIs utilizadas.
- Implementar versão Desktop.
- Documentar componentes de UI no Storybook

## Links 🔍

[Figma](https://www.figma.com/file/yP8EVezGVQyW6dftG3McY2/Teste-geolocaliza%C3%A7%C3%A3o-front-end?type=design&node-id=16-3570&mode=design)

[Deploy]()

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
