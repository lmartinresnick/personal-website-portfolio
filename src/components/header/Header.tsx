'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { href: '/', label: 'home' },
  { href: '/about/', label: 'about' },
  { href: '/contact/', label: 'contact' },
];

export default function Header() {
  const pathname = usePathname().replace(/\/$/, '') || '/';

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">luke martin-resnick</div>
        <nav className="nav" aria-label="Main navigation">
          <ul className="nav-links">
            {navigation.map(({ href, label }) => {
              const active = pathname === (href.replace(/\/$/, '') || '/');
              return (
                <li key={href}>
                  <Link href={href} className={active ? 'active' : ''} aria-current={active ? 'page' : undefined}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
