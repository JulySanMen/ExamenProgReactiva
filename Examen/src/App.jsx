import React, {useEffect, useState } from 'react'
import Tabla from './Tabla'
import { URL_BACKEND } from './common/server'

function App() {
  const [listaProductos, setListaProductos] = useState([])
  const obtenerDatos = async ()=>{
    const response = await fetch(URL_BACKEND+"/productos");
    if(response.status ==200){
      const productos = await response.json();
      setListaProductos(productos);
      console.log(productos);
    }
  }

  useEffect(()=>{
    obtenerDatos();
  },[]);

  return (
    <>
      <Tabla listaProductos={listaProductos}/>
    </>
  )
}

export default App
