Vue.component('paging', {
    template: `<div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-primary" :class="{'disabled': hasPrevPage()}">Prev</button>
      <button type="button" class="btn btn-light">{{pagination.current_page}}</button>
      <button type="button" class="btn btn-primary" :class="{'disabled': hasNextPage()}">Next</button>
  </div>`,
    data() {
        return {
        }
    },
    props: {
        pagination: {}
    },
    methods: {
        hasPrevPage() {
            return 1 === this.pagination.current_page;
        },
        hasNextPage() {
            return this.pagination.current_page === this.pagination.total_pages;
        }
    }
})
