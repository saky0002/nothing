const app = {
    init: () => {
        console.log("app running");
    }
    one: 1,
    two: 2,
};

setTimeout(app.init, 1000);