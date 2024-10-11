import imgIcon from '../../../Resource Assignment 03/supportIcon.jpg';
// import './BodyCustomerSupport.css'
export default function BodyCustomerSupport () {
      return (
            <div className='p-4'>
                  <div>
                        <p>Xin chào</p>
                        <p>Lam the nao de xem cac san pham</p>
                  </div>
                  <div className='AI_support'>
                        <img src={imgIcon} alt="person icon" style={{width: '40px'}} className='rounded-circle'/>
                        <p>ADMIN: Chao ban</p>
                  </div>
            </div>
      )
}