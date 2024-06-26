## Projeto 🤾‍♂️

Desafio de Geolocalização para o processo seletivo para Front-End Engineer do Grupo SBF.

### Execução 💻

Use o comando `npm install` para instalar as dependências necessárias para a aplicação.

O comando `npm run dev` inicia um servidor local para desenvolvimento.

Os comandos `npm run build` e `npm run start` criam um build de produção e o inicia em um servidor local, respectivamente.

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar a aplicação em execução.

## Requisitos funcionais 🗺️

- Aplicação em Mobile First.
- Utilização das coordenadas atuais do usuário para listagem das três lojas mais próximas para retirada de pedidos.
- Mapa com indicadores da localização das lojas encontradas.

## Demonstração da aplicação 📱

### Layout
<p align="center">  <img src="public\assets\images\demonstracao_1.gif" heigh="100" width="300" alt="demonstracao_1"> </p>

### Funcionalidades
<p align="center">  <img src="public\assets\images\demonstracao_2.gif" heigh="100" width="300" alt="demonstracao_2"> </p>

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

Os testes unitários foram realizados a cada etapa do desenvolvimento para garantir o pleno funcionamento da aplicação.

<p align="center">  <img src="public\assets\images\tests_coverage.png" heigh="125" width="450" alt="tests_coverage"> </p>

## Implementações futuras 📌

- Fazer tratamento de possíveis erros das APIs utilizadas.
- Incluir componentes de carregamento para melhorar a experiência do usuário.
- Detectar clique no botão de voltar em smartphones.
- Implementar versão Desktop.
- Documentar componentes de UI no Storybook

## Links 🔍

[Figma](https://www.figma.com/file/yP8EVezGVQyW6dftG3McY2/Teste-geolocaliza%C3%A7%C3%A3o-front-end?type=design&node-id=16-3570&mode=design)

[Deploy](https://eng-gruposbf-frontend-javascript-3wxo.vercel.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Erros para correção

Erro ocorre ao executar `npm run dev` em um ambiente com versão do NodeJS inferior que a versão 18.

<p align="center">  <img src="public\assets\images\error_node_version.png" heigh="125" width="450" alt="error_node_version"> </p>

### Possíveis soluções:

Ao analisar o erro com atenção e realizar uma rápida pesquisa é possível descobrir que o erro acima pode ser solucionado de duas maneiras:

- Alterando a versão do NodeJS para uma versão igual ou superior a 18 com o auxílio do nvm.

<p align="center">  <img src="public\assets\images\nvm_example.png" heigh="125" width="450" alt="nvm_example"> </p>

- Alterando a versão do NextJS para a versão anterior (13).

<p align="center">  <img src="public\assets\images\next_version_example.png" heigh="125" width="450" alt="next_version_example"> </p>
