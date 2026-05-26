import { Avatar, Link, SearchField } from '@heroui/react'
import clsx from 'clsx'
import { ShoppingCart } from '@gravity-ui/icons'
import Logo from '../Logo'
import { ROUTES } from '../../config/routes'

const NAV_ITEMS = [
  { text: 'Todo', icon: false, underline: false, href: '#' },
  { text: 'Remeras', icon: false, underline: false, href: '#' },
  { text: 'Pantalones', icon: false, underline: false, href: '#' },
  { text: 'Zapatillas', icon: false, underline: false, href: '#' },
  { text: 'Seguir mi compra', icon: true, underline: true, href: ROUTES.TRACKING },
]

const Header = () => {
  return (
    <header className="min-w-full py-4 bg-backgroun/cled">
      <nav className="flex items-center min-w-full justify-between container px-10">
        <div className="flex">
          <Logo />
          <ul className="flex px-10 gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.text}>
                <Link
                  className={clsx(
                    'whitespace-nowrap',
                    item.underline
                      ? 'underline decoration-(--accent) text-(--foreground)'
                      : 'no-underline',
                  )}
                  href={item.href}
                >
                  {item.text}
                  {item.icon && <Link.Icon className="text-(--accent)" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-6">
          <SearchField name="search" variant="secondary">
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input className="w-70" placeholder="Busca entre miles de productos" />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
          <Avatar color="accent" variant="soft">
            <Avatar.Fallback>
              <ShoppingCart />
            </Avatar.Fallback>
          </Avatar>
        </div>
      </nav>
    </header>
  )
}

export default Header
