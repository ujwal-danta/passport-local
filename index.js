const express = require("express")
const app = express()
const passport = require("passport")
const session = require("express-session")
const PORT = process.env.PORT || 3000
const LocalStrategy = require("passport-local").Strategy
const home = require("./routes/index")

app.use(session({
    secret: "secret",
    resave: false ,
    saveUninitialized: true ,
  }))


app.use(passport.initialize()) 
// init passport on every route call.
app.use(passport.session())    
// allow passport to use "express-session".


authUser = (email, password, done) => {
    if(!email){
        // go to register
        res.redirect('/register')
    }
}

passport.use(new LocalStrategy ({usernameField: "email"},authUser))

app.use("/",home)


app.get("/",(req,res)=>{
    res.status(200).json("homepage")
})

app.listen(3000,()=>{
    console.log(`server listening on port ${PORT}`)
})
