import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p>© {new Date().getFullYear()} Calvin Haviandy</p>
        <div>
          <Link href="https://github.com/calvinhaviandy" target="_blank" rel="noreferrer">GitHub ↗</Link>
          <Link href="https://www.linkedin.com/in/calvinhaviandy/" target="_blank" rel="noreferrer">LinkedIn ↗</Link>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
