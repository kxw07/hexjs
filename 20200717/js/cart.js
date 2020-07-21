Vue.component('cart', {
    template: `<div class="my-5 row justify-content-center">
    <div class="col-md-6">
      <table class="table mt-4">
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
          <td>{{product.price}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>`,
    data() {
        return {}
    },
    props: {
        shoppingList: []
    }
})
