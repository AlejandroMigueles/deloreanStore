import { BrowserRouter } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from './components/Footer'
import RoutesIndex from '@/routes'
import { AuthProvider } from '@/context/AuthContext'
import '@/App.css'

function App () {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <RoutesIndex />
        </AuthProvider>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
