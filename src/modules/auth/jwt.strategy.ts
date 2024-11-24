import { Injectable } from "@nestjs/common";
<<<<<<< HEAD
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
=======
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
>>>>>>> 9e0e8eadbc618168f2fec4a59ccc637a435bdd6a

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
<<<<<<< HEAD
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey:"Mi_codigo_secreto"
        })
    }
    async validate(payload:any){
        return{email: payload.email, id:payload.id}
    }
}
=======
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "MI_CODIGO_SECRETO"


        })
    }
    async validate(payload: any){
        return {email: payload.email, id:payload.id}
    }
}
>>>>>>> 9e0e8eadbc618168f2fec4a59ccc637a435bdd6a
