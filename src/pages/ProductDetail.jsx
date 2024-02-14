import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import pb from '@/api/pocketbase';

function ProductDetailPage() {
  // const { productId } = useParams();
  const { title, color, price } = useLoaderData();
  const productTitle = `${title} (${color})`;
  const productDescription = `${productTitle} 상품은...`;

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle(`${productTitle}`)}</title>
        <meta name="description" content={`${productDescription}`} />
      </Helmet>

      <h2 className="my-5">{productTitle}</h2>
      <span className="price">{price}</span>
      {/* 상품 상세 정보 */}
    </>
  );
}

export default ProductDetailPage;

export async function loader({ params }) {
  const { productId } = params;

  return await pb.collection('products').get(productId);
}
