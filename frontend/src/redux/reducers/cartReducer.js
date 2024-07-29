import {createReducer} from "@reduxjs/toolkit"


const initialState = {
  cartItems: localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : {
      cheeseBurger: {
        quantity: 0,
        price: 100,
      },
      vegCheeseBurger: {
        quantity: 0,
        price: 130,
      },
      maharajaCheeseBurger: {
        quantity: 0,
        price: 200,
      },
      macVegBurger: {
        quantity: 0,
        price: 160,
      },
      burgerWithFries: {
        quantity: 0,
        price: 220,
      },
      MargheritaPizza: {
        quantity: 0,
        price: 250,
      },
      VeggiePizza: {
        quantity: 0,
        price: 290,
      },
      SupremePizza: {
        quantity: 0,
        price: 320,
      },
      BBQChickenPizza: {
        quantity: 0,
        price: 400,
      },
      PepperoniPizza: {
        quantity: 0,
        price: 380,
      },
      Manchurian: {
        quantity: 0,
        price: 150,
      },
      HakkaNoodles: {
        quantity: 0,
        price: 130,
      },
      SpringRolls: {
        quantity: 0,
        price: 200,
      },
      Chowmein: {
        quantity: 0,
        price: 195,
      },
      FriedRice: {
        quantity: 0,
        price: 220,
      },
    },
subTotal: localStorage.getItem('cartPrices')? JSON.parse(localStorage.getItem('cartPrices')).subTotal:0 ,
tax: localStorage.getItem('cartPrices')? JSON.parse(localStorage.getItem('cartPrices')).tax:0 ,
shippingCharges: localStorage.getItem('cartPrices')? JSON.parse(localStorage.getItem('cartPrices')).shippingCharges:0 ,
total: localStorage.getItem('cartPrices')? JSON.parse(localStorage.getItem('cartPrices')).total:0 ,
shippingInfo: localStorage.getItem("shippingInfo")? JSON.parse(localStorage.getItem("shippingInfo")):{},
};


