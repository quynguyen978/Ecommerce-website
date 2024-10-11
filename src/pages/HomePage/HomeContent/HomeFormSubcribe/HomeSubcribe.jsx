import Button from "../../../../components/Button/Button";
import './HomeSubcribe.css';

function HomeSubcribe() {
      return (
            <div className="mt-4 pb-5 d-flex justify-content-between align-items-center">
                  <div className=" fst-italic">
                        <p className="m-0 fw-bold">LET'S BE FRIENDS!</p>
                        <p className="text-body-tertiary homeSubscribe-greeting">Nisi nisi tempor consequat laboris nisi.</p>
                  </div>
                  <form className="subcribe-form d-flex">
                           <input 
                           type="email" 
                           placeholder="need to implement"
                           />
                           <Button title='Subscribe' normalBtn/>
                  </form>

            </div>
      )
}
export default HomeSubcribe;