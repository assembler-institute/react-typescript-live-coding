import './App.css'
import Products from './components/Products/Products'


function App() {

  return (
    <>
      <h2>E-commerce</h2>
      <Products id={1} title={'iPhone 14'} price={500} counter={0} />
      <Products id={1} title={'iPhone 15'} price={600} counter={0} />
    </>
  )
}

export default App
