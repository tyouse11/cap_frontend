// // This component represents the checkout page 
// // It contains the 'CheckoutForm' component and displays a summary of the order

// import CheckoutForm from './CheckoutForm';
// import '../styles/Checkout.css'

// export default function Checkout ( {cartItems, onPlaceOrder} ) {
//   return (
//     <div className="checkout">
//       <h2>Checkout</h2>
//       <div className="order-summary">
//         <h3>Order Summary</h3>
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.product.id}>{item.product.title} - ${item.product.price * item.quantity}</li>
//           ))}
//         </ul>
//         <h3>Total: ${cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)}</h3>
//       </div>
//       <CheckoutForm onSubmit={onPlaceOrder} />
//     </div>
//   );
// };
