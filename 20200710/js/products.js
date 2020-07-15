new Vue({
    el: '#app',
    data: {
        products: [],
        editingProduct: {},
        pagination: {},
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

        if (this.user.token === '' || this.user.uuid === '') {
            window.location = 'login.html';
        }

        this.getProducts();
    },
    methods: {
        getProducts(page = 1) {
            let headers = {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${this.user.token}`
            };

            axios({
                    url: `https://course-ec-api.hexschool.io/api/${this.user.uuid}/admin/ec/products?page=${page}`,
                    method: "get",
                    headers: headers
                }
            ).then(res => {
                this.products = res.data.data;
                this.pagination = res.data.meta.pagination;
            }).catch(err => {
                console.log(err);
            });
        },
        openModal(mode, product) {
            switch (mode) {
                case 'createProduct':
                    this.productModalIsCreating = true;
                    this.editingProduct = {};
                    $('#productModal').modal('show');
                    break;
                case 'editProduct':
                    this.productModalIsCreating = false;
                    this.getProductDetail(product.id).then(productDetail => {
                        this.editingProduct = productDetail;
                        $('#productModal').modal('show');
                    });
                    break;
                case 'deleteProduct':
                    this.editingProduct = Object.assign({}, product);
                    $('#deleteModal').modal('show');
                    break;
                default:
                    break;
            }
        },
        getProductDetail(productId) {
            return new Promise((resolve, reject) => {
                let headers = {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${this.user.token}`
                };

                axios({
                        url: `https://course-ec-api.hexschool.io/api/${this.user.uuid}/admin/ec/product/${productId}`,
                        method: "get",
                        headers: headers
                    }
                ).then(res => {
                    resolve(res.data.data);
                }).catch(err => {
                    console.log(err);
                });
            })
        }
    }
})
