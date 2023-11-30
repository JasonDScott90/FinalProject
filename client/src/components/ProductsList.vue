<template>
    <section class="product-cards">
        <div class="product-card"
         v-for="product in products"
         v-bind:key="product.productId">
            <div class="product-sku">{{ product.productSku }}</div>
            <div v-on:click="$router.push({name:'productDetail', params: {id: product.productId}})"
            class="product-name">{{ product.name }}</div>
            <div class="product-price">{{ product.price }}</div>
            <div class="product-image">
            <img src="https://via.placeholder.com/350x250" alt="Placeholder Image">
            </div>
            <div class="cart-container" v-show="$store.state.token">
                <font-awesome-icon v-on:click="addToCart(product)" icon="fa-cart-plus" class="action-button" />  
            </div>
        </div>
    </section>
</template>
<script>
import ProductService from '../services/ProductService';
export default {
    props: {
        products: {
            type: Array,
        }
    },
    data() {
        return {
            productsInCart:[{

            }],
            cardView: true,
            filteredSearch: "", 
        };
    },
    methods: {
        addToCart(product){
            let cartItem = {productId: product.productId, quantity: 1}
            ProductService.
            addToCart(cartItem).then(response => {
              if (response.status === 200) {
                console.log("success")
              }
            }).catch(error => {
              console.log(error)
            })
      }
    },
    computed: {
    },
}
</script>
<style scoped>

.view-icon {
  font-size: 1.2rem;
  border-radius: 3px;
}

.view-icon.active {
  background-color: lightgreen;
}

.view-icon:not(.active) {
  font-size: 1.2rem;
  margin-right: 7px;
  cursor: pointer;
}

.view-icon:not(.active):hover {
  color: blue;
  background-color: rgba(255, 255, 255, 0.7);
}
.tile-view-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.products-text{
  font-size: larger;
}
.product-cards{
    display: flex;
    flex-wrap: wrap;
    gap: 3em;
    justify-content: center;
}
.product-card{
    width: 300px;
    height: 300px;
    display: grid;
    border-style: solid;
    border-width: 3px;
    border-color: #5F9EA0;
    border-radius: 10px;
    padding: 3em;
    gap: 10px;
    grid-template-areas: 
        "sku . price"
        "name name ."
        "img img img"
        ". . cart";
}
.product-sku{
    grid-area: sku;
}
.product-name{
    grid-area: name;
    cursor: pointer;
}
.product-price{
    grid-area: price;
    display: flex;
    justify-content: flex-end;
}
.action-button{
    font-size: 25px;
    cursor: pointer;
}
.product-image{
    grid-area: img;
    width: 100%;
}
.product-image img{
    width: 100%;
}
.cart-container{
    display: flex;
    justify-content: flex-end;
    grid-area: cart;
}
</style>