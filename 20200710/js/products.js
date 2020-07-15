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
        openModal(mode, product, index) {
            switch (mode) {
                case 'createProduct':
                    console.log('createProduct');
                    this.productModalIsCreating = true;
                    this.editingProduct = {};
                    this.editingProduct.id = new Date().getTime();
                    $('#productModal').modal('show');
                    break;
                case 'editProduct':
                    console.log('editProduct');
                    this.productModalIsCreating = false;
                    this.editingProduct = Object.assign({}, product);
                    this.editingProduct.index = index;
                    $('#productModal').modal('show');
                    break;
                case 'deleteProduct':
                    console.log('deleteProduct');
                    this.editingProduct = Object.assign({}, product);
                    this.editingProduct.index = index;
                    $('#deleteModal').modal('show');
                    break;
                default:
                    break;
            }
        }
    }
})
