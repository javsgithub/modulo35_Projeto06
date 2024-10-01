import DishList from './components/DishList'
import Footer from './components/Footer'
import Hero from './components/Hero'
import GlobalCss, { MainContainer } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Hero />
      <MainContainer>
        <DishList />
      </MainContainer>
      <Footer />
    </>
  )
}

export default App
