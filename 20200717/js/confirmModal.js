Vue.component('confirm-modal', {
    template: `<div class="modal fade" id="confirmModal" tabindex="-1" role="dialog" aria-labelledby="confirmModalLabel"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-info text-white">
          <h5 class="modal-title" id="confirmModalLabel">訂單狀況</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          訂單完成
        </div>
        <div class="modal-footer">
          <button type="button" class="btn bg-info text-white" v-on:click="confirmProduct()">確認</button>
        </div>
      </div>
    </div>
  </div>`,
    data() {
        return {}
    },
    props: {},
    methods: {
        confirmProduct() {
            $('#confirmModal').modal('hide');
        }
    }
})
