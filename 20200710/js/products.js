/* global Vue */
/* eslint-disable no-new */

new Vue({
    el: '#app',
    data: {
        products: [],
        editingProduct: {},
        productModalIsCreating: true,
        user: {
            token: '',
            uuid: ''
        }
    },
    created() {
        let cookies = document.cookie.split(';');
        cookies.forEach(keyValue => {
            let key = keyValue.trim().split('=')[0];
            let value = keyValue.trim().split('=')[1];
            this.user[key] = value;
        })

        if (this.user.token === '') {
            window.location = 'login.html';
        }

        this.getProducts();
    },
    methods: {
        getProducts() {
            let headers = {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${this.user.token}`
            };

            axios({
                    url: `https://course-ec-api.hexschool.io/api/${this.user.uuid}/admin/ec/products`,
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

                let headers = {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${this.user.token}`
                };

                if (this.editingProduct['imageUrl']) {
                    let imageUrlArray = [];
                    imageUrlArray.push(this.editingProduct.imageUrl);
                    this.editingProduct.imageUrl = imageUrlArray;
                }

                axios({
                        url: `https://course-ec-api.hexschool.io/api/${this.user.uuid}/admin/ec/product`,
                        method: "post",
                        headers: headers,
                        data: this.editingProduct
                    }
                ).then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.$set(this.products, this.editingProduct.index, Object.assign({}, this.editingProduct));

                let headers = {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${this.user.token}`
                };

                axios({
                        url: `https://course-ec-api.hexschool.io/api/${this.user.uuid}/admin/ec/product/${this.editingProduct.id}`,
                        method: "patch",
                        headers: headers,
                        data: this.editingProduct
                    }
                ).then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                });
            }

            $('#productModal').modal('hide');
        },
        deleteProduct() {
            this.products.splice(this.editingProduct.index, 1);
            this.editingProduct = {};

            let headers = {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${this.user.token}`
            };

            axios({
                    url: `https://course-ec-api.hexschool.io/api/${this.user.uuid}/admin/ec/product/${this.editingProduct.id}`,
                    method: "delete",
                    headers: headers
                }
            ).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });

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
