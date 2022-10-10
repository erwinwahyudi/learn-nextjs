import { useRouter } from "next/router";

const Slug = () => {
    const router = useRouter();
    const {slug = [] } = router.query;
    
    console.log(slug);

  return (
    <div>       
        <h1>Get parameter slug with array: {slug[0]} - {slug[1]}</h1>
    </div>
  )
}

export default Slug