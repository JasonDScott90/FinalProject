<template>
    <div>
        <product-detail v-bind:product="product"/>
    </div>
</template>

<script>
import ProductDetail from '../components/ProductDetail.vue';
import ProductService from '../services/ProductService';
export default {
    components: {
        ProductDetail,
        
    },
    data() {
        return{
            product:{}
        }
    },
    methods: {
        getProductById(){
            const id = parseInt(this.$route.params.id);
            ProductService.
            getProductsById(id)
            .then(response => {
                this.product = response.data;
            })
        }
    },
    created(){
        this.getProductById();
    }
    
}
</script>
<style>
    
</style>    