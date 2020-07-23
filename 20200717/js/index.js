import zh_TW from '../locale/zh_TW.js';

Vue.component('loading', VueLoading);
Vue.component('validation-observer', VeeValidate.ValidationObserver);
Vue.component('validation-provider', VeeValidate.ValidationProvider);

VeeValidate.configure({
    classes: {
        valid: 'is-valid',
        invalid: 'is-invalid',
    }
});

VeeValidate.localize('tw', zh_TW);

Vue.prototype.$bus = new Vue();

new Vue({
    el: '#app',
    data: {
        uuid: 'de4aaa47-9e6a-44fb-be33-178ff34efbdc',
        isLoading: true,
        products: [],
        product: {}
    },
    created() {
        axios.get(`https://course-ec-api.hexschool.io/api/${this.uuid}/ec/products`)
            .then(res => {
                this.isLoading = false;
                this.products = res.data.data;
            }).catch(err => {
            console.log(err);
        })
    },
    mounted() {

    },
    methods: {
        getProductDetail(productId) {
            this.isLoading = true;
            axios.get(`https://course-ec-api.hexschool.io/api/${this.uuid}/ec/product/${productId}`)
                .then(res => {
                    this.isLoading = false;
                    this.product = res.data.data;
                    this.product['num'] = 0;
                    $('#productModal').modal('show');
                }).catch(err => {
                console.log(err);
            })
        },
        addToCart(product, quantity = 1) {
            product['num'] = quantity;
            this.$bus.$emit('addToCart', JSON.parse(JSON.stringify(product)))
        },
        deleteItem(itemIndex) {
            this.shoppingList.splice(itemIndex, 1);
        }
    }
})
