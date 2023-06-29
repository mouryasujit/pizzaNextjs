import Image from "next/image";

const Cart = () => {
  return (
    <div className="max-w-7xl mx-auto flex my-5 flex-col p-1 text-sm md:flex-row md:justify-between ">
      <div className="flex-[2] w-[95vw]  ">
        <table className="w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-gray-200">
            <tr className="text-center">
              <td className="flex items-center justify-center">
                <div className="w-20 h-20 relative">
                  <Image src="/img/pizza.png" alt="" fill />
                </div>
              </td>
              <td className="text-center">CORALZO</td>
              <td>Double ingredient, spicy sauce</td>
              <td>$19.90</td>
              <td>2</td>
              <td>$39.80</td>
            </tr>
            <tr className="text-center">
              <td className="flex items-center justify-center">
                <div className="w-20 h-20 relative">
                  <Image src="/img/pizza.png" alt="" fill />
                </div>
              </td>
              <td>CORALZO</td>
              <td>Double ingredient, spicy sauce</td>
              <td>$19.90</td>
              <td>2</td>
              <td>$39.80</td>
            </tr>
            <tr className="text-center">
              <td className="flex items-center justify-center">
                <div className="w-20 h-20 relative">
                  <Image src="/img/pizza.png" alt="" fill />
                </div>
              </td>
              <td>CORALZO</td>
              <td>Double ingredient, spicy sauce</td>
              <td>$19.90</td>
              <td>2</td>
              <td>$39.80</td>
            </tr>
            <tr className="text-center">
              <td className="flex items-center justify-center">
                <div className="w-20 h-20 relative">
                  <Image src="/img/pizza.png" alt="" fill />
                </div>
              </td>
              <td>CORALZO</td>
              <td>Double ingredient, spicy sauce</td>
              <td>$19.90</td>
              <td>2</td>
              <td>$39.80</td>
            </tr>
            <tr className="text-center">
              <td className="flex items-center justify-center">
                <div className="w-20 h-20 relative">
                  <Image src="/img/pizza.png" alt="" fill />
                </div>
              </td>
              <td>CORALZO</td>
              <td>Double ingredient, spicy sauce</td>
              <td>$19.90</td>
              <td>2</td>
              <td>$39.80</td>
            </tr>
            <tr className="text-center">
              <td className="flex items-center justify-center">
                <div className="w-20 h-20 relative">
                  <Image src="/img/pizza.png" alt="" fill />
                </div>
              </td>
              <td>CORALZO</td>
              <td>Double ingredient, spicy sauce</td>
              <td>$19.90</td>
              <td>2</td>
              <td>$39.80</td>
            </tr>
            <tr className="text-center">
              <td className="flex items-center justify-center">
                <div className="w-20 h-20 relative">
                  <Image src="/img/pizza.png" alt="" fill />
                </div>
              </td>
              <td>CORALZO</td>
              <td>Double ingredient, spicy sauce</td>
              <td>$19.90</td>
              <td>2</td>
              <td>$39.80</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="md:flex-1 md:mx-auto relative  ">
        <div className="my-3 bg-gray-600 p-3 gap-4 md:h-[30vh] md:w-[100%] md:p-3 flex flex-col text-white md:sticky md:top-20 md:right-0  ">
          <h2 className="font-bold text-xl text-white">CART TOTAL</h2>
          <div>
            <b>Subtotal:</b> $79.60
          </div>
          <div>
            <b>Discount:</b> $0.00
          </div>
          <div>
            <b>Total:</b> $79.60
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-[#d2411e] ">
            CHECKOUT NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
