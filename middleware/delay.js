const debug = require('debug')('express-mock:delay');

let global = parseInt(process.env.EMULATED_DELAY || '0', 10);
if (isNaN(global) || global < 0) {
    global = 0;
}

module.exports = function (req, res, next) {
    const header = req.get('x-emulated-delay');
    let delay = 0;
    if (header !== 'false') {
        delay = parseInt(header || '0', 10);
        if (isNaN(delay) || delay < 0) {
            delay = global;
        }
    }

    if (delay > 0) {
        debug(`Delaying request by ${delay}ms.`);
        setTimeout(() => next(), delay);
    } else {
        next();
    }
}
