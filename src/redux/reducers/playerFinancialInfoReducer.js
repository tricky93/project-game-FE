const initialState = {
  wallet: {
    cash: 300,
    credit: { available: 200, max: 500 },
    rating: 0,
    APR: 0
  },
  living_costs: {
    Groceries: 50,
    Other: 40,
    Travel: 30
  },
  wage: 0
};
const playerFinancialReducer = (state = initialState, action) => {
  const { wallet, living_costs } = state;
  const {
    wallet: { credit }
  } = state;
  switch (action.type) {
    case 'LOW':
      return {
        ...state,
        wallet: {
          ...wallet,
          rating: action.payload.rating,
          APR: action.payload.APR
        }
      };
    case 'MEDIUM':
      return {
        ...state,
        wallet: {
          ...wallet,
          rating: action.payload.rating,
          APR: action.payload.APR
        }
      };
    case 'HIGH':
      return {
        ...state,
        wallet: {
          ...wallet,
          rating: action.payload.rating,
          APR: action.payload.APR
        }
      };
    case 'SET_USER_WAGE':
      return { ...state, wage: action.payload };
    case 'CASH_CHANGE':
      return {
        ...state,
        wallet: { ...wallet, cash: wallet.cash - action.payload }
      };
    case 'CREDIT_CHANGE':
      return {
        ...state,
        wallet: {
          ...wallet,
          credit: { ...credit, available: credit.available - action.payload }
        }
      };
    case 'ADD_LIVING_COST':
      const newLivingState = { ...state.living_costs };
      newLivingState[action.payload.key] = action.payload.value;
      return { ...state, living_costs: newLivingState };
    case 'RESET_GAME':
      return initialState;
    case 'CREDIT_CHANGE':
      return {
        ...state,
        wallet: {
          ...wallet,
          credit: {
            ...credit,
            available: action.payload.available,
            max: action.payload.max
          }
        }
      };
    default:
      return state;
  }
};
export default playerFinancialReducer;
