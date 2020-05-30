import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { setActiveFeatureImage } from '../store/actions'

class ColorPicker extends Component {
    componentDidMount() {
        this.props.setActiveFeatureImage(this.props.images[0])
    } 
    
    render() {
        return (
            <div className="color-picker">
                <div className="colors">
                    {
                    this.props.images.map(image => {
                        return (
                            <div className="color-option" key={image.alt} onClick={()=>this.props.setActiveFeatureImage(image)}>
                                <div style={{background: image.color.hex}} alt={image.alt} className={`color ${this.props.activeImage.alt === image.alt ? 'active':''}`}></div>
                                <div className="color-name">{image.color.name}</div>
                            </div>
                        )
                    })
                    }
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

export default connect(mapStateToProps,{ setActiveFeatureImage })(ColorPicker)
