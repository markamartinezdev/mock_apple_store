import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { setActiveFeatureImage } from '../store/actions'

class ImageSlider extends Component {
    componentDidMount() {
        this.props.setActiveFeatureImage(this.props.images[0])
    } 
    
    render() {
        return (
            <div className="image-changer">
                <div className="images">
                    {
                    this.props.images.map(image => {
                        return (
                            <div className={`image-option ${this.props.activeImage.alt === image.alt ? 'active':''}`} key={image.alt}>
                                <img src={image.thumb} alt={image.alt} onClick={()=>this.props.setActiveFeatureImage(image)}/>
                            </div>
                        )
                    })
                    }
                </div>
                <div className="slider">
                    <div className={`slider-thumb ${this.props.activeImage.id === 1 ? 'right': ''}`}></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {    
        activeImage: state.activeFeatureImage,
        images: state.activeProductImages.images
    }
}

export default connect(mapStateToProps,{ setActiveFeatureImage })(ImageSlider)
