import React,{ useState,useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () =>{
    const [products, setProducts] = useState([])

    //Se ejecuta cuando el componente se carga
    useEffect(()=>{
        const fetchProducts = async () => {
            //Se puede mejorar con const {data}
            const res =  await axios.get('/api/products')
            setProducts(res.data)
        }

        fetchProducts()
    }, [])
    //Este arreglo es de dependencias lo que quiere 
    //decir es que se ponene variables y cuando cambia se ejecuta la funcion

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product =>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen;