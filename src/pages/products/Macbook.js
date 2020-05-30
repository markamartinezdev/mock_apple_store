import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

// Actions
import { setActiveProductImages, setActiveFeatureImage, setShippingDates } from '../../store/actions'

// Components
import VertNav from '../../components/VerticalNav'
import ShippingDate from '../../components/ShippingDate'

import { macbookFooterImage } from '../../images'

class Macbook extends Component {
    constructor(props) {
        super(props)
        // Set the current active product images
        this.props.setActiveProductImages(this.props.products.find(product => product.name === "macbook"))

        // Get Ship date of product
        // spelling change is to match the response spelling
        if (!this.props.shippingDates['mackbook']) {
            // Get Ship date of product
            axios.get('http://boalt-interview.herokuapp.com/api/shipping-dates').then(res => {
                this.props.setShippingDates(res.data)
            })
        }
    }
    render() {
        return (
            <div className='macbook body-content'>
                <div className="product-header">
                    <div className="product-details">
                        <h1 className="product-name">Macbook Pro</h1>
                        <ShippingDate date={this.props.shippingDates['mackbook']}/>
                        <div className="product-tagline">
                            More power. More pro
                        </div>
                        <div className="product-specs">
                            <div className="spec">
                                <span className="spec-value">8-core</span>
                                <span className="spec-name">Inelprocessor</span>
                            </div>
                            <div className="spec">
                                <span className="spec-value">32GB</span>
                                <span className="spec-name">Memory</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-image-container" style={{backgroundImage: this.props.images ? `url(${this.props.images[0].feature})` : 'blue'}}></div>
                   
                    <div className="newsletter">
                        <div className="newsletter-header">Subscribe Now</div>
                        <div className="form">
                            <input className="form-input" placeholder="Enter the email address"/>
                            <button className="form-submit">Subscribe</button>

                        </div>
                    </div>
                    
                    <VertNav active="macbook"/>
                </div>
                <div className="product-footer">
                    <div className="product-pricing">
                        <div className="buy-now">Buy Now ></div>
                    </div>
                    <div className="footer-image" style={{backgroundImage: `url(${macbookFooterImage})`}}></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        images: state.activeProductImages.images,
        activeFeatureImage: state.activeFeatureImage,
        shippingDates: state.productShipDates

    }
}

export default connect(mapStateToProps,{ setActiveProductImages, setActiveFeatureImage, setShippingDates })(Macbook)