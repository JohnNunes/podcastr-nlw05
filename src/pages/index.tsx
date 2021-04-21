// SSG: static side generation

import { useEffect } from "react";

export default function Home(props) {
  return (
    <>
    <h1>Index</h1>
    <p>{JSON.stringify(props.episodes)}</p>
    </>
  )
}

// getStaticProps (SSG) carrega uma única vez o conteúdo e exibe para os de mais usuários (+ou- como um cache)
// de forma estatica
// Essa função só funciona no modo BUILD
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  // A palavara PROPS é uma convensão no retorno que precisa ser respeitada.
  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 8 // a cada 8 horas será gerado uma nova versão da página "quebrando o cache"
  }
}