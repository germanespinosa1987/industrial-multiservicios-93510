import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'

function App() {
  return (
    <main className="d-flex flex-column min-vh-100">
      <Navbar />
      <ItemListContainer />
      <Footer />
      
    </main>
  )
}


export default App
