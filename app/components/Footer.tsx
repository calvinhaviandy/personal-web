import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#121210] text-[#f2f0e9]">
      <div className="site-shell flex flex-col gap-5 border-t border-white/20 py-7 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono uppercase tracking-[0.12em] text-white/45">
          © {new Date().getFullYear()} Calvin Valeon Haviandy
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-3 uppercase tracking-[0.12em] text-white/55">
          <Link
            href="https://github.com/calvinhaviandy"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub ↗
          </Link>
          <Link
            href="https://www.linkedin.com/in/calvinhaviandy/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn ↗
          </Link>
          <a href="#top" className="transition hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
