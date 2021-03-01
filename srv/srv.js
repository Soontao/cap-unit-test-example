const { resolve } = require("@sap/cds")



/**
 *
 * @param {import("@sap/cds/apis/services").Service} srv
 */
module.exports = srv => {

    srv.on("queryAny", async (req) => {
        new Promise((resolve, reject) => { reject(new Error()) })
    })

    srv.before("READ", "Peoples", async (req) => {
        /**
         * @type {import("@sap/cds/apis/ql").SELECT}
         */
        const query = req.query
        query.where({ Age: { ">": 99 } })
    })
}
