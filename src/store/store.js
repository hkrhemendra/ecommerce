const { configureStore } = require('@reduxjs/toolkit');
const { default: cartSlice } = require('../slice/cartSlice');

const store = configureStore({
    reducer: {
        cartSlice: cartSlice
    }
})

export default store;