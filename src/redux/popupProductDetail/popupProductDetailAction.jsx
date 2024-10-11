export const SELECT_PRODUCT = 'SELECT PRODUCT';
export const CLEAR_PRODUCT = 'CLEAR PRODUCT';

// create action
export const select_product = (product) => ({
      type: SELECT_PRODUCT, 
      payload: product,
})

export const clear_product = () => ({
      type: CLEAR_PRODUCT,
})