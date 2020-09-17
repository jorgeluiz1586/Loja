<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">
            <router-link to="/products" class="navbar-brand">CellShop</router-link>
            <div>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/cart" class="nav-link" ><i class="fa fa-shopping-cart mr-2"  aria-hidden="true" ></i>Cart
                            ({{$store.getters.cartLength}}) </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script>
    export default {
        name: "Header",
    }
</script>

<style scoped>
nav.navbar {
    background-color: gray;
}
</style>
