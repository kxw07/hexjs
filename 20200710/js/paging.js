Vue.component('paging', {
    template: `<div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-primary">Prev</button>
      <button type="button" class="btn btn-light">{{page}}</button>
      <button type="button" class="btn btn-primary">Next</button>
  </div>`,
    data() {
        return {
            page: 1,
            totalPage: 1
        }
    },
    props: {
    },
    methods: {}
})
