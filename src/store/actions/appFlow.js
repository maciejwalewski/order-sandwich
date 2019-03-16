export const SET_STAGE = 'SET_STAGE';
export const setStage = payload => ({ type: SET_STAGE, payload });

export const RESET_ORDER = 'RESET_ORDER';
export const resetOrder = () => ({ type: RESET_ORDER });

export const FINISH_ORDER = 'FINISH_ORDER';
export const finishOrder = payload => ({ type: FINISH_ORDER, payload });
