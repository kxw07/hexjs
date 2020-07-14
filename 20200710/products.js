/* global Vue */
/* eslint-disable no-new */

new Vue({
    el: '#app',
    data: {
        products: [],
        editingProduct: {},
        productModalIsCreating: true
    },
    created() {
        this.getProducts();
    },
    methods: {
        getProducts() {
            let headers = {
                "Content-Type": "application/json",
                "Accept": "application/json"
            };

            axios({
                    url: `https://course-ec-api.hexschool.io/api/de4aaa47-9e6a-44fb-be33-178ff34efbdc/ec/products`,
                    method: "get",
                    headers: headers
                }
            ).then(res => {
                this.products = res.data.data;
            }).catch(err => {
                console.log(err);
            });
        },
        saveProduct() {
            if (this.productModalIsCreating) {
                this.products.push(this.editingProduct);
            } else {
                this.$set(this.products, this.editingProduct.index, Object.assign({}, this.editingProduct));
            }
            $('#productModal').modal('hide');
        },
        deleteProduct() {
            this.products.splice(this.editingProduct.index, 1);
            this.editingProduct = {};
            $('#confirmModal').modal('hide');
        },
        openModal(mode, product, index) {
            switch (mode) {
                case 'createProduct':
                    this.productModalIsCreating = true;
                    this.editingProduct = {};
                    this.editingProduct.id = new Date().getTime();
                    $('#productModal').modal('show');
                    break;
                case 'editProduct':
                    this.productModalIsCreating = false;
                    this.editingProduct = Object.assign({}, product);
                    this.editingProduct.index = index;
                    $('#productModal').modal('show');
                    break;
                case 'deleteProduct':
                    this.editingProduct = Object.assign({}, product);
                    this.editingProduct.index = index;
                    $('#confirmModal').modal('show');
                    break;
                default:
                    break;
            }
        }
    }
})
