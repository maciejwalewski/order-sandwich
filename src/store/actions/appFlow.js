export const SET_STAGE = 'SET_STAGE';
export const setStage = payload => ({ type: SET_STAGE, payload });

export const RESET_ORDER = 'RESET_ORDER';
export const resetOrder = () => ({ type: RESET_ORDER });

export const FINISH_ORDER = 'FINISH_ORDER';
export const FINISH_ORDER_SUCCESS = 'FINISH_ORDER_SUCCESS';
export const FINISH_ORDER_FAIL = 'FINISH_ORDER_FAIL';
export const finishOrder = () => ({ type: FINISH_ORDER });
