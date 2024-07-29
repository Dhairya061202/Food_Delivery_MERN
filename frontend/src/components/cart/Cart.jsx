import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import all_items from "../../Data/all_item.json";
import "../../styles/cart.css";
import { useDispatch, useSelector } from "react-redux";

const CartPage = ({ value, title, img, increment, decrement }) => {
  return (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <img src={img} alt="Item" />
      </div>
      <div>
        <button onClick={() => decrement(title)}>-</button>
        <input type="number" readOnly value={value} />
        <button onClick={() => increment(title)}>+</button>
      </div>
    </div>
  );
};

const Cart = () => {
  const {
    cartItems: {
      cheeseBurger: { quantity: cheeseBurger },
      vegCheeseBurger: { quantity: vegCheeseBurger },
      maharajaCheeseBurger: { quantity: maharajaCheeseBurger },
      macVegBurger: { quantity: macVegBurger },
      burgerWithFries: { quantity: burgerWithFries },
      MargheritaPizza: { quantity: MargheritaPizza },
      VeggiePizza: { quantity: VeggiePizza },
      SupremePizza: { quantity: SupremePizza },
      BBQChickenPizza: { quantity: BBQChickenPizza },
      PepperoniPizza: { quantity: PepperoniPizza },
      Manchurian: { quantity: Manchurian },
      HakkaNoodles: { quantity: HakkaNoodles },
      SpringRolls: { quantity: SpringRolls },
      Chowmein: { quantity: Chowmein },
      FriedRice: { quantity: FriedRice },
    },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);

  const {cartItems:orderItems}= useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const increment = (item) => {
    switch (item) {
      case 1:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        dispatch({ type: "vegCheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        dispatch({ type: "maharajaCheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 4:
        dispatch({ type: "macVegBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 5:
        dispatch({ type: "burgerWithFriesIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 6:
        dispatch({ type: "MargheritaPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 7:
        dispatch({ type: "VeggiePizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 8:
        dispatch({ type: "SupremePizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 9:
        dispatch({ type: "BBQChickenPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 10:
        dispatch({ type: "PepperoniPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 11:
        dispatch({ type: "ManchurianIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 12:
        dispatch({ type: "HakkaNoodlesIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 13:
        dispatch({ type: "SpringRollsIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 14:
        dispatch({ type: "ChowmeinIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 15:
        dispatch({ type: "FriedRiceIncrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  const decrement = (item) => {
    
    switch (item) {
      case 1:
        if(cheeseBurger === 0) break;
        dispatch({ type: "cheeseBurgerDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        if(vegCheeseBurger === 0) break;
        dispatch({ type: "vegCheeseBurgerDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        if(maharajaCheeseBurger === 0) break;
        dispatch({ type: "maharajaCheeseBurgerDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 4:
        if(macVegBurger === 0) break;
        dispatch({ type: "macVegBurgerDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 5:
        if(burgerWithFries === 0) break;
        dispatch({ type: "burgerWithFriesDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 6:
        if(MargheritaPizza === 0) break;
        dispatch({ type: "MargheritaPizzaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 7:
        if(VeggiePizza === 0) break;
        dispatch({ type: "VeggiePizzaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 8:
        if(SupremePizza === 0) break;
        dispatch({ type: "SupremePizzaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 9:
        if(BBQChickenPizza === 0) break;
        dispatch({ type: "BBQChickenPizzaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 10:
        if(PepperoniPizza === 0) break;
        dispatch({ type: "PepperoniPizzaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 11:
        if(Manchurian === 0) break;
        dispatch({ type: "ManchurianDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 12:
        if(HakkaNoodles === 0) break;
        dispatch({ type: "HakkaNoodlesDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 13:
        if(SpringRolls === 0) break;
        dispatch({ type: "SpringRollsDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 14:
        if(Chowmein === 0) break;
        dispatch({ type: "ChowmeinDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 15:
        if(FriedRice === 0) break;
        dispatch({ type: "FriedRiceDecrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        if(cheeseBurger === 0) break;
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }


  };

  useEffect(()=>{
    localStorage.setItem("cartItems",JSON.stringify(orderItems));
    localStorage.setItem("cartPrices",JSON.stringify({subTotal,
      tax,
      shippingCharges,
      total,}));
  },[orderItems,subTotal,tax,shippingCharges,total])

  return (
    <section className="cart">
      <main>
        <h1>Cart</h1>

        <CartPage
          title="cheeseBurger"
          img="/assets/food_1.jpeg"
          value={cheeseBurger} // You may want to set a dynamic value based on actual cart values
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />

        <CartPage
          title="vegCheeseBurger"
          img="/assets/food_2.jpeg"
          value={vegCheeseBurger} // You may want to set a dynamic value based on actual cart values
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />

        <CartPage
          title="maharajaCheeseBurger"
          img="/assets/food_3.jpeg"
          value={maharajaCheeseBurger} // You may want to set a dynamic value based on actual cart values
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <CartPage
          title="macVegBurger"
          img="/assets/food_4.jpeg"
          value={macVegBurger} // You may want to set a dynamic value based on actual cart values
          increment={() => increment(4)}
          decrement={() => decrement(4)}
        />

        <CartPage
          title="burgerWithFries"
          img="/assets/food_13.png"
          value={burgerWithFries} // You may want to set a dynamic value based on actual cart values
          increment={() => increment(5)}
          decrement={() => decrement(5)}
        />

        <CartPage
          title="MargheritaPizza"
          img="/assets/food_10.jpeg"
          value={MargheritaPizza} // You may want to set a dynamic value based on actual cart values
          increment={() => increment(6)}
          decrement={() => decrement(6)}
        />

        <CartPage
          title="VeggiePizza"
          img="/assets/food_11.jpeg"
          value={VeggiePizza} // You may want to set a dynamic value based on actual cart values
          increment={() => increment(7)}
          decrement={() => decrement(7)}
        />

        <CartPage
          title="SupremePizza"
          img="/assets/food_12.jpeg"
          value={SupremePizza} // You may want to set a dynamic value based on actual cart values
          increment={() => increment(8)}
          decrement={() => decrement(8)}
        />

        <CartPage
          title="BBQChickenPizza"
          img="/assets/food_13.jpeg"
          value={BBQChickenPizza} // You may want to set a dynamic value based on actual cart values
          increment={() => increment(9)}
          decrement={() => decrement(9)}
        />

        <CartPage
          title="PepperoniPizza"
          img="/assets/food_14.jpeg"
          value={PepperoniPizza} // You may want to set a dynamic value based on actual cart values
          increment={() => increment(10)}
          decrement={() => decrement(10)}
        />

        <CartPage
          title="Manchurian"
          img="/assets/food_32.jpeg"
          value={Manchurian} // You may want to set a dynamic value based on actual cart values
          increment={() => increment(11)}
          decrement={() => decrement(11)}
        />

        <CartPage
          title="HakkaNoodles"
          img="/assets/food_29.png"
          value={HakkaNoodles} // You may want to set a dynamic value based on actual cart values
          increment={() => increment(12)}
          decrement={() => decrement(12)}
        />

        <CartPage
          title="SpringRolls"
          img="/assets/food_33.jpeg"
          value={SpringRolls} // You may want to set a dynamic value based on actual cart values
          increment={() => increment(13)}
          decrement={() => decrement(13)}
        />

        <CartPage
          title="Chowmein"
          img="/assets/food_30.png"
          value={Chowmein} // You may want to set a dynamic value based on actual cart values
          increment={() => increment(14)}
          decrement={() => decrement(14)}
        />

        <CartPage
          title="FriedRice"
          img="/assets/food_31.jpeg"
          value={FriedRice} // You may want to set a dynamic value based on actual cart values
          increment={() => increment(15)}
          decrement={() => decrement(15)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{total}</p>
          </div>

          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
