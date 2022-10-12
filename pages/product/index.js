const Products = ({ products }) => {
  return (
    <div>
        {products.map((item) => (
            <ul key={item.id}>
                <li>{item.name} - {item.price}</li>
            </ul>
        ))}
    </div>
  )
}

export default Products;

// implement SSG with getStaticProps
export const getStaticProps = async () => {
    const response = await fetch('http://localhost:2000/product');
    const data = await response.json();

    // console.log(data);

    return {
        props: {
            products: data 
        }
    }
}