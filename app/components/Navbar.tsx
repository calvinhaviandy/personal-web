import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-header-inner" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="Calvin Haviandy, home">
          <span className="brand-symbol" aria-hidden="true">✳</span>
          <span>CALVIN / HAVIANDY</span>
        </Link>
        <div className="header-links">
          <Link href="/#work">Work</Link>
          <a href="mailto:calvinhaviandy@gmail.com">Contact <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  );
}
