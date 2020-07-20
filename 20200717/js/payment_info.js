Vue.component('payment-info', {
    template: `<div class="my-5 row justify-content-center">
    <validation-observer v-slot="{ invalid }" class="col-md-6">
      <form v-on:submit.prevent="createOrder">
        <div class="form-group">
          <validation-provider rules="required" v-slot="{ errors, classes, passed }">
            <label for="username">Name</label>
            <input id="username" type="text" name="Name" v-model="username" class="form-control" :class="classes">
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
            <label for="tel">Tel</label>
            <input id="tel" type="tel" name="Tel" v-model="tel" class="form-control" :class="classes">
            <span class="invalid-feedback">{{ errors[0] }}</span>
            <span v-if="passed">檢查通過</span>
          </validation-provider>
        </div>

        <div class="form-group">
          <validation-provider rules="required" v-slot="{errors, classes, passed}">
            <label for="address">Address</label>
            <input id="address" type="text" name="Address" v-model="address" class="form-control" :class="classes">
            <span class="invalid-feedback">{{ errors[0] }}</span>
            <span v-if="passed">檢查通過</span>
          </validation-provider>
        </div>

        <div class="form-group">
          <validation-provider rules="required" v-slot="{errors, classes, passed}">
            <label for="payMethod">Payment Method</label>
            <select id="payMethod" name="Payment Method" v-model="payMethod" class="form-control" :class="classes">
              <option disabled value="">Please select one</option>
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
            <label for="message">Message</label>
            <textarea id="message" name="Message" v-model="message" cols="30" row="3" class="form-control">
            </textarea>
          </validation-provider>
        </div>
        
        <div class="text-right">
          <button type="submit" :disabled="invalid" class="btn btn-primary">Send</button>
        </div>
      </form>
    </validation-observer>
  </div>`,
    props: {},
    data() {
        return {
            email: '',
            username: '',
            tel: '',
            address: '',
            payMethod: '',
            message: ''
        }
    },
    methods: {
        createOrder() {
            console.log(this.email, this.username, this.tel, this.address, this.payMethod, this.message);
        }
    }
})
