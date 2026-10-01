import Link from "next/link";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p>© {new Date().getFullYear()} Calvin Haviandy</p>
        <div>
          <Link href="https://github.com/calvinhaviandy" target="_blank" rel="noreferrer">GitHub <Icon name="arrow-up-right" /></Link>
          <Link href="https://www.linkedin.com/in/calvinhaviandy/" target="_blank" rel="noreferrer">LinkedIn <Icon name="arrow-up-right" /></Link>
          <a href="#top">Back to top <Icon name="arrow-up" /></a>
        </div>
      </div>
    </footer>
  );
}
