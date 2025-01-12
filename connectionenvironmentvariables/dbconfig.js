var mysql = require("mysql2/promise");

// Create the connection pool for local db
const azurepool = mysql.createPool({
 host: "ekedc-nerc-sbt-db.mysql.database.azure.com",
  user: "ZoneDev",
  database: "ekosbt",
  password: "NotABadPass785@#",
  ssl: {
    rejectUnauthorized: false,
    //ca: fs.readFileSync("c:/Users/EKEDP/Downloads/BaltimoreCyberTrustRoot.crt.pem")
  },
});

module.exports={azurepool}