Vue.component('shopping-cart', {
    template: `<div>
  <div class="my-5 row justify-content-center">
    <div class="col-md-6">
      <div class="text-right mb-2">
          <button type="button" v-on:click="deleteAllItem()" class="btn btn-outline-danger btn-sm">刪除全部
          </button>
      </div>
      <table class="table">
        <thead>
        <tr>
          <th>-</th>
          <th>#</th>
          <th>品名</th>
          <th width="150px">數量</th>
          <th>單位</th>
          <th>單價</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(product, index) in shoppingList" :key="product.id">
          <td class="align-middle">
            <button type="button" v-on:click="deleteItem(index)"
                    class="btn btn-outline-danger btn-sm">刪除
            </button>
          </td>
          <td class="align-middle">{{index + 1}}</td>
          <td class="align-middle">{{product.title}}</td>
          <td class="align-middle">
            <div class="input-group">
              <div class="input-group-prepend">
                <button class="btn btn-outline-primary" v-on:click="addItemQuantity(product, 1)">+</button>
              </div>
              <input id="inlineFormInputGroupUsername" type="text" class="form-control text-center" :value="product.num">
              <div class="input-group-append">
                <button class="btn btn-outline-primary" v-on:click="addItemQuantity(product, -1)" :disabled="product.num <= 1">-</button>
              </div>
            </div>
          </td>
          <td class="align-middle">{{product.unit}}</td>
          <td class="align-middle text-right">{{product.price}}</td>
        </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5" class="text-right">
              總計
            </td>
            <td class="text-right">
              {{ calculateTotalPrice }}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  <div class="my-5 row justify-content-center">
    <validation-observer v-slot="{ invalid }" class="col-md-6">
      <form v-on:submit.prevent="sendOrder">
        <div class="form-group">
          <validation-provider rules="required" v-slot="{ errors, classes, passed }">
            <label for="username">姓名</label>
            <input id="username" type="text" name="姓名" v-model="username" class="form-control" :class="classes">
            <span class="invalid-feedback">{{ errors[0] }}</span>
            <span v-if="passed">檢查通過</span>
          </validation-provider>
        </div>

        <div class="form-group">
          <validation-provider rules="email|required" v-slot="{ errors, classes, passed }">
            <label for="email">Email</label>
            <input id="email" type="email" name="Email" v-model="email" class="form-control" :class="classes">
            <span class="invalid-feedback">{{ errors[0] }}</span>
            <span v-if="passed">檢查通過</span>
          </validation-provider>
        </div>

        <div class="form-group">
          <validation-provider rules="numeric|min:9|required" v-slot="{errors, classes, passed}">
            <label for="tel">聯絡電話</label>
            <input id="tel" type="tel" name="聯絡電話" v-model="tel" class="form-control" :class="classes">
            <span class="invalid-feedback">{{ errors[0] }}</span>
            <span v-if="passed">檢查通過</span>
          </validation-provider>
        </div>

        <div class="form-group">
          <validation-provider rules="required" v-slot="{errors, classes, passed}">
            <label for="address">寄件地址</label>
            <input id="address" type="text" name="寄件地址" v-model="address" class="form-control" :class="classes">
            <span class="invalid-feedback">{{ errors[0] }}</span>
            <span v-if="passed">檢查通過</span>
          </validation-provider>
        </div>

        <div class="form-group">
          <validation-provider rules="required" v-slot="{errors, classes, passed}">
            <label for="payMethod">付款方式</label>
            <select id="payMethod" name="付款方式" v-model="payMethod" class="form-control" :class="classes">
              <option disabled value="">請選擇付款方式</option>
              <option>WebATM</option>
              <option>ATM</option>
              <option>Barcode</option>
              <option>Credit</option>
              <option>ApplePay</option>
              <option>GooglePay</option>
            </select>
            <span class="invalid-feedback">{{ errors[0] }}</span>
            <span v-if="passed">檢查通過</span>
          </validation-provider>
        </div>

        <div class="form-group">
          <validation-provider>
            <label for="message">備註</label>
            <textarea id="message" name="備註" v-model="message" cols="30" row="3" class="form-control">
            </textarea>
          </validation-provider>
        </div>
        
        <div class="text-right">
          <button type="submit" :disabled="invalid" class="btn btn-primary">Send</button>
        </div>
      </form>
    </validation-observer>
  </div>
  </div>`,
    data() {
        return {
            totalPrice: 0,
            shoppingList: [],
            email: '',
            username: '',
            tel: '',
            address: '',
            payMethod: '',
            message: ''
        }
    },
    props: [],
    created() {
        this.$bus.$on('addToCart', product => {
            this.addToCart(product)
        })
    },
    computed: {
        calculateTotalPrice() {
            return this.shoppingList.length === 0 ? 0 : this.shoppingList.reduce((totalPrice, product) => {
                return totalPrice + product.price * product.num;
            }, 0);
        }
    },
    methods: {
        addToCart(product) {
            let itemNotInShoppingList = true;

            this.shoppingList.forEach((shoppingItem, index) => {
                if (shoppingItem.title === product.title) {
                    shoppingItem.num += product.num;
                    itemNotInShoppingList = false;
                }
            })

            if (itemNotInShoppingList) {
                this.shoppingList.push(product);
            }
        },
        deleteItem(itemIndex) {
            this.shoppingList.splice(itemIndex, 1);
        },
        deleteAllItem() {
            this.shoppingList = [];
        },
        addItemQuantity(product, quantity) {
            product.num += quantity;
        },
        sendOrder() {
            $('#confirmModal').modal('show');
        }
    }
})
