
import React from 'react'
import './App.css'
import { Cart } from './components/Cart'
import ListComponent from './components/ListComponent'
import ParameterPanel from './components/ParameterPanel'
import CartContextProvider from './ctx/CartContext'
import { FiltersContext } from './ctx/FiltersContext'
import { Product, productParseData } from './service/Products'

function App() {
  const { filterData } = React.useContext(FiltersContext)

  const filteredData: Product[] = filterData(productParseData())
  return (
    <>
      <ParameterPanel />
      <CartContextProvider>
        <Cart />
        <ListComponent products={filteredData} />
      </CartContextProvider>
    </>
  )
}

export default App
