import React, {useEffect, useState } from 'react'
import Tabla from './Tabla'
import {URL_BACKEND} from './common/server'

function App() {
  const [listaProductos, setListaProductos] = useState([])


  return (
    <>
      <Tabla listaProductos={listaProductos} setListaProductos={setListaProductos}/>
    </>
  )
}

export default App
