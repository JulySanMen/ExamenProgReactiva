import React from 'react'
import { URL_BACKEND } from '../common/server'

const Tabla = ({setListaProductos, listaProductos}) => {

    const [filtrar, setFiltrar] = React.useState('');

    const mostrarProductos = async () => {
        const response = await fetch(URL_BACKEND)
        if (response.status == 200) {
            const productos = await response.json();
            setListaProductos(productos);
        }

    }
  
    const filtrarBus = ()=>{
        const filtrarProductos = listaProductos.filter((producto)=>producto.title.toLowerCase().includes(filtrar.toLowerCase())||producto.category.toLowerCase().includes(filtrar.toLowerCase()));
        setListaProductos(filtrarProductos);
    }

    return (
            <div className="container">
                <h1>Productos</h1>
                <input  onChange={evt=>(
                    setFiltrar(evt.target.value)
                )} type="text" className="form-control" placeholder="Buscar Producto" />
                <button className="btn btn-primary" onClick={mostrarProductos}>Mostrar Todos</button>
                <button className="btn btn-primary" onClick={filtrarBus}>Buscar</button>

                <table className="table">
                    <thead className="thead-primary">
                        <tr>
                            <th>Título</th>
                            <th>Precio</th>
                            <th>Categoría</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaProductos.map((producto) => (
                                <tr key={producto.id}>
                                    <td>{producto.title}</td>
                                    <td>{producto.price}</td>
                                    <td>{producto.category}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
    )
}

export default Tabla;