Vue.component('paging', {
    template: `<div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-primary" :class="{'disabled': hasPrevPage()}" v-on:click="changePage(pagination.current_page - 1)">Prev</button>
      <button type="button" class="btn btn-light">{{pagination.current_page}}</button>
      <button type="button" class="btn btn-primary" :class="{'disabled': hasNextPage()}" v-on:click="changePage(pagination.current_page + 1)">Next</button>
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
        },
        changePage(expectPage) {
            this.$emit('change-page', expectPage);
        }
    }
})
