Vue.component('productModal', {
    template: `<div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="productModalLabel"
       aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="productModalLabel">{{productModalIsCreating?"新增產品":"編輯產品"}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                <label for="imageUrl">圖片網址</label>
                <input id="imageUrl" type="text" placeholder="請輸入圖片連結" class="form-control" v-model="editingProduct.imageUrl"/>
              </div>
              <img :src="editingProduct.imageUrl" class="img-fluid"/>
            </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="productTitle">產品名稱</label>
                <input id="productTitle" type="text" placeholder="請輸入產品名稱" class="form-control"
                       v-model="editingProduct.title"/>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="productCategory">分類</label>
                  <input id="productCategory" type="text" placeholder="請輸入分類" class="form-control"
                         v-model="editingProduct.category"/>
                </div>
                <div class="form-group col-md-6">
                  <label for="productUnit">單位</label>
                  <input id="productUnit" type="text" placeholder="請輸入單位" class="form-control"
                         v-model="editingProduct.unit"/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="productOriginPrice">原價</label>
                  <input id="productOriginPrice" type="number" placeholder="請輸入原價" class="form-control"
                         v-model="editingProduct.origin_price"/>
                </div>
                <div class="form-group col-md-6">
                  <label for="productPrice">售價</label>
                  <input id="productPrice" type="number" placeholder="請輸入售價" class="form-control"
                         v-model="editingProduct.price"/>
                </div>
              </div>
              <hr>
              <div class="form-group">
                <label for="productDescription">產品描述</label>
                <input id="productDescription" type="text" placeholder="請輸入產品描述" class="form-control"
                       v-model="editingProduct.description"/>
              </div>
              <div class="form-group">
                <label for="productContent">產品說明</label>
                <input id="productContent" type="text" placeholder="請輸入產品說明" class="form-control"
                       v-model="editingProduct.content"/>
              </div>
              <div class="form-check">
                <input id="is_enabled" type="checkbox" class="form-check-input"
                       v-model="editingProduct.enabled"/>
                <label for="is_enabled" class="form-check-label">是否啟用</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" v-on:click="saveProduct()">確認</button>
        </div>
      </div>
    </div>
  </div>`,
    data() {
        return {}
    },
    props: {
        editingProduct: {},
        productModalIsCreating: true,
        user: {
            token: '',
            uuid: ''
        }
    },
    methods: {
        saveProduct() {
            let apiUrlForCreate = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/admin/ec/product`;
            let apiUrlForUpdate = `https://course-ec-api.hexschool.io/api/${this.user.uuid}/admin/ec/product/${this.editingProduct.id}`;

            if (this.editingProduct['imageUrl']) {
                let imageUrlArray = [];
                imageUrlArray.push(this.editingProduct.imageUrl);
                this.editingProduct.imageUrl = imageUrlArray;
            }

            axios({
                    url: this.productModalIsCreating ? apiUrlForCreate : apiUrlForUpdate,
                    method: this.productModalIsCreating ? 'post' : 'patch',
                    headers: this.getHeader(),
                    data: this.editingProduct
                }
            ).then(res => {
                $('#productModal').modal('hide');
                this.$emit('update-products');
            }).catch(err => {
                console.log(err);
            });
        },
        getHeader() {
            return {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${this.user.token}`
            }
        }
    }
})
