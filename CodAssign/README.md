# MultiVendor Components Ordering system

### Register Vendor : 
## API : https://hatch-cod-assign.onrender.com/vendor/signup
## body:- {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      address: { type: String, required: true},
      products: 
        [
            {
                prod_name: { type: String, required: true},
                qty: { type: Number, required: true},
                price: { type: Number, required: true}
            }
        ]
    }
