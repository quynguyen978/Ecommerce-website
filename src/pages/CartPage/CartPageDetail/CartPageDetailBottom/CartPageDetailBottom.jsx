import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function CartPageDetailBottom () {
      return (
            <div className="p-2 d-flex justify-content-between fst-italic p-3 bg-body-secondary bg-opacity-50">
                  <div className="d-flex align-items-center">
                        <FaArrowLeftLong />
                        <p className="m-0 ps-2">Continue shopping</p>
                  </div>
                  <div className="d-flex py-2 px-3 align-items-center border border-black border-2">
                        <p className="m-0 pe-2">Procees to checkout</p>
                        <FaArrowRightLong />
                  </div>
            </div>
      )
}