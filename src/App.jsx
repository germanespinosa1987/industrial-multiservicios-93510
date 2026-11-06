import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'


function App() {
  return (
    <main className="d-flex flex-column min-vh-100">
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a mi App!" subtitle="Nuestros productos" />
      <Footer />
    </main>
  )
}


export default App
