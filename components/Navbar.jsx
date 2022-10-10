import Link from "next/link";

export default function Navbar() {
  return (
    <aside className="bg-slate-700 p-10 w-auto h-3/6 mr-5 rounded-lg shadow-md">
      <div class="text-lg mb-5">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
          /erwinwahyudi
        </span>
      </div>
        <nav>
            <ul className="gap-3">
                <li className="text-white"><Link href="/">Home</Link></li>
                <li className="text-white"><Link href="/about">About</Link></li>
                <li className="text-white"><Link href="/blog">Blog</Link></li>
                <li className="text-white"><Link href="/post/1/2">Slug Post</Link></li>
                <li className="text-white"><Link href="/blog/add">Push Redirect</Link></li>
                <li className="text-white"><Link href="/blog/1/comment/2">Dynamic Route</Link></li>
                <li className="text-white"><Link href="/product">Product</Link></li>
            </ul>
        </nav>
    </aside>
  )
}