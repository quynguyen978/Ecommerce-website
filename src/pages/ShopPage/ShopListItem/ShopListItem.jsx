import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductsData from "../../../Utilities/ProductsData";
import HomeTopTrendingListItem from "../../HomePage/HomeContent/HomeTopTrending/HomeTopTredingListItem/HomeTopTrendingItem";
import './ShopListItem.css';

// function to lowercase the first letter of items in category
const lowercaseFirstLetter = (str) => {
      if (!str) return '';
      return str.charAt(0).toLowerCase() + str.slice(1);
};

export default function ShopListItem() {
      const activeItem = useSelector((state) => state.cateActiveItem.active_item);
      const products = ProductsData().products;
      let filteredProducts =[];

      // 
      const navigate = useNavigate();

      const handleProductClick_to_detail = (product) => {
          // Navigate to the DetailPage with the product id
          
          navigate(`detail/${product.name}`);
      };

      const activeItemLowercase = lowercaseFirstLetter(activeItem);

      // Filter products based on the selected item on category
      if( products.length > 0 ) {
            if( activeItem === 'ALL') {
                  filteredProducts = products;
            }
            else if( activeItem === 'APPLE') {
                  filteredProducts = products.filter((product) => product.name.includes('Apple'));
            }
            else {
                  filteredProducts = products.filter((product) => product.category === activeItemLowercase);
            }
      }

      // create a unique key to reapply the animation
      const animationKey = activeItem;
      return (
            <div className="ShopListContainer">
                  <div className="ShopListContainer_head mb-2">
                        <input type="text" placeholder="Enter Search Here" />
                        <div className="ShopList_custom-select">
                              <select className="pe-2">
                                    <option value="0">Default sorting</option>
                              </select>
                        </div>
                  </div>
                  <div className="ShopListContainer_item">
                        { filteredProducts.length > 0 
                        ? <HomeTopTrendingListItem products={filteredProducts} fade_in key={animationKey} goto_detail={handleProductClick_to_detail}/>
                        : products.length > 0 && <p className="fs-5 text-center">No products found in this category.</p>
                        }
                  </div>
            </div>
      );
}
