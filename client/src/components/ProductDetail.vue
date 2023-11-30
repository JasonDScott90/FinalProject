<template>
    <div class="product-details">
        <div class="name-cart-container">
            <h1>{{ product.name }}</h1>
            <div class="cart-container" v-show="$store.state.token">
                <h1><font-awesome-icon v-on:click="addToCart()" icon="fa-cart-plus" class="action-button" /></h1>
                <h1 v-on:click="addToCart()">Add to Cart</h1> 
            </div>
        </div>

        <h2>{{ product.description }}</h2>
        <h3>{{ product.productSku }}</h3>
        <h3>{{ product.price }}</h3>
        <h4>{{ product.name }}</h4>
        <img src="https://via.placeholder.com/350x250" alt="Placeholder Image">
    </div>
</template>
<script>
import ProductService from '../services/ProductService';
export default {
    props: {
        product: {
            type: Object,
        }
    },
    methods:{
        addToCart(){
            let cartItem = {productId: this.product.productId, quantity: 1}
            ProductService.
            addToCart(cartItem).then(response => {
              if (response.status === 200) {
                console.log("success")
              }
            }).catch(error => {
              console.log(error)
            })
      }
    }

}
</script>
<style scoped>
.product-details{
    padding: 20px;
}
.cart-container{
    display: flex;
    gap: 20px;
    border-style: solid;
    border-radius: 10px;
    padding: 10px;
    
}
.name-cart-container{
    display: flex;
    justify-content: space-between;
}
.name-cart-container > h1{
    font-size: 30px;
}
img{
    padding-top: 10px;
}

</style>