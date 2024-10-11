// action type
export const COUNT_UP = 'COUNT UP';
export const COUNT_DOWN = 'COUNT DOWN';

// action creator

export const countUp = () => ({
      type: COUNT_UP,
})

export const countDown = () => ({
      type: COUNT_DOWN,
})