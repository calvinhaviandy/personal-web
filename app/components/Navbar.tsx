import Link from "next/link";
import Icon from "./Icon";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-header-inner" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="Calvin Haviandy, home">
          <span className="brand-symbol" aria-hidden="true"><Icon name="asterisk" /></span>
          <span>CALVIN / HAVIANDY</span>
        </Link>
        <div className="header-links">
          <Link href="/#work">Work</Link>
          <a href="mailto:calvinhaviandy@gmail.com">Contact <Icon name="arrow-up-right" /></a>
        </div>
      </nav>
    </header>
  );
}
