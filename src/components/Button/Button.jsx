import { FaGift, FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import './button.css'

function Button({title, onClick, normalBtn, longBtn, Italic, cartIcon, leftArrowIcon, rightArrowIcon, giftIcon, ...probs }) {
      const classNames = [
            normalBtn ? 'normalBtn' : '',
            longBtn ? 'longBtn' : "",
            Italic ? 'Italic' : '',
      ].join(' ').trim();
      return (
            <button onClick={onClick} className={classNames} {...probs}>
                  {leftArrowIcon && <FaLongArrowAltLeft/>}
                  {cartIcon && <IoCartOutline style={{color: 'white', marginRight: 5}}/>}
                  {giftIcon && <FaGift style={{color: 'white'}}/>}
                  {title}
                  {rightArrowIcon && <FaLongArrowAltRight />}
                  </button>
      )
}
export default Button;