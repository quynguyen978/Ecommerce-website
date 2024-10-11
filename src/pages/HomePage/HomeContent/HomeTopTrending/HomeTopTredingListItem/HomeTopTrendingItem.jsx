import formatNumberWithDots from '../../../../../Utilities/formatNumberWithDot';
import './HomeTopTrendingListItem.css';


export default function HomeTopTrendingListItem ({products, clickImgProduct, fade_in, goto_detail}) {
      return (
            <>
            {products && products.map((product, index) => {
                  return (
            <div key = {index} 
            // using fade_in to css for the shope list when using reuse this component
            className={`HomeTopTrending_List-item 
                  
            ${fade_in ? 'fade_in': ''}
            `}>
                  <img src={product.img1} alt={product.name} onClick={clickImgProduct ? () => clickImgProduct(product) : () =>goto_detail(product)} />
                  <p className='fw-medium text-center m-0'>{product.name}</p>
                  <p className='text-body-tertiary text-center m-0'>{formatNumberWithDots(product.price)} VND</p>
            </div>
                  )
            })}
            </>
      )
}