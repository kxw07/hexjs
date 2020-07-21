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
          <div style="height: 200px; background-size: cover; background-position: center"
                     :style="style"></div>
          <blockquote class="blockquote mt-3">
            <p class="mb-0" v-html="product.content"></p>
            <footer class="blockquote-footer text-right">
              {{ product.description }}
            </footer>
          </blockquote>
          <div class="d-flex justify-content-between align-items-baseline">
            <div v-if="!product.price" class="h4">
              {{ product.origin_price }} 元
            </div>
            <del v-if="product.price" class="h6">原價 {{ product.origin_price }} 元</del>
            <div v-if="product.price" class="h4">
              現在只要 {{ product.price }} 元
            </div>
          </div>
          <select v-model="product.num" name class="form-control mt-3">
            <option value="0" disabled selected>
              請選擇數量
            </option>
            <option v-for="num in 10" :key="num" :value="num">
              選購 {{ num }} {{ product.unit }}
            </option>
          </select>
        </div>
        <div class="modal-footer">
          <div v-if="product.num" class="text-muted text-nowrap mr-3">
            小計
            <strong>{{ product.num * product.price }}</strong> 元
          </div>
          <button type="button" class="btn btn-primary" @click="addToCart(product, product.num)">
            <i v-if="product.id === status.loadingItem" class="fas fa-spinner fa-spin"></i>
            加到購物車
          </button>
        </div>
      </div>
    </div>`,
    data() {
        return {}
    },
    props: {
        product: {}
    },
    created() {
    },
    mounted() {
    },
    computed: {
        style() {
            return `backgroundImage: url(${this.product.imageUrl})`;
        }
    },
    methods: {}
})
