Vue.component('item-card', {
    template: `<li class="card">
                      <img :src="imageUrl" class="item-img">
                      <div class="item-des">
                        <h3>{{title}}</h3>
                        <p>{{content}}</p>
                      </div>
                     </li>`,
    props: {
        title: '',
        category: '',
        content: '',
        imageUrl: '',
        origin_price: 0,
        price: 0
    },
    data() {
        return {}
    }
})
