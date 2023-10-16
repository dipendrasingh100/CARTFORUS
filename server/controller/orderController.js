const { createOrder, captureOrder } = require("../utils/paypal-api");


const orderCreate = async (req, res) => {
    try {
        // use the cart information passed from the front-end to calculate the order amount detals
        const { cart } = req.body;
        const { response, httpStatusCode } = await createOrder(cart);
        // const data = await createOrder(cart);
        // console.log("response data ====================", data);
        res.status(httpStatusCode).send(response);
    } catch (error) {
        console.error("Failed to create order:", error);
        res.status(500).json({ error: "Failed to create order." });
    }
}


const orderCapture = async (req, res) => {
    try {
        const { orderID } = req.params;

        // console.log("OrderID:------------------------------", orderID);
        const { response, httpStatusCode } = await captureOrder(orderID);
        res.status(httpStatusCode).json(response);
    } catch (error) {
        console.error("Failed to create order:", error);
        res.status(500).json({ error: "Failed to capture order." });
    }
}


module.exports = { orderCreate, orderCapture }