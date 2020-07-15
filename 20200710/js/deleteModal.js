Vue.component('deleteModal', {
    template: `<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title" id="deleteModalLabel">刪除產品</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          是否刪除 <strong class="text-danger">{{editingProduct.title}}</strong> 商品(刪除後將無法恢復)！
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
          <button type="button" class="btn bg-danger text-white" v-on:click="deleteProduct()">確認刪除</button>
        </div>
      </div>
    </div>
  </div>`,
    data() {
        return {}
    },
    props: {
        editingProduct: {},
        user: {
            token: '',
            uuid: ''
        }
    },
    methods: {
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

            $('#deleteModal').modal('hide');
        }
    }
})
