var express = require("express")
var path = require("path")
var bodyParser = require("body-parser")
var app = express();

//View Engine

app.set("views", path.join(__dirname, "/app"))
app.set("view engine", "ejs")
app.engine("html", require("ejs").renderFile)

//Set Static Folder

app.use(express.static(path.join(__dirname, "client")))

// Body Parser MW 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//#region Routes

var index = require("./routes/index")
var tasks = require("./routes/tasks")
app.use("/", index)
app.use("/api/", tasks)

//#endregion
var port = "3000"
app.listen(port, function (){
    console.log(`Server Inicializado en puerto ${port}`)
})

