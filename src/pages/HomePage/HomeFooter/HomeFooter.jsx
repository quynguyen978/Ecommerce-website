import './HomeFooter.css';

// values for footer
const footerDatas = [
      {
            col_title: 'CUSTOMER SERVICES',
            col_values: [
                  'Help & Contact Us', 
                  'Returns & Refunds',
                  'Online Stores', 
                  'Terms & Conditions',
            ]
      },
      {
            col_title: 'COMPANY',
            col_values: [
                  'What We Do', 
                  'Available Services',
                  'Latest Posts',
                  'FAQs',
            ]
      },
      {
            col_title: 'SOCIAL MEDIA',
            col_values: [
                  'Twitter', 
                  'Instagram', 
                  'Facebook', 
                  'Pinterest',
            ]
      }
]
function HomeFooter() {
      return <div className='HomeFooterContainer'>
                  <div className='HomeFooterContainer_grid fst-italic'>
                        {footerDatas.map((footerData, index) => {
                        return  (
                              <div key={index}>
                                    <p>{footerData.col_title}</p> 
                                    {footerData.col_values.map((col_value, index) => {
                                        return  <p key={index} className='HomeFooterData_col_value'>{col_value}</p>
                                    })}
                              </div>
                        )
                        })}
                  </div>
            </div>
}
export default HomeFooter;