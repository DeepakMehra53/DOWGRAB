import React from "react";

export const CheckOut = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <h1 className="mb-4">Checkout</h1>

          <div className="row">
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">Shipping Information</h5>
                  <form id="checkoutForm">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label for="firstName" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label for="lastName" className="form-label">
                          Last Name
                        </label>
                        <input type="text" className="form-control" id="lastName" />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label for="email" className="form-label">
                        Email
                      </label>
                      <input type="email" className="form-control" id="email" />
                    </div>

                    <div className="mb-3">
                      <label for="address" className="form-label">
                        Address
                      </label>
                      <input type="text" className="form-control" id="address" />
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label for="city" className="form-label">
                          City
                        </label>
                        <input type="text" className="form-control" id="city" />
                      </div>
                      <div className="col-md-3 mb-3">
                        <label for="state" className="form-label">
                          State
                        </label>
                        <input type="text" className="form-control" id="state" />
                      </div>
                      <div className="col-md-3 mb-3">
                        <label for="zip" className="form-label">
                          ZIP Code
                        </label>
                        <input type="text" className="form-control" id="zip" />
                      </div>
                    </div>

                    <h5 className="mt-4 mb-4">Payment Information</h5>

                    <div className="mb-3">
                      <h6>Payment Method</h6>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paymentMethod"
                          id="cashOnDelivery"
                          value="cashOnDelivery"
                        />
                        <label className="form-check-label" for="cashOnDelivery">
                          Cash on Delivery
                        </label>
                      </div>
                    </div>

                    <a href="thankyou.html" className="btn btn-primary w-100 mt-4">
                      Place Order
                    </a>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mb-4">Order Summary</h5>
                  <div id="orderSummary"></div>=
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal</span>
                    <span id="subtotal">$0.00</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Shipping</span>
                    <span id="shipping">$0.00</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Tax</span>
                    <span id="tax">$0.00</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2 fw-bold">
                    <span>Total</span>
                    <span id="total">$0.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
