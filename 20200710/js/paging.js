Vue.component('paging', {
    template: `<div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-secondary">Left</button>
      <button type="button" class="btn btn-secondary">Middle</button>
      <button type="button" class="btn btn-secondary">Right</button>
  </div>`,
    data() {
        return {}
    },
    props: {
        page: 1
    },
    methods: {}
})