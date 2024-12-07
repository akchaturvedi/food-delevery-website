import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const navigate = useNavigate();

  const { getTotalCartAmount } = useContext(StoreContext);

  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  // State for confirmation message
  const [confirmationMessage, setConfirmationMessage] = useState("");

  // Handle form submission
  const placeOrder = (e) => {
    e.preventDefault();

    // Display confirmation message
    setConfirmationMessage(
      "Thank you! Your order has been placed successfully 😁."
    );

    // Redirect to home route after 3 seconds
    setTimeout(() => {
      navigate("/");
    }, 8000);
  };

  return (
    <div>
      {confirmationMessage && (
        <div className="confirmation-message">
          <p>{confirmationMessage}</p>
        </div>
      )}
      <form className="place-order" onSubmit={placeOrder}>
        {/* Left Section: Delivery Information */}
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input
              required
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First name"
            />
            <input
              required
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last name"
            />
          </div>
          <input
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
          <input
            required
            name="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            type="text"
            placeholder="Street"
          />
          <div className="multi-fields">
            <input
              required
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="City"
            />
            <input
              required
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              type="text"
              placeholder="State"
            />
          </div>
          <div className="multi-fields">
            <input
              required
              name="zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              type="text"
              placeholder="Zip Code"
            />
            <input
              required
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            required
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Phone"
          />
        </div>

        {/* Right Section: Cart Totals */}
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotals</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>
                  ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </b>
              </div>
            </div>
            <button type="submit">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
