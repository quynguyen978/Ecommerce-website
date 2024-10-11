import { useNavigate } from 'react-router-dom';
import './HomeBrowseCategories.css';
import {images} from '../../../../Utilities/image' 

// handle navigate when click on an imgage
function HomeBrowseCategories () {
      const navigate = useNavigate();
      const handleImageClick = () => {
            navigate('shop');
      }
      return (
            <div>
                  <div className='categories_browse_grid'>
                        <div className='categories_grid-item1 mt-3'>
                              <p className='text-secondary-emphasis m-0 fst-italic'>CAREFULLY CREATED COLLECTIONS</p>
                              <h5 className='m-0 fst-italic'>BROWSE OUR CATEGORIES</h5>

                        </div>
                        <div className='categories_grid-item2'>
                              {images.slice(0,2).map((image, index) => {
                                    
                                 return   <img key= {index} src={image.title} onClick= {handleImageClick} alt={image.name}/>
                              })}
                        </div>
                        <div className='categories_grid-item3'>
                        {images.slice(2).map((image, index) => {
                                 return   <img key= {index} src={image.title} onClick= {handleImageClick} alt={image.name}/>
                              })}
                        </div>
                        
                  </div>
            </div>
      )
}
export default HomeBrowseCategories;