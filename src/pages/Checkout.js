import React from 'react'
import image from '../images/card_img.png'
const Checkout = () => {
  return (
    <div className="container">
      <form action="">
        <div className="row">
          <div className="col">
            <h3 className="title">Billing address</h3>
            <div className="inputBox">
              <span>Full Name:</span>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="inputBox">
              <span>Email:</span>
              <input type="email" placeholder="example@example.com" />
            </div>
            <div className="inputBox">
              <span>Address:</span>
              <input type="text" placeholder="room - street - locality" />
            </div>
            <div className="inputBox">
              <span>City:</span>
              <input type="text" placeholder="Gaborone" />
            </div>
            <div className="flex">
              <div className="inputBox">
                <span>District:</span>
                <input type="text" placeholder="Sout-East" />
              </div>
              <div className="inputBox">
                <span>Zip Code:</span>
                <input type="text" placeholder="123 456" />
              </div>
            </div>
          </div>
          <div className="col">
            <h3 className="title">payment</h3>
            <div className="inputBox">
              <span>Cards Accepted :</span>
              <img src={image} alt=""/>
            </div>
            <div className="inputBox">
              <span>Name on Card:</span>
              <input type="text" placeholder="mr. john deo" />
            </div>
            <div className="inputBox">
              <span>Credit/Debit Card Number :</span>
              <input type="number" placeholder="1111-2222-3333-4444" />
            </div>
            <div className="inputBox">
              <span>Expiry Month:</span>
              <input type="text" placeholder="November" />
            </div>

            <div className="flex">
              <div className="inputBox">
                <span>Expiry Year:</span>
                <input type="number" placeholder="2023" />
              </div>
              <div className="inputBox">
                <span>CVV :</span>
                <input type="text" placeholder="000" />
              </div>
            </div>
          </div>
        </div>
        <button className=" btn btn-primary submitbtn">Proceed to Checkout</button>
      </form>
    </div>
  )
}

export default Checkout