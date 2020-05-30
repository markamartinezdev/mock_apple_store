import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'
import reducers from './store/reducers'


ReactDom.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>, 
    document.querySelector('#root')
)