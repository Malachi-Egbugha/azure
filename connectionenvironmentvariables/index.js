//import sql from 'mssql';
//import dotenv from 'dotenv';
var express= require("express");
var cors = require("cors");


var {azurepool} = require('./dbconfig.js');
//dotenv.config();
const port = process.env.PORT;
const app= express();
//cross origin sharing
app.use(cors());

//middleware to process json
app.use(express.json({ limit: "50mb" }));

  app.get('/', (req, res) => { 
    res.send('Hello, Azure App Service!'); 
});
//const app=createServer();
//var endDate:any = moment().subtract(configuration.OFFSET, "minutes").format('YYYY-MM-DDTHH:mm:ss');
//var startDate:any = moment(endDate).subtract(configuration.INTERVAL, "minutes").format('YYYY-MM-DDTHH:mm:ss');
//console.log('date', myStartDate);
//edmilogin('','');
//const response =calledmidrive(startDate, endDate,250708446);
//console.log('response', response);

/*
var dbConfig ={
    server: "ekofeedermeterdata.database.windows.net",
    database:"Eko_33kVFeederMeterData",
    user:"izuchukwuuchegbu",
    password:"PaddyRice765#$%@",
    port: 1433,
    options: {
        encrypt: true
    }
}

async function getEmp(){
    try{
    var poolconnection =await sql.connect(dbConfig);
    console.log('Database connection successful');
    const request = poolconnection.request();
    const result = await request.query(`SELECT TOP 10 * FROM Reading_NERC WHERE datecreated BETWEEN '2023-06-06 12:25:30' AND '2023-07-07 13:25:30' `);
    console.log('>>>>>',result.recordset)
    
    //var req = new sql.Request(conn)
    }
    catch(e:any){
        console.log('//////////',e.message);
    }
}
getEmp();
*/
azurepool.query("SELECT 1").then(()=> {
    console.log('local db connection successful');
    app.listen(port,()=>{
        console.log(`Server is listening on Port ${port}`)
    })
   
    
}).catch(err=> console.log(`db connection failed ${err}`));