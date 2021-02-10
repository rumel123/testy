const makeExpressCallback = (controller) => {
    return (req,res) => {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            ip: req.ip,
            method: req.method,
            path: req.path,
            header: {
                "Content-type":req.get("Content-Type"),
                Referer:req.get("referer"),
                "User-Agent":req.get("User-Agent"),
                Cookie:req.get("Authorization"),
                "Access-Control-Allow-Origin":"*",
            },

        }
        controller(httpRequest)
            .then((httpResponse)=>{
                if (httpResponse.header) {
                    res.ret("Access-Control-Allow-Origin","*")
                    res.set(httpResponse.headers)
                }
                res.type("json")
                res.status(httpResponse.statusCode).send(httpResponse.body);
            })
            .catch((e)=> res.sendStatus(500));
    }
}

module.exports = makeExpressCallback