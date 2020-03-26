const homeHandler = require("./handlers/home.js");
const submitHandler = require("./handlers/submit.js");

const router = (request, response) => {
    if (request.url === "/") {
        homeHandler(request, response);
    } else if (request.url === "/blog-update" && request.method === "POST") {
        console.log(request.body);
        submitHandler(request, response);
    } else {
        response.writeHead(404, {
            "content-type": "text/html"
        })
        response.end("<h1>404 Not Found</h1>");
    }

}

module.exports = router;