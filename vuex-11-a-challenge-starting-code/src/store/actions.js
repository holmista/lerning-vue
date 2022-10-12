export default{
    addProductToCart(context, productData) {
        context.commit('addProductToCart', productData);
    },
    removeProductFromCart(context, prodId) {
        context.commit('removeProductFromCart', prodId);
    },
    login(context) {
        context.commit('login');
    },
    logout(context) {
        context.commit('logout');
    }
}