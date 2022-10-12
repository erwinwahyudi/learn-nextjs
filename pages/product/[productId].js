const ProductDetail = ({ product }) => {
  return (
    <div>
      ProductDetail: { product.name } - { product.price }
    </div>
  );
}

export default ProductDetail

export const getStaticPaths = async() => {
  const response = await fetch(`http://localhost:2000/product`);
  const data = await response.json();

  const paths = data.map((item) => ({
    params: {
      productId: `${item.id}`,
    }
  }));

  return {
    // paths: paths -> dalam es6, jika key dan value sama, bisa disingkat 1 atrribute saja, menjadi -> paths
    paths,
    fallback: false, // false, true, blocking
  }
}

export const getStaticProps = async ({ params }) => {
  const response = await fetch(`http://localhost:2000/product/${params.productId}`);
  const data = await response.json();

  return {
    props: {
      product: data,
    }
  };
};