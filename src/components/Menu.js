import React from 'react';
import recipes from '../recipes';
import '../css/Menu.css';
import Swal from 'sweetalert2'

const Menu = () => {
  const handleOrder = (id) =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Order it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Ordered!",
          text: "Your Order has been placed.",
          icon: "success"
        });
      }
    });
  }
  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className='cards'>
        {
          recipes.map(recipe => (
            <div key={recipe.id} className='menu-items'>
              <img src={recipe.image} alt=""/>
              <div className='menu-content'>
                <div className='menu-heading'>
                  <h2>{recipe.title}</h2>
                  <p>{recipe.price}</p>
                </div>
                <p>{recipe.description}</p>
                <button className='orderBtn' onClick={()=> handleOrder(recipe.id)}>Order a delivery</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Menu;
