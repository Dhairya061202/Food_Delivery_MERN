import React, { useEffect, useState } from "react";
import "../../styles/ConfirmOrder.scss";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, paymentVerification } from "../../redux/actions/order";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../redux/store";

const ConfirmOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems, subTotal, tax, shippingCharges, total, shippingInfo } =
    useSelector((state) => state.cart);
  const { message, error } = useSelector((state) => state.order);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);

    if (paymentMethod === "COD") {
      dispatch(
        createOrder(
          shippingInfo,
          cartItems,
          paymentMethod,
          subTotal,
          tax,
          shippingCharges,
          total
        )
      );
    } else {
      try {
        const {
          data: { order, orderOption },
        } = await axios.post(
          `${server}/createorderonline`,
          {
            shippingInfo,
            orderItems: cartItems,
            paymentMethod,
            itemsPrice: subTotal,
            taxPrice: tax,
            shippingCharges,
            totalAmount: total,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        const options = {
          key: "rzp_test_zCWIC9DOlkTvAY",
          amount: order.amount,
          currency: "INR",
          name: "Online Food Delivery",
          description: "App",
          order_id: order.id,
          handler: function (response) {
            console.log("Razorpay Payment Response:", response); // Log response for debugging
            const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;

            dispatch(
              paymentVerification(
                razorpay_payment_id,
                razorpay_order_id,
                razorpay_signature,
                orderOption
              )
            );
          },
          theme: {
            color: "#e64a19",
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } catch (error) {
        console.error("Order creation failed", error);
        setDisableBtn(false);
      }
    }
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      dispatch({ type: "emptyState" });
      navigate("/paymentsuccess");
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
      setDisableBtn(false);
    }
  }, [dispatch, message, error, navigate]);

  return (
    <section className="confirmOrder">
      <main>
        <h1>Confirm Order</h1>

        <form onSubmit={submitHandler}>
          <div>
            <label>Cash On Delivery</label>
            <input
              type="radio"
              name="payment"
              onChange={() => setPaymentMethod("COD")}
              required
            />
          </div>
          <div>
            <label>Online</label>
            <input
              type="radio"
              required
              name="payment"
              onChange={() => setPaymentMethod("Online")}
            />
          </div>

          <button disabled={disableBtn} type="submit">
            Place Order
          </button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
