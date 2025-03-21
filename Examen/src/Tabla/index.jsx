import React from 'react'
import { URL_BACKEND } from '../common/server'

const Tabla = ({ setListaProductos }) => {

    const mostrarProductos = async () => {
        const response = await fetch(URL_BACKEND + "/productos")
        if (response.sttaus == 200) {
            const productos = await response.json();
            setListaProductos(productos);
        }
    }

    const mostrarPrecio = async()=>{
        const response  = await fetch(URL_BACKEND +"/precio")
        if(response.status == 200){
            const productos = await response.json();
            setListaProductos(productos);
        }
    }

    return (
        <div className="container">
            <h1>Tabla</h1>
            <div className="p-4 max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Productos</h1>
                <input
                    type="text"
                    placeholder="Buscar por nombre o categoría..."
                    className="form-control mb-4"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <table className="table table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Categoría</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product) => (
                            <tr key={product.id} className="text-center">
                                <td>{product.productos}</td>
                                <td>${product.precio}</td>
                                <td>{product.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Tabla;