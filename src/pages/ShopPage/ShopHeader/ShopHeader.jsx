import './ShopHeader.css';

export default function ShopHeader ({title, checkoutHead}) {
      return (
            <div className="shopeHeader fst-italic">
                  <p className='fs-3 fw-medium me-4'>{title}</p>
                  
                  <p className='fw-medium'>
                        {checkoutHead ? 'HOME / CART / ' : ''}
                        <span className='text-body-tertiary fw-medium'>{title}</span>
                  </p>
            </div>
      )
}