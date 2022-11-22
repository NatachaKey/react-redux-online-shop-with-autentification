import { useDispatch } from 'react-redux';
//import dataDesserts from '../../data/dataDesserts';
import {  removeItemFromCart } from "../../redux/cartSlice";


const CartItem = ({ cartItem })=> {

    // const desserts= dataDesserts.find(item=> item.id === cartItem.dessertId)
    const dispatch= useDispatch();
    
    return(
    
    <div>
        {/* <img src={`./${cartItem.img}.jpg`} alt="cart item" width="100px"/> */}
       
      
       <p>{cartItem.name}</p>
       <p>Portion(s): {cartItem.quantity}</p>
       <p>${cartItem.totalPrice}<span onClick={()=>dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
       
       <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt='delete'/>  
        </span></p> 
    </div>
    
    
    
    )
}

export default CartItem;



// import { useDispatch } from 'react-redux';
// //import dataDesserts from '../../data/dataDesserts';
// import {  removeItemFromCart } from "../../redux/cartSlice";

// const CartItem = ({ cartItem })=> {

//     // const desserts= dataDesserts.find(item=> item.id === cartItem.dessertId)
//     const dispatch= useDispatch();

//     return(
//     <div>
//     <div>
//         <img src={`./${desserts.img}.jpg`} alt="cart item" width="100px"/>
//        <p>{desserts.name}</p>
//        <p>{cartItem.quantity}portion(s) ${desserts.price * cartItem.quantity }   <span onClick={()=>dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
//        <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt='delete'/> 
//        </span>
//          </p>  
//     </div>
    
//     </div>
    
//     )
// }

// export default CartItem;