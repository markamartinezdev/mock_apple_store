// Session actions
const setActiveUser = user => {
    return {
        type: 'SET_ACTIVE_USER',
        payload: user
    }
} 

const registerNewUser = user => {
    return {
        type: 'REGISTER_NEW_USER',
        payload: user
    }
}


// Product actions
const setActiveFeatureImage = image => {
    return {
        type: 'SET_ACTIVE_FEATURE_IMAGE',
        payload: image
    }
}

 const setActiveProductImages = images => {
    return {
        type: 'SET_ACTIVE_PRODUCT_IMAGES',
        payload: images
    }
}

const setShippingDates = dates => {
    return {
        type: 'SET_SHIPPING_DATES',
        payload: dates
    }
}

export {
    // Session
    setActiveUser,
    registerNewUser,
    // Product
    setActiveFeatureImage,
    setActiveProductImages,
    setShippingDates
}