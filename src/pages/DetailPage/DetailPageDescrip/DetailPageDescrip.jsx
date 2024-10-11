import Button from '../../../components/Button/Button';
import { useState } from 'react';
import './DetailPageDescrip.css';

export default function DetailPageDescrip ({selectProduct}) {
      const [showDescription, setShowDecription] = useState(false);
      const discriptionLines = selectProduct.long_desc.split('\n\n');

      // handleclick for description
      const descriptionItem = () => {
            setShowDecription((prev) => !prev);
      }
      return (
            <div>
                  <Button onClick={descriptionItem} title='DESCRIPTION' Italic normalBtn/>

                 {showDescription && <div>
                  <p className='fst-italic fw-medium mt-4'>PRODUCT DESCRIPTION</p>
                  {discriptionLines.map((line, index) => {
                        return <p key= {index} className='description-line'>{line}</p>
                  })}
                  </div>
                  }           
            </div>
      )
}