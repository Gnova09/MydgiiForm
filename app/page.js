
import Login from './components/login'
import Portada from './components/portada'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row ">
     <Portada />
     <Login />
    </main>
  )
}
