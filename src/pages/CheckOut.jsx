import React from "react";

export const CheckOut = () => {
  return (
    <>
      <section class="py-5">
        <div class="container">
          <h1 class="mb-4">Checkout</h1>

          <div class="row">
            <div class="col-lg-8">
              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title mb-4">Shipping Information</h5>
                  <form id="checkoutForm">
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="firstName" class="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="firstName"
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="lastName" class="form-label">
                          Last Name
                        </label>
                        <input type="text" class="form-control" id="lastName" />
                      </div>
                    </div>

                    <div class="mb-3">
                      <label for="email" class="form-label">
                        Email
                      </label>
                      <input type="email" class="form-control" id="email" />
                    </div>

                    <div class="mb-3">
                      <label for="address" class="form-label">
                        Address
                      </label>
                      <input type="text" class="form-control" id="address" />
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="city" class="form-label">
                          City
                        </label>
                        <input type="text" class="form-control" id="city" />
                      </div>
                      <div class="col-md-3 mb-3">
                        <label for="state" class="form-label">
                          State
                        </label>
                        <input type="text" class="form-control" id="state" />
                      </div>
                      <div class="col-md-3 mb-3">
                        <label for="zip" class="form-label">
                          ZIP Code
                        </label>
                        <input type="text" class="form-control" id="zip" />
                      </div>
                    </div>

                    <h5 class="mt-4 mb-4">Payment Information</h5>

                    <div class="mb-3">
                      <h6>Payment Method</h6>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="paymentMethod"
                          id="cashOnDelivery"
                          value="cashOnDelivery"
                        />
                        <label class="form-check-label" for="cashOnDelivery">
                          Cash on Delivery
                        </label>
                      </div>
                    </div>

                    <a href="thankyou.html" class="btn btn-primary w-100 mt-4">
                      Place Order
                    </a>
                  </form>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title mb-4">Order Summary</h5>
                  <div id="orderSummary"></div>=
                  <div class="d-flex justify-content-between mb-2">
                    <span>Subtotal</span>
                    <span id="subtotal">$0.00</span>
                  </div>
                  <div class="d-flex justify-content-between mb-2">
                    <span>Shipping</span>
                    <span id="shipping">$0.00</span>
                  </div>
                  <div class="d-flex justify-content-between mb-2">
                    <span>Tax</span>
                    <span id="tax">$0.00</span>
                  </div>
                  <div class="d-flex justify-content-between mb-2 fw-bold">
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
