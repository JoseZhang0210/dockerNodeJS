const express = require("express");
const sql = require("mssql");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const config = {
    server: "host.docker.internal",
    port: 9433,
    user: "sa",
    password: "P@ssw0rd",
    database: "java",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

app.get("/", (req, res) => {
    res.send("Node API OK");
});

app.get("/api/products", async (req, res) => {

    try {

        const pool = await sql.connect(config);

        const result = await pool
            .request()
            .query("SELECT top 1 * FROM dbo.product");

        res.json(result.recordset);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: err.message
        });

    }

});

app.listen(3000, "0.0.0.0", () => {
    console.log("API Server running on port 3000");
});
