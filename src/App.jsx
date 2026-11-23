import "./App.css"
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error'

function App() {
return (
  <BrowserRouter>
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a mi App!" subtitle="Nuestros productos" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Estas en la categoria:" subtitle="Productos disponibles:" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
)
}


export default App
