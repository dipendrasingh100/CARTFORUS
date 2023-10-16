import React from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import server from '../host';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItems } from '../app/userSlice';


const PaypalCheckoutButton = ({ setSuccess }) => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)

    const createOrder = async (data, actions) => {
        // Order is created on the server and the order id is returned

        // use the "body" param to optionally pass additional order information
        // like product ids and quantities

        const checkoutCart = user?.cart.map(item => {
            return { productId: item.productId._id, title: item.productId.title, category: item.productId.category, cost: item.productId.dis_price }
        })

        if (!checkoutCart) {
            console.log("error in checkout");
            return;
        }
        try {
            const { data } = await server.post("/api/v2/orders", { cart: checkoutCart }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const orderData = data.data;
            console.log("order data-------------", orderData);


            if (orderData.id) {
                console.log("order id-", orderData.id);
                return orderData.id;
            } else {
                const errorDetail = orderData?.details?.[0];
                const errorMessage = errorDetail
                    ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                    : JSON.stringify(orderData);

                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error(error);
            // resultMessage(`Could not initiate PayPal Checkout...<br><br>${error}`);
        }
    };


    const onApprove = async (odata, actions) => {
        try {
            const { data } = await server.post(`/api/v2/orders/${odata.orderID}/capture`, {}, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const orderData = data.data;
            console.log('on approve=================', orderData);
            // Three cases to handle:
            //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
            //   (2) Other non-recoverable errors -> Show a failure message
            //   (3) Successful transaction -> Show confirmation or thank you message

            const errorDetail = orderData?.details?.[0];

            if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
                return actions.restart();
            } else if (errorDetail) {
                // (2) Other non-recoverable errors -> Show a failure message
                throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
            } else if (!orderData.purchase_units) {
                throw new Error(JSON.stringify(orderData));
            } else {
                // (3) Successful transaction -> Show confirmation or thank you message
                // Or go to another URL:  actions.redirect('thank_you.html');
                const transaction =
                    orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
                    orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
                console.log(
                    `Transaction ${transaction.status}: ${transaction.id}<br><br>See console for all available details`,
                );
                console.log(
                    "Capture result",
                    orderData,
                    JSON.stringify(orderData, null, 2),
                );
                dispatch(removeCartItems(user._id))
                setSuccess(true)
            }
        } catch (error) {
            console.error(error);
            // resultMessage(
            //     `Sorry, your transaction could not be processed...<br><br>${error}`,
            // );
        };
    }
    return (
        <PayPalButtons
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
        />
    )
}

export default PaypalCheckoutButton
