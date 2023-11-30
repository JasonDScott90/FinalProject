<template>
    <div>
        <div class="clear-cart-container">
            <h1>Shopping Cart</h1>
            <button v-on:click="clearCart()">Clear Cart</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Qty</th>
                    <th>Product name</th>
                    <th>Price</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in productCart.items" v-bind:key="item.productId">
                    <td>{{ item.quantity }}</td>
                    <td>{{item.product.name}}</td>
                    <td>{{ item.product.price }}</td>
                    <td>{{ (item.product.price * item.quantity).toFixed(2) }}</td>
                    <td><font-awesome-icon :icon="['fas', 'xmark']" v-on:click="removeItemFromCart(item.cartItemId)" /></td>
                </tr>
            </tbody>
        </table>
        <section class="cart-total-container">
            <div class="sub-container">
                <h1>Item subtotal: </h1>
                <h1> {{ productCart.itemSubtotal }} </h1>
            </div>
            <div class="tax-container">
                <h1>Tax: </h1>
                <h1>{{ productCart.tax }}</h1>
            </div>
            <div class="total-container">
                <h1>Total: </h1>
                <h1>{{ productCart.total }}</h1>
            </div>
        </section>
    </div>
</template>
<script>
import ProductService from '../services/ProductService.js'
export default {
    data(){
        return{
            productCart: {}
        }
    },
    methods: {
        getCart() {
      ProductService
        .getCart()
        .then(response => {
          this.productCart = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    removeItemFromCart(productId) {
      ProductService
        .removeItemFromCart(productId)
        .then(response => {
          console.log(response)
          this.productCart.items = this.productCart.items.filter(item => {
            window.location.reload();
            return item.cartItemId != productId 
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    clearCart(){
        ProductService.
        clearCart()
        .then(response => {
          this.productCart = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
},
    created(){
        this.getCart()
    }
}
</script>
<style>
table{
    border-collapse: collapse;
}  
th {
    background-color:#2F4F4F;
    Color:white;
}
th, td {
    width:150px;
    text-align:center;
    border:1px solid black;
    padding:5px     
}  
.cart-total-container{
    width: 800px;
    display: flex;
    flex-direction: column;
}
.subtotal-container{
    display: flex;
    justify-content: space-around;
}
.sub-container{
    display: flex;
    justify-content: space-between;
    gap: 20px;
}
.tax-container{
    display: flex;
    justify-content: space-between;
    gap: 20px;
}
.total-container{
    display: flex;
    justify-content: space-between;
    gap: 20px;
}
.clear-cart-container{
    display: flex;
    justify-content: space-between;
}
</style>