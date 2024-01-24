import { Header } from './Components/Header'
import { Main } from './Components/Main'
import {Services} from './Components/Services'
import TestimonioalContainer from './Components/TestimonioalContainer'
import Gallery from './Components/Gallery'
import { Footer } from './Components/Footer'
function App() {
  return (
    <main className="max-w-full mx-auto relative">
     <Header/>
     <Main/>
     <Services/>
     <TestimonioalContainer/>
     <Gallery/>
     <Footer/>
    </main>
  );
}

export default App
