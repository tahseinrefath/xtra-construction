'use client';

import React, { createContext, useContext, useReducer, useCallback } from 'react';

// ── Types ──────────────────────────────────────────────────────────────────────
// item: { id, name, price, image, qty }

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, qty: 1 }] };
    }

    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };

    case 'UPDATE_QTY': {
      const { id, qty } = action.payload;
      if (qty < 1) {
        return { ...state, items: state.items.filter((i) => i.id !== id) };
      }
      return {
        ...state,
        items: state.items.map((i) => (i.id === id ? { ...i, qty } : i)),
      };
    }

    case 'APPLY_COUPON':
      return { ...state, coupon: action.payload };

    case 'REMOVE_COUPON':
      return { ...state, coupon: null };

    case 'CLEAR_CART':
      return { ...state, items: [], coupon: null };

    default:
      return state;
  }
}

const initialState = {
  items: [],
  coupon: null, // { code, discount } where discount is 0-1 (e.g. 0.10 = 10%)
};

// Valid coupons (mock)
const VALID_COUPONS = {
  SAVE10: 0.1,
  BUILD20: 0.2,
  XTRA15: 0.15,
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = useCallback((product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  }, []);

  const removeItem = useCallback((id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  }, []);

  const updateQty = useCallback((id, qty) => {
    dispatch({ type: 'UPDATE_QTY', payload: { id, qty } });
  }, []);

  const applyCoupon = useCallback((code) => {
    const upper = code.toUpperCase().trim();
    const discount = VALID_COUPONS[upper];
    if (discount) {
      dispatch({ type: 'APPLY_COUPON', payload: { code: upper, discount } });
      return { success: true, discount };
    }
    return { success: false };
  }, []);

  const removeCoupon = useCallback(() => {
    dispatch({ type: 'REMOVE_COUPON' });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  // Computed values
  const itemCount = state.items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const discount = state.coupon ? subtotal * state.coupon.discount : 0;
  const total = subtotal - discount;

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        coupon: state.coupon,
        itemCount,
        subtotal,
        discount,
        total,
        addItem,
        removeItem,
        updateQty,
        applyCoupon,
        removeCoupon,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used inside <CartProvider>');
  }
  return ctx;
}
