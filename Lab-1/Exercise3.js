// Fix the slow function to be asynchronous/non-blocking
function slow(callback) {
    // for (let i = 0; i <= 5e8; i++) { }
    let random = Math.random();
    if (random > 0.5) {
        return callback("Error", null)
    }
    return callback(null, { id: 12345 })
}

function exec(fn) {
    // Complete the code here to implement chaining with callback
    // have to have an object that has done and fail
    function foo(arg1, arg2){
        return arg1? arg1 : arg2;
    }
    const resut = fn(foo);

    let obj = {
        done: function(callback){
            if(resut != 'Error'){
                callback(resut);
            }
            return this;
        },
        fail: function(callback){
            if(resut === 'Error'){
                callback(resut);
            }
            return this;
        }
    };
    return obj;
}

exec(slow)
    .done(function (data) { console.log(data); })
    .fail(function (err) { console.log("Error: " + err); });