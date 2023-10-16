import React from "react";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Heading } from "@chakra-ui/react";

const Cart = () => {
  const { cartItem,subTotal,shipping,tax,total } = useSelector((state) => state.cart);
  const dipatch=useDispatch();
  const decrement=(id)=>{
    dipatch({
      type:"decrement",
      payload:id,
    });
    dipatch({
        type:"calculatePrice"
      })
  }
  const increment=(id)=>{
      dipatch({
        type:"addToCart",
        payload:{id},
      })
      dipatch({
        type:"calculatePrice"
      })
  }
  const deleteHandler=(id)=>{
    dipatch({
      type:"deleteHandler",
      payload:id,
    })
    dipatch({
        type:"calculatePrice"
      })
  }
  return (
    <div className="min-h-screen grid grid-cols-[1fr] sm:grid-cols-[4fr,1fr]">
      <main className="p-8 overflow-y-auto flex items-center flex-col">
        {cartItem.length > 0 ? (
          cartItem.map((i) => (
            <CartItem key={i.id}
              imgSrc={
                i.imgSrc
              }
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}

            />
          ))
        ) : (
          <Heading>No Items in the cart</Heading>
        )}
      </main>

      <aside className=" h-full w-full flex flex-col justify-center p-8 sm:p-0 rounded-none  sm:rounded-s-xl ">
        <h2 className="m-3 font-kanit font-thin text-lg">Subtotal :${subTotal}</h2>
        <h2 className="m-3 font-kanit font-thin text-lg">Shipping :${shipping}</h2>
        <h2 className="m-3 font-kanit font-thin text-lg">Tax :${tax}</h2>
        <h2 className="m-3 font-kanit font-semibold text-lg">Total :${total}</h2>
      </aside>
    </div>
  );
};

export default Cart;