export const cartReducer = createReducer(initialState,
    (builder) => {
    builder
        .addCase('loadUserRequest', (state) => {
          state.loading = true;
        })
        .addCase('cheeseBurgerIncrement', (state) => {
            state.cartItems.cheeseBurger.quantity += 1;
        })
        .addCase('cheeseBurgerDecrement', (state) => {
            state.cartItems.cheeseBurger.quantity -= 1;
        })

        .addCase('vegCheeseBurgerIncrement', (state) => {
            state.cartItems.vegCheeseBurger.quantity += 1;
        })
        .addCase('vegCheeseBurgerDecrement', (state) => {
            state.cartItems.vegCheeseBurger.quantity -= 1;
        })

          .addCase('maharajaCheeseBurgerIncrement', (state) => {
            state.cartItems.maharajaCheeseBurger.quantity += 1;
        })
          .addCase('maharajaCheeseBurgerDecrement', (state) => {
            state.cartItems.maharajaCheeseBurger.quantity -= 1;
        })
        
        .addCase('macVegBurgerIncrement', (state) => {
            state.cartItems.macVegBurger.quantity += 1;
          })
          .addCase('macVegBurgerDecrement', (state) => {
            state.cartItems.macVegBurger.quantity -= 1;
          })

          .addCase('burgerWithFriesIncrement', (state) => {
            state.cartItems.burgerWithFries.quantity += 1;
          })
          .addCase('burgerWithFriesDecrement', (state) => {
            state.cartItems.burgerWithFries.quantity -= 1;
          })

          .addCase('MargheritaPizzaIncrement', (state) => {
            state.cartItems.MargheritaPizza.quantity += 1;
          })
          .addCase('MargheritaPizzaDecrement', (state) => {
            state.cartItems.MargheritaPizza.quantity -= 1;
          })

          .addCase('VeggiePizzaIncrement', (state) => {
            state.cartItems.VeggiePizza.quantity += 1;
          })
          .addCase('VeggiePizzaDecrement', (state) => {
            state.cartItems.VeggiePizza.quantity -= 1;
          })

          .addCase('SupremePizzaIncrement', (state) => {
            state.cartItems.SupremePizza.quantity += 1;
          })
          .addCase('SupremePizzaDecrement', (state) => {
            state.cartItems.SupremePizza.quantity -= 1;
          })

          .addCase('BBQChickenPizzaIncrement', (state) => {
            state.cartItems.BBQChickenPizza.quantity += 1;
          })
          .addCase('BBQChickenPizzaDecrement', (state) => {
            state.cartItems.BBQChickenPizza.quantity -= 1;
          })

          .addCase('PepperoniPizzaIncrement', (state) => {
            state.cartItems.PepperoniPizza.quantity += 1;
          })
          .addCase('PepperoniPizzaDecrement', (state) => {
            state.cartItems.PepperoniPizza.quantity -= 1;
          })

          .addCase('ManchurianIncrement', (state) => {
            state.cartItems.Manchurian.quantity += 1;
          })
          .addCase('ManchurianDecrement', (state) => {
            state.cartItems.Manchurian.quantity -= 1;
          })

          .addCase('HakkaNoodlesIncrement', (state) => {
            state.cartItems.HakkaNoodles.quantity += 1;
          })
          .addCase('HakkaNoodlesDecrement', (state) => {
            state.cartItems.HakkaNoodles.quantity -= 1;
          })

          .addCase('SpringRollsIncrement', (state) => {
            state.cartItems.SpringRolls.quantity += 1;
          })
          .addCase('SpringRollsDecrement', (state) => {
            state.cartItems.SpringRolls.quantity -= 1;
          })

          .addCase('ChowmeinIncrement', (state) => {
            state.cartItems.Chowmein.quantity += 1;
          })
          .addCase('ChowmeinDecrement', (state) => {
            state.cartItems.Chowmein.quantity -= 1;
          })

          .addCase('FriedRiceIncrement', (state) => {
            state.cartItems.FriedRice.quantity += 1;
          })
          .addCase('FriedRiceDecrement', (state) => {
            state.cartItems.FriedRice.quantity -= 1;
          })

          .addCase('calculatePrice', (state) => {

            state.subTotal = state.cartItems.cheeseBurger.price*state.cartItems.cheeseBurger.quantity+
            state.cartItems.vegCheeseBurger.price*state.cartItems.vegCheeseBurger.quantity+
            state.cartItems.maharajaCheeseBurger.price*state.cartItems.maharajaCheeseBurger.quantity+
            state.cartItems.macVegBurger.price*state.cartItems.macVegBurger.quantity+
            state.cartItems.burgerWithFries.price*state.cartItems.burgerWithFries.quantity+
            state.cartItems.MargheritaPizza.price*state.cartItems.MargheritaPizza.quantity+
            state.cartItems.VeggiePizza.price*state.cartItems.VeggiePizza.quantity+ 
            state.cartItems.SupremePizza.price*state.cartItems.SupremePizza.quantity+
            state.cartItems.BBQChickenPizza.price*state.cartItems.BBQChickenPizza.quantity+
            state.cartItems.PepperoniPizza.price*state.cartItems.PepperoniPizza.quantity+
            state.cartItems.Manchurian.price*state.cartItems.Manchurian.quantity+
            state.cartItems.HakkaNoodles.price*state.cartItems.HakkaNoodles.quantity+
            state.cartItems.SpringRolls.price*state.cartItems.SpringRolls.quantity+
            state.cartItems.Chowmein.price*state.cartItems.Chowmein.quantity+
            state.cartItems.FriedRice.price*state.cartItems.FriedRice.quantity;

            state.tax=state.subTotal * 0.18;

            state.shippingCharges=state.subTotal > 1000?0:200;

            state.total=state.subTotal+state.shippingCharges+state.tax

          })
          .addCase('emptyState', (state) => {

            state.cartItems={
                cheeseBurger:{
                    quantity:0,
                    price:100
                },
                vegCheeseBurger:{
                    quantity:0,
                    price:130
                },
                maharajaCheeseBurger:{
                    quantity:0,
                    price:200
                },
                macVegBurger:{
                    quantity:0,
                    price:160
                },
                burgerWithFries:{
                    quantity:0,
                    price:220
                },
        
        
                MargheritaPizza:{
                    quantity:0,
                    price:250
                },
                VeggiePizza:{
                    quantity:0,
                    price:290
                },
                SupremePizza:{
                    quantity:0,
                    price:320
                },
                BBQChickenPizza:{
                    quantity:0,
                    price:400
                },
                PepperoniPizza:{
                    quantity:0,
                    price:380
                },
        
        
                Manchurian:{
                    quantity:0,
                    price:150
                },
                HakkaNoodles:{
                    quantity:0,
                    price:130
                },
                SpringRolls:{
                    quantity:0,
                    price:200
                },
                Chowmein:{
                    quantity:0,
                    price:195
                },
                FriedRice:{
                    quantity:0,
                    price:220
                },
            };

            state.subTotal=0;
            state.tax=0;
            state.shippingCharges=0;
            state.total=0;
            
          })
          .addCase('addShippingInfo', (state,action) => {
            state.shippingInfo={
                hNo:action.payload.hNo,
                city:action.payload.city,
                state:action.payload.state,
                country:action.payload.country,
                pinCode:action.payload.pinCode,
                phoneNo:action.payload.phoneNo
            }
          })

          
    }
)  


export const orderReducer = createReducer({},
    (builder) => {
        builder
          .addCase('createOrderRequest', (state) => {
            state.loading = true;
          })
          .addCase('createOrderSuccess', (state,action) => {
            state.loading = false;
            state.message = action.payload
          })
          .addCase('createOrderFail', (state,action) => {
            state.loading = false;
            state.error = action.payload
          })
          .addCase('clearMessage', (state) => {
            state.message = null
          })
          .addCase('clearError', (state) => {
            state.error = null
          })
          .addCase('paymentVerificationRequest', (state) => {
            state.loading = true;
          })
          .addCase('paymentVerificationSuccess', (state,action) => {
            state.loading = false;
            state.message = action.payload
          })
          .addCase('paymentVerificationFail', (state,action) => {
            state.loading = false;
            state.error = action.payload
          })
    }      
)

export const ordersReducer = createReducer({orders:[]},   (builder) => {
  builder
      .addCase('getMyOrdersRequest', (state) => {
        state.loading = true;
      })
      .addCase('getMyOrdersSuccess', (state,action) => {
        state.loading = false;
        state.orders=action.payload
      })
      .addCase('getMyOrdersFail', (state,action) => {
        state.loading = false;
        state.error=action.error
      })
      .addCase('getOrdersDetailsRequest', (state) => {
        state.loading = true;
      })
      .addCase('getOrderDetailsSuccess', (state,action) => {
        state.loading = false;
        state.order=action.payload
      })
      .addCase('getOrderDetailsFail', (state,action) => {
        state.loading = false;
        state.error=action.error
      })
  }
)