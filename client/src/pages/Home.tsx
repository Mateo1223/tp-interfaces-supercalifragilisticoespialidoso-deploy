import { Switch } from '@heroui/react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useDarkMode } from '../hooks/useDarkMode'

const Home = () => {
  const { dark, toggle } = useDarkMode()

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container px-10 py-4">
        <Switch isSelected={dark} onChange={toggle} aria-label="Dark mode">
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
        </Switch>
      </div>
      <Footer />
    </main>
  )
}

export default Home
