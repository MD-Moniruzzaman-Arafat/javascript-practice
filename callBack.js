var callback = function () {
    console.log("Done!");
}

setTimeout(callback, 5000);

setTimeout(function () {
    console.log("Done!");
}, 10000);