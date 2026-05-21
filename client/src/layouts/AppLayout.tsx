import { Outlet } from 'react-router'

const AppLayout = () => (
  <div>
    <nav>...</nav>
    <main>
      <Outlet /> {/* acá se renderiza la página activa */}
    </main>
  </div>
)

export default AppLayout
