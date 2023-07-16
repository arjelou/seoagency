import { Navbar, Hero, About, Chooseus, Services, Footer } from "./component"

function App() {

  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Chooseus />
        <Services />
        <Footer />
      </div>
    </>
  )
}

export default App
