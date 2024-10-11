// action type
export const ACTIVE_SELECT_ITEM = 'ACTIVE SELECT ITEM';

// action creator
export const active_select_item = (item) => ({
      type: ACTIVE_SELECT_ITEM,
      payload: item,
})