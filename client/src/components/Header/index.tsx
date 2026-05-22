import { Avatar, Link, SearchField } from '@heroui/react'
import clsx from 'clsx'
import { ShoppingCart } from '@gravity-ui/icons'
import Logo from '../Logo'

const Header = () => {
  const items = [
    {
      text: 'Todo',
      icon: false,
      underline: false,
    },
    {
      text: 'Remeras',
      icon: false,
      underline: false,
    },
    {
      text: 'Pantalones',
      icon: false,
      underline: false,
    },
    {
      text: 'Zapatillas',
      icon: false,
      underline: false,
    },
    {
      text: 'Seguir mi compra',
      icon: true,
      underline: true,
    },
  ]

  return (
    <header className="w-full py-4">
      <nav className="flex items-center justify-between container px-10">
        <div className="flex">
          <Logo />
          <ul className="flex px-10 gap-6">
            {items.map((item, i) => (
              <li key={i}>
                <Link
                  className={clsx(
                    'whitespace-nowrap',
                    item.underline
                      ? 'underline decoration-(--accent) text-(--foreground)'
                      : 'no-underline',
                  )}
                  href="#"
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
