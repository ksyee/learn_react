import pb from '@/api/pocketbase';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getDocumentTitle } from '@/utils';
import { shape, string, number } from 'prop-types';

function FetchingData() {
  const productsData = useLoaderData();

  console.log(productsData);

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('데이터 가져오기')}</title>
        <meta name="description" />
      </Helmet>
      <p>데이터 가져오기</p>
    </>
  );
}

export async function loader() {
  const products = await pb.collection('products').getList();

  const productsItem = products.items.map((product) => ({
    ...product,
    price: Number(product.price),
  }));

  return {
    ...products,
    items: productsItem,
  };
}

export default FetchingData;

function ProductCard({ product }) {
  const photoURL = `${import.meta.env.VITE_PB_API}/api/files/${
    product.collectionId
  }/${product.id}/${product.photo}`;

  return (
    <h4>
      <h4>
        {product.title} ({product.color})
      </h4>
      <img src={photoURL} />
    </h4>
  );
}

ProductCard.propTypes = {
  product: shape({
    color: string,
    title: string,
    id: string,
    photo: string,
    price: number,
  }),
};
