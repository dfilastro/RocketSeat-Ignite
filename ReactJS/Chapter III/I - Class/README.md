![logoo](https://user-images.githubusercontent.com/90292951/168811294-76740f2a-3b69-4f7b-9dc7-8908d0a88a30.jpg)

# Blog Rocketseat - Criando uma aplicação do zero

O objetivo desse desafio era construir um blog.
Foi desenvolvida em NextJS fazendo integração com o Prismic.

# Principais Funcionalidades

### Home

💻 Listagem dos posts "cadastrados" no Prismic - Mostrando título, autor, data de publicação e primeiro parágrafo

💻 Botão "Carregar Mais Posts", caso existam mais posts a serem carregados (o botão não é exibido se não houver)

![Animação](https://user-images.githubusercontent.com/90292951/168809158-23dd047d-4ab2-468e-a811-cebeb3f1dde5.gif)

### Pages/Post/[slug]

💻 Página gerada estaticamente, utilizando o getStaticProps

💻 Renderização de todas as informações do post

💻 Cáculo do tempo estimado de leitura (considerado 200 palavras / minuto)

![postsslug](https://user-images.githubusercontent.com/90292951/168818083-19a3c957-4032-4023-ba0b-045f9954005d.gif)

## :rocket: Tecnologias

<table>
  <thead>
    <th>Back-end</th>
    <th>Front-end</th>
  </thead>
  <tbody>
    <tr>
      <td>Prismic CMS</td>
      <td>NextJS</td>
    </tr>
    <tr>
      <td>Jest</td>
      <td>Styled-Components</td>
    </tr>
     <tr>
      <td></td>
      <td>TypeScript</td>
    </tr>
     <tr>
      <td></td>
      <td>Jest</td>
    </tr>
  </tbody>
  
</table>
