import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Iproduct } from '../interface/product'

const ProductDetail = () => {
    const { id } = useParams()
    const [data, setData] = useState<Iproduct>()
    console.log(data)
    useEffect(() => {
        fetch(`http://127.0.0.1:8080/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data.data))

    }, [])
    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: 50 }}>
            <div style={{ marginRight: '50px' }}>
                <img src={data?.image} alt="" style={{
                    width: '500px',
                    height: '500px',
                    objectFit: 'cover'
                }} />
            </div>
            <div>
                <h3 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>{data?.name}</h3>
                <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>{data?.price}</p>
                <p style={{ fontSize: '18px', marginBottom: '50px' }}>{data?.description}</p>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                    <p style={{ fontSize: '18px', marginRight: '20px' }}>Color:</p>
                    <div style={{ backgroundColor: '#f44336', width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}></div>
                    <div style={{ backgroundColor: '#2196F3', width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}></div>
                    <div style={{ backgroundColor: '#4CAF50', width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}></div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                    <p style={{ fontSize: '18px', marginRight: '20px' }}>Size:</p>
                    <button style={{
                        backgroundColor: '#f37a22',
                        color: '#ffffff',
                        border: 'none',
                        padding: '10px 16px',
                        borderRadius: '4px',
                        width: '60px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginRight: '10px'
                    }}>S</button>
                    <button style={{
                        backgroundColor: '#f37a22',
                        color: '#ffffff',
                        border: 'none',
                        padding: '10px 16px',
                        borderRadius: '4px',
                        width: '60px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginRight: '10px'
                    }}>M</button>
                    <button style={{
                        backgroundColor: '#f37a22',
                        color: '#ffffff',
                        border: 'none',
                        padding: '10px 16px',
                        borderRadius: '4px',
                        width: '60px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginRight: '10px'
                    }}>L</button>
                </div>

                <button style={{
                    backgroundColor: '#f37a22',
                    color: '#ffffff',
                    border: 'none',
                    padding: '10px 16px',
                    borderRadius: '4px',
                    width: '200px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    marginBottom: '50px'
                }}>Add to Cart</button>
            </div>
        </div>

    )
}

export default ProductDetail