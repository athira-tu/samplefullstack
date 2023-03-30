const usermodel = require("../models/backend-models")
const signup = async (req, res) => {
    try {
        let data = await usermodel.create(req.body)
        res.json({
            success: true,
            message: "success"
        })
        // res.send(data)
    }
    catch (error) {
        res.json({
            success: false,
            message: "cannot able to signup"
        })

    }

}

const login = async (req, res) => {
    try {
        let check = await usermodel.findOne({ email: req.body.email })
        if (check.password == req.body.password) {
            res.json({
                success: true,
                message: "succesfull",

            })
        }
        else {
            res.json({
                success: false,
                message: "unsuccessfull"
            })
        }
    } catch (error) {
        res.json({
            success: false,
            message: "unsuccesfull"
        })
    }
}



module.exports = { signup, login }