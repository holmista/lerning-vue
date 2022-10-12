export default{
    products(state) {
        return state.products;
    },
    cart(state) {
        return state.cart;
    },
    isLoggedIn(state) {
        return state.isLoggedIn;
    },
    cartTotal(state) {
        return state.cart.total;
    },
    cartQty(state) {
        return state.cart.qty;
    }
}