import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex">
        <Navbar />
        <main class="flex-1 ml-44"> {children } </main>
    </div>
  )
}
