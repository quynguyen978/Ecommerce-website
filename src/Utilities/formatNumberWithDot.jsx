export default function formatNumberWithDots(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }