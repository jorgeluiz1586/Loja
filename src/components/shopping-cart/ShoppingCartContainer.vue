<template>
    <div class="container" style="padding-top: 6rem;" >
        <div class="card shopping-cart">
            <div class="card-header bg-dark text-light">
                <i class="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
                Carrinho de Compras
                <div class="clearfix"></div>
            </div>
            <div class="card-body">
                <ShoppingCartItem
                        v-for="cartItem in $store.state.cart"
                        :product="cartItem"
                ></ShoppingCartItem>
                <h2 class="display-4 text-center" v-if="$store.state.cart.length === 0">
                    Não há iteins no carrinho
                </h2>
            </div>
            <div class="card-footer">
                <div class="pull-right" style="margin: 10px">
                    <div class="pull-right" style="margin: 5px">
                        Preço Total: <b>{{$store.getters.totalPrice | priceFormatter}}$</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ShoppingCartItem from "./ShoppingCartItem";
    export default {
        name: "ShoppingCartContainer",
        components: {ShoppingCartItem}
    }
</script>

<style scoped>

</style>
