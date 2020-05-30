import React from 'react'

export default function ProductPrice(props) {
    return (
        <div className="product-pricing">
            <div className="product-price">From {props.price}</div>
            <div className="buy-now">Buy Now ></div>
        </div>
    )
}
