<template>
    <div class="nav-container">
    <section class="nav-bar">
    <div class="left-nav">
        <router-link v-bind:to="{ name: 'home' }">Home</router-link>
        <router-link v-bind:to="{ name: 'productCart' }">Cart</router-link>
    </div>
    <div class="right-nav">
        <router-link v-bind:to="{ name: 'logout' }" v-if="$store.state.token">
          Logout
        </router-link>
        <router-link v-bind:to="{ name: 'login' }" v-else>Login</router-link>
    </div>
    </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.nav-container{
    color: #556B2F;
    /* border-bottom-color: #5F9EA0; */
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 10px;
    font-size: 15px; 
    background-color: #F0F8FF;
}

.nav-bar{
    display:flex;
    justify-content: space-between;
    text-decoration: none;
}
.left-nav{
    display:flex;
    gap: 10px
}
.right-nav{
    display: flex;
    gap: 10px;
}
</style>