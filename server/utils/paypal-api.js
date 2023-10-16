
const axios = require('axios')

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env;

const base = "https://api-m.sandbox.paypal.com";


/**
* Generate an OAuth 2.0 access token for authenticating with PayPal REST APIs.
* @see https://developer.paypal.com/api/rest/authentication/
*/

const generateAccessToken = async () => {
    try {
        if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
            throw new Error("MISSING_API_CREDENTIALS");
        }
        const auth = Buffer.from(
            PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET,
        ).toString("base64");


        const response = await axios.post(`${base}/v1/oauth2/token`, 'grant_type=client_credentials', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${auth}`,
            },
        });

        // console.log("Access Token:########################################", response.data);
        return response.data.access_token;
    } catch (error) {
        console.error("Failed to generate Access Token:###########################################", error);
    }
};


const createOrder = async (cart) => {
    // use the cart information passed from the front-end to calculate the purchase unit details
    // console.log(
    //     "shopping cart information passed from the frontend createOrder() callback:",
    //     cart,
    // );

    const cost = cart.reduce((initial, item) => initial + item.cost, 0)

    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders`;
    const payload = {
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: 2,
                },
            },
        ],
    };

    // console.log("=======================[payload]==========", payload);
    const response = await axios.post(url, payload, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
            // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
            // "PayPal-Mock-Response": '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}'
            // "PayPal-Mock-Response": '{"mock_application_codes": "PERMISSION_DENIED"}'
            // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
        }
    });

    // console.log("=======================response==========", handleResponse(response));

    return handleResponse(response);
};

/**
* Capture payment for the created order to complete the transaction.
* @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
*/
const captureOrder = async (orderID) => {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders/${orderID}/capture`;

    const response = await axios.post(url, null, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
            // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
            // "PayPal-Mock-Response": '{"mock_application_codes": "INSTRUMENT_DECLINED"}'
            // "PayPal-Mock-Response": '{"mock_application_codes": "TRANSACTION_REFUSED"}'
            // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
        },
    });

    // console.log("capture order response ==================", handleResponse(response));

    return handleResponse(response);
};

async function handleResponse(response) {
    try {
        // Extract necessary data from the response
        const responseData = {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
        };

        return {
            response: responseData,
            httpStatusCode: response.status,
        };
    } catch (err) {
        const errorMessage = err.message || 'Error occurred while handling response';
        throw new Error(errorMessage);
    }
}




module.exports = { createOrder, captureOrder }