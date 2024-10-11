import { useDispatch, useSelector } from 'react-redux';
import ProductsData from '../../../../Utilities/ProductsData';
import PopupProduct from '../../../../components/PopupProduct/PopupProduct';
import { hide_popup, show_popup } from '../../../../redux/popupProduct/PopupProductAction';
import { select_product, clear_product } from '../../../../redux/popupProductDetail/popupProductDetailAction';
import HomeTopTrendingListItem from './HomeTopTredingListItem/HomeTopTrendingItem';
import './HomeTopTrending.css';

function HomeTopTrending() {
      const dispatch = useDispatch();
      const isOpen = useSelector((state) => state.popupProduct.isOpen);
      const selectProduct = useSelector((state) => state.selectProduct.product);

      // extract product data to data object
      const data = ProductsData();
      const products = data.products;
      const error = data.error;
      const loading = data.loading;

      // handle click image product
      const handleImgProduct = (product) => {
            dispatch(select_product(product));
            dispatch(show_popup());

      }
      
      return (
            <div className='HomeTopTrending_grid'>
                  <div className='HomeTopTrending_grid-listTitle mt-5 fst-italic'>
                        <p className='m-0'>MADE THE HARD WAY</p>
                        <p className='fw-medium fs-5'>TOP TRENDING PRODUCTS</p>
                  </div>
                  {loading && <p className='fs-2 fw-bold'>Loading...</p>}
                {error && <p>Error: {error}</p>}
                  {products && <HomeTopTrendingListItem products={products} clickImgProduct={handleImgProduct}/>}
                  {isOpen && <PopupProduct products={selectProduct}/> }
            </div>
      )
}
export default HomeTopTrending;