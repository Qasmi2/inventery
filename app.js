const express = require('express')
const {userRouter} = require('./src/interface/route/users/index')
const {deviceRouter} = require('./src/interface/route/devices/index')
const app = express()
const port = 3000


// link route to interface layer
app.use('/users',userRouter)
app.use('/devices',deviceRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

app.listen(port, () => console.log(`Example app listening on port ${port}`))