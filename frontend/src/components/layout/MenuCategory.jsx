import React from "react";
import all_item from "../../Data/all_item.json";
import MenuCart from "../home/MenuCart";
import "../../styles/MenuCategory.css";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const MenuCategory = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = (itemNum) => {
    switch (itemNum) {
      case 1:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 2:
        dispatch({ type: "vegCheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 3:
        dispatch({ type: "maharajaCheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 4:
        dispatch({ type: "macVegBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 5:
        dispatch({ type: "burgerWithFriesIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 6:
        dispatch({ type: "MargheritaPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 7:
        dispatch({ type: "VeggiePizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 8:
        dispatch({ type: "SupremePizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 9:
        dispatch({ type: "BBQChickenPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 10:
        dispatch({ type: "PepperoniPizzaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 11:
        dispatch({ type: "ManchurianIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 12:
        dispatch({ type: "HakkaNoodlesIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 13:
        dispatch({ type: "SpringRollsIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 14:
        dispatch({ type: "ChowmeinIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 15:
        dispatch({ type: "FriedRiceIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;

      default:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
    }
  };

  return (
    <div className="menu-category">
      {all_item.map((item, i) => {
        if (props.category === item.category) {
          return (
            <MenuCart
              key={i}
              itemNum={item.itemNum}
              foodSrc={item.foodSrc}
              price={item.price}
              title={item.title}
              handler={addToCartHandler}
            />
          );
        }
      })}
    </div>
  );
};

export default MenuCategory;
