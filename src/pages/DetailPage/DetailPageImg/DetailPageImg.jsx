// import './DetailPageImg.css';

// DetailPageImg.js
import './DetailPageImg.css';

export default function DetailPageImg({ selectProduct }) {
  if (!selectProduct) {
    return <p>Loading product details...</p>; // Or a spinner/loading component
  }

  const { img1, img2, img3, img4, category } = selectProduct;

  return (
    <div className='detail_img_container'>
      <div className='images_detail'>
        {img3 && <img className='detailImg' src={img3} alt={category} />}
        {img4 && <img className='detailImg' src={img4} alt={category} />}
        {img1 && <img className='detailImg' src={img1} alt={category} />}
        {img2 && <img className='detailImg' src={img2} alt={category} />}
      </div>
      <div>
        {img1 && <img className='detailImg' src={img1} alt={category} />}
      </div>
    </div>
  );
}
