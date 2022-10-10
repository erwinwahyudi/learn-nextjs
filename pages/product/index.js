const Products = ({ products }) => {
  return (
    <div>
        {products.map((item) => (
            <li>{item.name}</li>
        ))}
    </div>
  )
}

export default Products;

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:2000/product');
    const data = await response.json();

    return {
        props: {
            products: data 
        }
    }
}