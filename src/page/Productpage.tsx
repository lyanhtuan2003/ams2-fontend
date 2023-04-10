import React from 'react'
import { Iproduct } from '../interface/product'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
interface Iprops {
    product: Iproduct[]
}
const Productpage = (props: Iprops) => {
    const [data, setData] = useState<Iproduct[]>([])
    console.log(data)
    useEffect(() => {
        setData(props.product)
    }, [props])
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {data.map((item, ind) => (
                <div key={ind + 1} style={{
                    width: '300px',
                    height: '300px',
                    margin: '10px',
                    boxSizing: 'border-box',
                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px 0px' // hiệu ứng đổ bóng cho khối sản phẩm
                }}>
                    <Link to={`/product/${item._id}`}>
                        <img
                            src={item.image}
                            alt=""
                            style={{
                                display: 'block',
                                margin: '0 auto',
                                width: '80%',
                                height: 150,
                                objectFit: 'contain'
                            }} />
                    </Link>
                    <div style={{ padding: '10px' }}>
                        <p style={{
                            marginTop: '10px',
                            fontWeight: 'bold',

                            textAlign: 'center',
                            fontSize: '18px'
                        }}>{item.name}</p>
                        <p style={{
                            marginBottom: '10px',
                            textAlign: 'center',
                            fontSize: '16px'
                        }}>{item.price}</p>

                    </div>
                    <button style={{ marginLeft: 110, color: "blue" }}>Mua ngay</button>
                </div>
            ))}
        </div>


    )
}

export default Productpage