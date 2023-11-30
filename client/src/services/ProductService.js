import axios from "axios";

// const http = axios.create({
//     baseURL: "http://localhost:9000"
// });

export default {
    getAllProducts(){
        return axios.get('/products')
    },
    getProductsById(id){
        return axios.get(`/products/${id}`)
    },
    getProductsByName(name){
        return axios.get(`/products?name=${name}`)
    },
    getProductsBySku(sku){
        return axios.get(`/products?sku=${sku}`)
    },
    addToCart(product){
        return axios.post(`/cart/items`, product)
    },
    getCart(){
        return axios.get('/cart')
    },
    removeItemFromCart(id){
        return axios.delete(`/cart/items/${id}`)
    },
    clearCart(){
        return axios.delete('/cart')
    }
}