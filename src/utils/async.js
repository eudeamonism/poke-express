/**
this makes it so that you don't have to use try catch blocks in each async function

Returns a new function that ensures any thrown error is forwarded to next(err)
**/

//exporting annonymous function
module.exports = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    }
}