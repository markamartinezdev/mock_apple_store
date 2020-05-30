import { combineReducers } from 'redux'

import {
    iphoneFrontLarge,
    iphoneFrontSmall,
    iphoneBackLarge,
    iphoneBackSmall,
    watchBlackLarge,
    watchWhiteLarge,
    macbookFeature
} from '../../images'

// Session reducers
const users = () => {
    return [
        {
            fullName: 'test user',
            email: 'email',
            password: 'password'
        }
    ]
}

const activeUser = (activeUser = {}, action) => {
    if (action.type === "SET_ACTIVE_USER") {
        return action.payload
    }
    return activeUser
}

const sessionAuthenticated = (sessionAuthenticated = false, action) => {
    if (action.type === 'SESSION_AUTHENTICATED') {
        return action.payload
    }
    return sessionAuthenticated
}

// Product reducers
const products = () => {
    return [
        // iPhone
        {
            name: 'iphone',
            images: [
                {   id: 0,
                    thumb: iphoneFrontSmall,
                    feature: iphoneFrontLarge,
                    alt: 'iPone front',
                    color: {
                        name: 'black',
                        hex: "#000"
                    },
                },
                {
                    id: 1,
                    thumb: iphoneBackSmall,
                    feature: iphoneBackLarge,
                    alt: 'iPone back',
                    color: {
                        name: 'black',
                        hex: "#000"
                    },
                },

            ],
        },
        // Macbook Pro
        {
            name: 'macbook',
            images: [
                {
                    thumb: null,
                    feature: macbookFeature,
                    alt: 'Macbook',
                    color: {
                        name: 'black',
                        hex: "#fff"
                    }
                },
            ],

        },
        // Apple Watch
        {
            name: 'watch',
            images: [
                {
                    thumb: null,
                    feature: watchWhiteLarge,
                    alt: 'Apple Watch White',
                    color: {
                        name: 'white',
                        hex: "#fff"
                    }
                },
                {
                    thumb: null,
                    feature: watchBlackLarge,
                    alt: 'Apple Watch Black',
                    color: {
                        name: 'black',
                        hex: "#000"
                    },
                },

            ],
        }
    ]
}

const activeProductImages = (images = {}, action) => {
    if (action.type === 'SET_ACTIVE_PRODUCT_IMAGES') {
        return action.payload
    }
    return images
}

const activeFeatureImage = (image = {}, action) => {
    if (action.type === 'SET_ACTIVE_FEATURE_IMAGE') {
        return action.payload
    }
    return image
}

const productShipDates = (shipDates = {}, action) => {
    if (action.type === 'SET_SHIPPING_DATES') {
        return action.payload
    }
    return shipDates
}

export default combineReducers({
    // Session
    users, 
    activeUser, 
    sessionAuthenticated,
    // Products
    products,
    activeProductImages,
    activeFeatureImage,
    productShipDates
})