import React, { useEffect, useState } from "react";
import { Form, Input, Button, Radio, DatePicker } from "antd";
import { useSelector } from "react-redux";
import "../../less/index.less";

import axios from "axios";

const SaveCart = props => {
  const [disabled, setDisabled] = useState(true);
  const cartContents = useSelector(state => state.cart);
  const contents = cartContents.map(cart => {
    return { product: cart.productId, quantity: cart.quantity };
  });
  const checkoutCart = cartContents.filter(item => {
    return item.quantity > 0;
  });
  const toggleDisabledFalse = () => {
    setDisabled(false);
  };
  const toggleDisabledTrue = () => {
    setDisabled(true);
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll({ force: true }, (err, values) => {
      const payload = {
        contents,
        email: values.email,
        delivery: values.delivery,
        paymentPreference: values.payment,
        address: values.address,
        agreedPrice: 45,
        total: 540,
        storeId: "5e1def4257aff215deecc4ac",
        checkoutDate: "2020-01-14T17:10:17.173Z"
      };

      console.log(payload);
      if (!err) {
        console.log(payload);
      }
      axios
        .post(
          // "http://localhost:4000/api/store/5e21daecc957980bd0911e9d/cart/submit",
          // payload
          "https://shopping-cart-eu3-staging.herokuapp.com/api/store/5e2066ff5072d500171de812/cart/submit",
          payload,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true
            }
          }
        )
        .then(res => console.log(res))
        .catch(e => console.log(e.response.message));
    });
  };
  const { getFieldDecorator } = props.form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 8
      }
    }
  };
  const config = {
    rules: [{ type: "object", required: false, message: "Please select time!" }]
  };
  return (
    <div className="savecart-cover">
      <div id="inner">
        <div className="checkout">
          {/* <h4>Check out</h4> */}
          <div className="order">
            <p>Order Summary</p>
            <div className="summary">
              {checkoutCart.map(item => (
                <div className="units" key={item.productId}>
                  {item.name}({item.quantity} units) - {item.price}
                </div>
              ))}
            </div>
          </div>
          <div id="linkbox">
            <p>
              Here's a link to the sellers Whatsapp number, if you have any
              questions.
            </p>
            <div className="whatsapp">
              <span>Whatsapp</span>{" "}
              <img
                alt="whatsapp"
                src="https://cdn4.iconfinder.com/data/icons/a-s-social-set/256/whatsapp-512.png"
                style={{ width: "3rem", height: "3rem" }}
              />
            </div>
          </div>
        </div>
        <div className="lower">
          {/* <h4>Cart details</h4> */}
          <Form {...formItemLayout} onSubmit={handleSubmit}>
            <div id="header">
              <p>
                Take a second to tell us your collection/delivery and payments
                preferences.
              </p>
            </div>
            <Form.Item label="Whatsapp number">
              {getFieldDecorator("email", {
                rules: [
                  {
                    message: "Enter your Email"
                  },
                  {
                    required: false,
                    message: "Enter your Email"
                  }
                ]
              })(<Input placeholder="Email" />)}
            </Form.Item>
            <Form.Item label="Delivery option">
              {getFieldDecorator("delivery")(
                <Radio.Group>
                  <Radio onClick={toggleDisabledFalse} value="Delivery">
                    Delivery
                  </Radio>
                  <Radio onClick={toggleDisabledTrue} value="Collection">
                    Collection
                  </Radio>
                </Radio.Group>
              )}
            </Form.Item>
            <span id="info">
              Enter your delivery address in the field below if you opt for
              delivery. If you would rather collect the item in person, the
              seller will contact you with the Whatsapp number you provided
              above
            </span>
            <Form.Item label="Delivery Address">
              {getFieldDecorator("address", {
                rules: [
                  { required: false, message: "Please input your adress!" }
                ]
              })(<Input disabled={disabled} />)}
            </Form.Item>
            <Form.Item label="Collection/Delivery date">
              {getFieldDecorator("date-picker", config)(<DatePicker />)}
            </Form.Item>
            <Form.Item label="Payment preference">
              {getFieldDecorator("payment")(
                <Radio.Group>
                  <Radio value="Cash">Pay with Cash</Radio>
                  <Radio value="Card">Pay with Card</Radio>
                  <Radio value="USSD">Pay with USSD</Radio>
                </Radio.Group>
              )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                Save cart
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

const SaveCartForm = Form.create({ name: "register" })(SaveCart);

export default SaveCartForm;
