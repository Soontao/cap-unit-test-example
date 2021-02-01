const cds = require("@sap/cds")

const server = cds.test('.').in(__dirname, "..")

describe('Any Service Test Suite', () => {

    it('should support query', async () => {
        const response = await server.GET("/any/Peoples")
        expect(response.data.value.length).toBe(0)
    });

});
