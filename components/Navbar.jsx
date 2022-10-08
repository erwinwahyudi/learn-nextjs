import Link from "next/link";

export default function Navbar() {
  return (
    <aside class="w-44 fixed left-0 top-0 bg-slate-700 p-10 m-1">
        <nav>
            <ul>
                <li className="text-white"><Link href="/" >Home</Link></li>
                <li className="text-white"><Link href="/about">About</Link></li>
                <li className="text-white"><Link href="/blog">Blog</Link></li>
            </ul>
        </nav>
    </aside>
  )
}
