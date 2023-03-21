export const SET_ITEMS = 'SET_ITEMS';
export const INCREASE_ITEM = 'INCREASE_ITEM';
export const DECREASE_ITEM = 'DECREASE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CANCEL_PROMO = 'CANCEL_PROMO';
export const TAB_SWITCH = 'TAB_SWITCH';

export const setItems = (items) => ({
    type: SET_ITEMS,
    items: items
});
export const increaseItem = (id) => ({
    type: INCREASE_ITEM,
    id: id
});
export const decreaseItem = (id) => ({
    type: DECREASE_ITEM,
    id: id
});
export const deleteItem = (id) => ({
    type: DELETE_ITEM,
    id: id
});