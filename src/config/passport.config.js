import passport from "passport";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import UsuarioModel from "../dao/models/usuario-model";

const PRIVATE_KEY = 'autos';

const cookieExtractor = req => {
    let token = null;
    if( req && req.cookies){
        token = req.cookies["acces_token"];
    }
    return token;
};

    passport.use("jwt", new JWTStrategy({
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: PRIVATE_KEY
    }, async ( jwt_payload,done) => {
        try {
            
            const usuario = await UsuarioModel.findOne({email: jwt_payload.email});
            if(!usuario){
                return done(null,false);
            }
            return done(null,usuario);
        } catch (error) {
            return done(error);
        }
    }));

const protegerRuta = passport.authenticate("jwt", { session: false });

export default {protegerRuta};

