import pb from '@/api/pocketbase';
import { getDocumentTitle, getPbImage } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useSearchParams, Link } from 'react-router-dom';
import { shape, string, number } from 'prop-types';
import getSlug from '../utils/getSlug';

function FetchingDataPage() {
  const [searchParams] = useSearchParams();

  // const size = searchParams.get('size');
  // const filter = searchParams.get('filter');

  const productOptions = {
    size: searchParams.get('size'),
    filter: searchParams.get('filter'),
  };

  const productsData = useLoaderData();

  console.log('searchParams:', searchParams);

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('데이터 가져오기')}</title>
        <meta
          name="description"
          content="리액트 라우터의 새로운 API를 사용해 컴포넌트에 데이터를 공급하여 렌더링 할 수 있습니다."
        />
      </Helmet>
      <h2 className="my-5">데이터 가져오기</h2>
      <ul>
        {productsData.items?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              options={productOptions}
            />
          );
        })}
      </ul>
    </>
  );
}

export default FetchingDataPage;

// 비동기 호출 (GET)
export async function loader() {
  const products = await pb.collection('products').getList();

  const productItems = products.items.map((product) => {
    const photoURL = getPbImage(product);
    product.photo = photoURL;
    return product;
  });

  return {
    ...products,
    items: productItems,
  };
}

/* -------------------------------------------------------------------------- */

function ProductCard({ product, options }) {
  let imageWidth = 'w-full';

  if (options.size) {
    imageWidth = `w-${options.size}`;
  }

  console.log(imageWidth);

  const slug = `${getSlug(product.title)}/color/${getSlug(product.color)}`;

  return (
    <li className="flex flex-col space-y-1 p-2 border border-zinc-300 bg-white">
      <Link to={`product/${slug}`}>
        <h4>
          {product.title} ({product.color})
        </h4>
        <img
          src={product.photo}
          className="w-full h-auto aspect-auto order-1 self-center"
          alt=""
          style={{
            inlineSize: options.size,
            filter: `${options.filter}()`,
          }}
        />
      </Link>
    </li>
  );
}

ProductCard.propTypes = {
  product: shape({
    id: string,
    collectionId: string,
    title: string,
    color: string,
    photo: string,
    price: number,
  }),
  options: shape({
    size: string,
    filter: string,
  }),
};
