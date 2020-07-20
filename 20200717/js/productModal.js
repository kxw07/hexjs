Vue.component('product-modal', {
    template: `<div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="productModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="productModalLabel">{{product.title}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <img :src="product.imageUrl" class="img-fluid"/>
            <div>{{product.description}}</div>
            <div>{{product.content}}</div>
            <select v-model="product.numbers">
              <option disabled value="">請選取數量</option>
              <option v-for="num in 5" :key="num" :value="num">
                {{ num }} {{ product.unit }}
              </option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <div v-if="product.numbers">小計 {{ product.price * product.numbers }} 元</div>
          <button type="button" class="btn btn-primary" v-on:click="saveProduct()">加入購物車</button>
        </div>
      </div>
    </div>
  </div>`,
    data() {
        return {
        }
    },
    props: {
        product: {}
    },
    created() {
    },
    mounted() {
    },
    methods: {}
})
