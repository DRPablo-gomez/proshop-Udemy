import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import ChekcoutSteps from "../components/CheckoutSteps";
import { savePaymenthMethod } from "../slices/cartSlice";


const PaymentScreen = () => {
  const [paymentMethod, setPaymenthMethod] = useState("Paypal");

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  useEffect(() => {
    if(!shippingAddress) {
      navigate('/shipping')
    }
  }, [shippingAddress, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(savePaymenthMethod(paymentMethod))
    navigate('/placeorder')
  }

  return (
    <FormContainer>
      <ChekcoutSteps step1 step2 step3 />
      <h1>Paymenth Method</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              className="my-2"
              label="Paypal or Credit Card"
              id="Paypal"
              name="paymentMethod"
              value="Paypal"
              onChange={(e) => setPaymenthMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
