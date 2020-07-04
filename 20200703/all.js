/* global Vue */
/* eslint-disable no-new */

new Vue({
    el: '#app',
    data: {
        products: [
            {
                id: 1593844906283,
                title: '蘋果',
                category: '水果',
                content: '甜甜的',
                description: '長在樹上的蘋果',
                imageUrl: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                enabled: false,
                origin_price: 100,
                price: 90,
                unit: '顆'
            },
            {
                id: 1593844921893,
                title: '香蕉',
                category: '水果',
                content: '很營養',
                description: '長在樹上的香蕉',
                imageUrl: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                enabled: true,
                origin_price: 50,
                price: 40,
                unit: '根'
            },
            {
                id: 1593845000887,
                title: '草莓',
                category: '水果',
                content: '紅紅的',
                description: '長在矮樹叢的草莓',
                imageUrl: 'https://images.unsplash.com/photo-1591094068013-e481f2f6b442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                enabled: true,
                origin_price: 30,
                price: 25,
                unit: '顆'
            }
        ],
        tempProduct: {},
        productModalIsCreating: true
    },
    methods: {
        editProduct() {
        },
        deleteProduct() {
            this.products.splice(this.tempProduct.index, 1);
            this.tempProduct = {};
            $('#confirmModal').modal('hide');
        },
        createProduct() {
        },
        openModal(mode, product, index) {
            switch (mode) {
                case 'createProduct':
                    this.productModalIsCreating = true;
                    this.tempProduct = {};
                    $('#productModal').modal('show');
                    break;
                case 'editProduct':
                    this.productModalIsCreating = false;
                    this.tempProduct = Object.assign({}, product);
                    this.tempProduct.index = index;
                    $('#productModal').modal('show');
                    break;
                case 'deleteProduct':
                    $('#confirmModal').modal('show');
                    this.tempProduct = Object.assign({}, product);
                    this.tempProduct.index = index;
                    break;
                default:
                    break;
            }
        }
    }
})
