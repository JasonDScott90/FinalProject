<template>
    <section id="product-table-container" v-if="!cardView">
      <table>
        <thead>
          <tr>
            <th>SKU</th>
            <th>Product</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in filterProducts" v-bind:key="product.productId">
            <td>{{ product.productSku }}</td>
            <td class="product-name" v-on:click="$router.push({name:'productDetail', params: {id: product.productId}})">{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td><font-awesome-icon v-on:click="addToCart(product)" icon="fa-cart-plus" class="action-button" /></td>
          </tr>
        </tbody>
      </table>
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
            cardView: false,
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
        filterProducts(){
            let filteredProductsList = this.products;
            if (this.filteredSearch != "") {
                filteredProductsList = filteredProductsList.filter((product) =>
                product.name.toLowerCase().includes(this.filteredSearch.toLowerCase())
            ); 
            }
        return filteredProductsList    
        },
    },
}
</script>
<style scoped>
th, td{
  padding: 20px;
}
.action-button{
  cursor: pointer;
}
.product-name{
  cursor: pointer;
}
</style>