const robokassa = require('node-robokassa');

const handler = (req, res) => {
    const { phone, option, price } = req.body;

    const robokassaHelper = new robokassa.RobokassaHelper({
        // REQUIRED OPTIONS:
        merchantLogin: 'orangepracticum',
        hashingAlgorithm: 'md5',
        password1: 'galoNuq16ZI7J4Ph9gnN',
        password2: 'SnspE6bX0T3PSGx3G1Vs',

        // OPTIONAL CONFIGURATION
        testMode: false, // Whether to use test mode globally
        resultUrlRequestMethod: 'GET', // HTTP request method selected for "ResultURL" requests
    });

    const invDesc = `Оплата доступна в платный чат (включая комиссию сервиса Robokassa 3%)`;

    // Optional options.
    const options = {
        invId: Math.floor(Date.now() / 1000), // Your custom order ID
        outSumCurrency: 'RUR', // Transaction currency
        isTest: false,
        userData: {
            phone,
        },
    };

    const paymentUrl = robokassaHelper.generatePaymentUrl(
        parseInt(parseInt(price) + parseInt(price * 0.03)),
        invDesc,
        options
    );

    res.send({ paymentLink: paymentUrl });
};

export default handler;

// z9ZO3m0d8WtzEv8xXkEZ prod pass 1
// kdvT28QHCvsRJuTv10Q3 prod pass 2

// Whiz8lysdd4BcYd40F0X test pass 1
// V8aw5bpJ5z7T3lDCvvdc test pass 2
