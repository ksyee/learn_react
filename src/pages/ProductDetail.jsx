import { getDocumentTitle } from '../utils';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { slug, color } = useParams();

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('디테일이디 디테일')}</title>
        <meta name="description" content="상품 정보" />
      </Helmet>
      <h2>{'상품 이름: ' + slug + `(${color})`}</h2>
    </>
  );
}

export default ProductDetailPage;
