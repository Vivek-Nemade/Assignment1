# MultiVendor Components Ordering system

### Register Vendor : 
## API : https://hatch-cod-assign.onrender.com/vendor/signup
## body:- {
      name: abc,
      email: abc@gmail.com,
      address: xyz,
      products: 
        [
            {
                prod_name: screw,
                qty: 1000,
                price: 8
            }
        ]
    }
    
  ### Get ALL Vendors : 
  ## API : https://hatch-cod-assign.onrender.com/vendor/get
  
  ### place Order:-
  ## API : https://hatch-cod-assign.onrender.com/order/place
  ## body: {
      name: abc,
      email: abc@gmail.com,
      address: xyz,
      products: 
        [
            {
                prod_name: drill bits,
                qty: 10,
            }
        ]
    }
    
  ### View Order:-
  ## API : https://hatch-cod-assign.onrender.com/order/vieworder
  ## body: {
      OrderId: 63c82f9bb3f2488cb3076e17
  }
  
  ### Finalise Order:-
  ## API : https://hatch-cod-assign.onrender.com/final/commit
  ## body: {
      OrderId: 63c82f9bb3f2488cb3076e17
  }
