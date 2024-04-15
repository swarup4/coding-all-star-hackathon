// import {configureStore} from '@reduxjs/toolkit'
// import cartSlice from './cart/cartSlice'

// export const store = configureStore({
//     reducer: {
//         cart: cartSlice
//     }
// })


// third-party
import { configureStore } from '@reduxjs/toolkit';

// project import
import reducers from './reducers';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
  reducer: reducers
});

const { dispatch } = store;

export { store, dispatch };
