import { useState } from 'react'
import {Cabecalho} from './components/cabecalho'
import {API} from './components/conteudoAPI'
import {Rodape} from './components/rodape'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho/>
      <API/>
      <Rodape/>
    </>
  )
}

export default App
