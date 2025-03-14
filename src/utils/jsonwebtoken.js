import jwt from 'jsonwebtoken';


const PRIVATE_KEY = "autos";

const generateToken = (user) =>{
    const token = jwt.sign(user, PRIVATE_KEY, {expiresIn:"24h"});
    return token;
}

export default generateToken;