import Logo from '../Logo'

const socials = [
  { label: 'IG', href: '#' },
  { label: 'TT', href: '#' },
  { label: 'YT', href: '#' },
  { label: 'X', href: '#' },
]

const shopLinks = [
  'Todos los productos',
  'Remeras',
  'Pantalones',
  'Camperas',
  'Zapatillas',
  'Ofertas',
]

const payments = ['VISA', 'MC', 'AMEX', 'MP', 'BANK']

const Footer = () => (
  <footer className="mt-auto bg-(--background) text-(--foreground)" data-theme="dark">
    <div className="container px-10 py-16 flex justify-between gap-10">
      <div className="flex flex-col gap-6 max-w-xs">
        <Logo />
        <p className="text-sm opacity-60 leading-relaxed">
          Estilo urbano honesto. Diseñado y producido en Argentina desde 2019.
        </p>
        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="border border-current rounded-full px-4 py-2 text-xs opacity-60 hover:opacity-100 transition-opacity"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-semibold text-sm">Tienda</p>
        {shopLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            {link}
          </a>
        ))}
      </div>
    </div>

    <div className="container px-10 py-5 border-t border-current/10 flex items-center justify-between">
      <p className="text-xs opacity-40">
        © 2026 hero. Todos los derechos reservados. ·{' '}
        <a href="#" className="hover:opacity-100">
          Términos
        </a>{' '}
        ·{' '}
        <a href="#" className="hover:opacity-100">
          Privacidad
        </a>
      </p>
      <div className="flex gap-2">
        {payments.map((p) => (
          <span key={p} className="border border-current/20 rounded px-2 py-1 text-xs opacity-40">
            {p}
          </span>
        ))}
      </div>
    </div>
  </footer>
)

export default Footer
