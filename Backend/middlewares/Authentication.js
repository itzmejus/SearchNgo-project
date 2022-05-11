function AuthenticationManage(req,res,next){
    if(req.user==null){
        res.status(403)
        return res.send('u need to sign in')
    }
    next()

}

export default AuthenticationManage