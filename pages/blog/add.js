import { useRouter } from "next/router";

const add = () => {
    const router = useRouter();

    const publish = () => {
        console.log("Publish blog post");
        router.push('/blog');
    }
  return (
    <div>
        <h2>Push redirect ke route blog</h2>
        <button type="button" className="inline-block px-3 py-2 mt-3 text-white bg-blue-600 rounded shadow-sm" onClick={publish}>Push to blog</button>
    </div>
  )
}

export default add