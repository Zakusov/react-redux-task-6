import {CANCEL_PROMO, DECREASE_ITEM, DELETE_ITEM, INCREASE_ITEM, SET_ITEMS, TAB_SWITCH,} from '../actions/cart';
import {items, recommendedItems} from '../initialData';

const initialState = {
  items,

  recommendedItems,

  promoCode: '',
  promoDiscount: null,

  currentTab: 'items'
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAB_SWITCH: {
      return {
        ...state,
        currentTab: state.currentTab === 'items' ? 'postponed' : 'items'
      };
    }
    case SET_ITEMS: {
      return {
        ...state,
        items: [...action.items]
      };
    }
    case INCREASE_ITEM: {
      return {
        ...state,
        items: [...state.items].map(item =>
          item.id === action.id ? { ...item, qty: ++item.qty } : item
        )
      };
    }
    case DECREASE_ITEM: {
      return {
        ...state,
        items: [...state.items].map(item =>
          item.id === action.id ? { ...item, qty: --item.qty } : item
        )
      };
    }
    case DELETE_ITEM: {
      return { ...state, items: [...state.items].filter(item => item.id !== action.id) };
    }
    case CANCEL_PROMO: {
      return {
        ...state,
        promoCode: '',
        promoDiscount: null
      };
    }
    default: {
      return state;
    }
  }
};