import { useDispatch, useSelector } from 'react-redux';
import { Categories } from '../../../Utilities/CategorieShopeSidebar';
import { active_select_item } from '../../../redux/cateActiveItemShop/cateActiveItemAction';
import './ShopCategories.css';


export default function ShopCategories() {
      const dispatch = useDispatch();
      const activeItem = useSelector((state) => state.cateActiveItem.active_item);

      // Click handler function
      const itemHandleClick = (item) => {
            dispatch(active_select_item(item));
      };

      return(
                  <div className="shopeCategories">
                        <h4>CATEGORIES</h4>
                        {Categories.map((categorie, index) => {
                           return   <div key={index}>
                               {categorie.sections.name && <h6>{categorie.sections.name}</h6>}
                               <ul className='list-unstyled'>
                                    {categorie.sections.items.map((item, index) => {
                                          return  <li key = {index} 
                                                className={`cate_list-item ${activeItem === item ? 'active' : ''}`}
                                                onClick={() => itemHandleClick(item)}>
                                                            {item}
                                                </li>
                                    })}
                               </ul>
                              </div>
                        })}
                  </div>
      )
}