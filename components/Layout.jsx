import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen p-5 bg-gradient-to-r from-cyan-500 to-blue-500">
        <Navbar />
        <main className="flex-1">
        <div className="container mx-auto">
          <div className="p-6 text-gray-700 bg-gray-100 rounded-lg shadow-lg"> 
            {children } 
          </div>
        </div>
        </main>
    </div>
  )
}
