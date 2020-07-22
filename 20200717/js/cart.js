Vue.component('cart', {
    template: `<div class="my-5 row justify-content-center">
    <div class="col-md-6">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">刪除</th>
          <th scope="col">#</th>
          <th scope="col">品名</th>
          <th scope="col">數量</th>
          <th scope="col">單位</th>
          <th scope="col">單價</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(product, index) in shoppingList" :key="product.id">
          <td>
            <button type="button" v-on:click="deleteItem(index)"
                    class="btn btn-outline-danger btn-sm">刪除
            </button>
          </td>
          <td>{{index}}</td>
          <td>{{product.title}}</td>
          <td>{{product.num}}</td>
          <td>{{product.unit}}</td>
          <td class="text-right">{{product.price}}</td>
        </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5" class="text-right">
              總計
            </td>
            <td class="text-right">
              {{ calculateTotalPrice }}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>`,
    data() {
        return {
            totalPrice: 0,
            shoppingList: []
        }
    },
    props: [],
    created() {
        this.$bus.$on('addToCart', product => {
            this.addToCart(product)
        })
    },
    computed: {
        calculateTotalPrice() {
            return this.shoppingList.length === 0 ? 0 : this.shoppingList.reduce((totalPrice, product) => {
                return totalPrice + product.price * product.num;
            }, 0);
        }
    },
    methods: {
        addToCart(product) {
            let itemNotInShoppingList = true;

            this.shoppingList.forEach((shoppingItem, index) => {
                if (shoppingItem.title === product.title) {
                    shoppingItem.num += product.num;
                    itemNotInShoppingList = false;
                }
            })

            if (itemNotInShoppingList) {
                this.shoppingList.push(product);
            }
        },
        deleteItem(itemIndex) {
            this.shoppingList.splice(itemIndex, 1);
        }
    }
})
