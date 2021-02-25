const { resolve } = require("@sap/cds")


module.exports = srv => {
    srv.on("queryAny", async () => {
        new Promise((resolve, reject) => { reject(new Error()) })
    })
}
