<template>
  <div class="home">
    <div class="tile-view-container">
      <h1 class="products-text">Products</h1>
      <div class="icon-container">
        <font-awesome-icon
          v-bind:class="{ 'view-icon': true, active: cardView }"
          v-on:click="cardView = true"
          icon="fa-solid fa-grip"
          title="View tiles"
        />
        
        <font-awesome-icon
          v-bind:class="{ 'view-icon': true, active: !cardView }"
          v-on:click="cardView = false"
          icon="fa-solid fa-table"
          title="View table"
        />
        <input type="text" v-on:change="getProducts" v-model="filteredSearch" placeholder="Search" />
      </div>
    </div>
    
    <products-list v-bind:products="filteredItems" v-if="cardView"/>  
    <product-tables v-bind:products="filteredItems" v-if="!cardView"/>
  </div>
</template>

<script>

import ProductsList from "../components/ProductsList.vue";
import ProductService from "../services/ProductService.js";
import ProductTables from "../components/ProductTables.vue";
export default {
  components: {
    ProductsList,
    ProductTables,
  },
  data() {
    return {
      isLoading: false,
      cardView: true,
      products: [],
      filteredSearch: "",
      filteredProducts: [],
    };
  },

  computed: {
    isLoggedIn() {
      return this.$store.state.token.length > 0;
    },
    filteredItems(){
      return this.products.filter(item => {
        return item.name.toLowerCase().includes(this.filteredSearch.toLowerCase())
      })
    }
    
    
  },

  methods: {
    filterProducts(){
        ProductService.getProductsByName(this.filteredSearch)
        .then( (response) => {
        this.products = response.data;
      })
      
            let filteredProducts = this.products;
            if (this.filteredSearch != "") {
                filteredProducts = filteredProducts.filter((product) =>
                product.name.toLowerCase().includes(this.filteredSearch.toLowerCase())
            ); 
            }
            return filteredProducts    
    },
    getProducts(){
      if(this.filteredSearch){
        this.filterProducts();
        return;
      }
      ProductService.getAllProducts()
        .then( (response) => {
        this.products = response.data;
      })
    }
  },
  created() {
    this.getProducts();
  },
};
</script>

<style scoped>
.home{
  background-color: #F0F8FF;
  display: flex;
  flex-direction: column;
  gap: 50px;
}
#spinner {
  color: green;
}
.view-icon {
  font-size: 1.2rem;
  margin-right: 7px;
  padding: 3px;
  color: #444;
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
.icon-container{
  display:flex;
  align-items: center;
}
</style>