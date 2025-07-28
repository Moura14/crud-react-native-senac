import React, { createContext, useReducer } from 'react'
import products from '../data/product'

const initialState = { products } // plural!
const ProductContext = createContext({})

const actions = {
  createProduct(state, action) {
    const product = { ...action.payload, id: Math.random() }
    return {
      ...state,
      products: [...state.products, product], // corrigido
    }
  },

  updateProduct(state, action) {
    const updated = action.payload
    return {
      ...state,
      products: state.products.map(p =>
        p.id === updated.id ? updated : p
      ), // corrigido
    }
  },

  deleteProduct(state, action) {
    const product = action.payload
    return {
      ...state,
      products: state.products.filter(p => p.id !== product.id), // corrigido
    }
  },
}

export const ProductProvider = props => {
  function reducer(state, action) {
    const fn = actions[action.type]
    return fn ? fn(state, action) : state
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContext
