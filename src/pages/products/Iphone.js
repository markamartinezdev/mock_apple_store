import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import axios from 'axios'

// Actions
import { setActiveProductImages, setActiveFeatureImage, setShippingDates } from '../../store/actions'

// Components
import VertNav from '../../components/VerticalNav'
import ShippingDate from '../../components/ShippingDate'
import ImageSlider from '../../components/ImageSlider'
import Price from '../../components/ProductPrice'

class Iphone extends Component {
    constructor(props) {
        super(props)
        // Set the current active product images
        this.props.setActiveProductImages(this.props.products.find(product => product.name === "iphone"))

        if (!this.props.shippingDates['iphone']) {
            // Get Ship date of product
            axios.get('http://boalt-interview.herokuapp.com/api/shipping-dates').then(res => {
                this.props.setShippingDates(res.data)
            })
        }
    }
    render() {
        return (
            <CSSTransition appear timeout={300} in classNames='product-name'>
                <div className='iphone body-content'>
                        <div className="product-header">
                            <div className="product-details  logo-background">
                                <i className="icon logo"></i>
                                <h1 className="product-name">iPhone</h1>
                                <div className="product-tagline">
                                    The Ultimate IPhone
                                </div>
                                <div className="product-description">
                                    The future is here. Join the iPhone Upgrade Program to get the latest iPhone - NOW!
                                </div>
                                <ShippingDate date={this.props.shippingDates['iphone']}/>
                            </div>
                            <div className="product-image-container">
                                <div className="product-image-floater">
                                    <img className="product-image" src={this.props.activeFeatureImage.feature} alt={this.props.activeFeatureImage.alt}/>
                                </div>  
                            </div>
                            <VertNav active="iphone"/>
                        </div>
                        <div className="product-footer">
                            <Price price="$699"/>
                            {
                                this.props.images.images?
                                <ImageSlider/>:
                                null
                            }
                        </div>
                </div>
            </CSSTransition>
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

export default connect(mapStateToProps,{ setActiveProductImages, setActiveFeatureImage, setShippingDates })(Iphone)
