import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

// Actions
import { setActiveProductImages, setShippingDates } from '../../store/actions'

// Components
import VertNav from '../../components/VerticalNav'
import ShippingDate from '../../components/ShippingDate'
import ColorPicker from '../../components/ColorPicker'
import Price from '../../components/ProductPrice'

class Watch extends Component {
        constructor(props) {
            super(props)
            // Set the current active product images
            this.props.setActiveProductImages(this.props.products.find(product => product.name === "watch"))

            // Get Ship date of product
            if (!this.props.shippingDates['watch']) {
                // Get Ship date of product
                axios.get('http://boalt-interview.herokuapp.com/api/shipping-dates').then(res => {
                    this.props.setShippingDates(res.data)
                })
            }
        }
    render() {
        return (
            <div className='watch body-content'>
                <div className="product-header">
                    <div className="product-details  logo-background">
                        <i className="icon logo"></i>
                        <h1 className="product-name">Apple Watch</h1>
                        <div className="product-tagline">
                            Change starts within.
                        </div>
                        <div className="product-description">
                            Apple Watch Series 4. Fundamentally redesigned and re‑engineered to help you be even more active, healthy, and connected.
                        </div>
                        <ShippingDate date={this.props.shippingDates['watch']}/>
                    </div>
                    <div className="product-image-container">
                        <div className="image-wrapper">
                            <img className="product-image" src={this.props.activeFeatureImage.feature} alt={this.props.activeFeatureImage.alt}/>
                        </div>
                        {
                        this.props.images.images ?
                        <ColorPicker/>:
                        null
                        }
                    </div>
                    <VertNav active="watch"/>
                </div>
                <div className="product-footer">
                    <Price price="$699"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        images: state.activeProductImages,
        activeFeatureImage: state.activeFeatureImage,
        shippingDates: state.productShipDates
    }
}

export default connect(mapStateToProps,{setActiveProductImages, setShippingDates})(Watch)