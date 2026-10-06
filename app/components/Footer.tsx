import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p>© {new Date().getFullYear()} Calvin Haviandy</p>
        <a href="#top">Back to top <Icon name="arrow-up" /></a>
      </div>
    </footer>
  );
}
