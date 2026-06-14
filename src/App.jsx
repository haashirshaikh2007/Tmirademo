import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Experience from './sections/Experience'
import Story from './sections/Story'
import MenuShowcase from './sections/MenuShowcase'
import Gallery from './sections/Gallery'
import Reviews from './sections/Reviews'
import Location from './sections/Location'

function App() {
  return (
    <SmoothScroll>
      <div className="bg-cream min-h-screen text-dark-brown">
        <Navbar />
        
        <main>
          <Hero />
          <Experience />
          <Story />
          <MenuShowcase />
          <Gallery />
          <Reviews />
          <Location />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
