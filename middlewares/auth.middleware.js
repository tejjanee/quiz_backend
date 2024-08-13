import jwt from "jsonwebtoken"

export const verifyJWT = (req, res, next) => {
    const token = req.headers.authorization;
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = { userId:  decodedToken.id }
        return next();
    }catch(err){
        console.error(`error from server ${JSON.stringify(err)}`)
    }

}
