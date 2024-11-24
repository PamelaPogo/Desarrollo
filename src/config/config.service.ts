import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
import * as fs from 'fs'
=======
import * as fs from 'fs';
>>>>>>> 9e0e8eadbc618168f2fec4a59ccc637a435bdd6a
import { parse } from 'dotenv';

@Injectable()
export class ConfigService {
<<<<<<< HEAD
    private  readonly envConfig: {[key:string]:string}
    constructor(){
       const env=process.env.NODE_ENV || 'development'
       const envFilePath=`${__dirname}/../../../.env.${env}`
       const existsPath = fs.existsSync(envFilePath)
            
        if(!existsPath){

            console.log(`.env${process.env.NODE_ENV}no existe`)
            process.exit(0)
        }
        this.envConfig=parse(fs.readFileSync(envFilePath))
      
        
    }
    get(key:string):string{
=======
    private readonly envConfig: {[key:string]:string}
    constructor(){
        const env =process.env.NODE_ENV || 'development'
        const envFilePath= `${__dirname}/../../.env.${env}`
        const existsPath = fs.existsSync(envFilePath)
        if(!existsPath){
                console.log(`.env.${process.env.NODE_ENV} no existe`)
                process.exit(0)
            }
            this.envConfig=parse(fs.readFileSync(envFilePath))

        //console.log("*********",envFilePath)
        /*
        if(isDevelopmentEnv){
            const envFilePath=__dirname + '/../../.env.development'    
        }
        else
        {
            const envFilePath=__dirname + '/../../.env.production'
            const existsPath = fs.existsSync(envFilePath)
            if(!existsPath){
                console.log('.env.production no existe PRODUCTION')
                process.exit(0)
            }
            this.envConfig=parse(fs.readFileSync(envFilePath))
        }
            */
    }
    get(key: string):string{
>>>>>>> 9e0e8eadbc618168f2fec4a59ccc637a435bdd6a
        return this.envConfig[key];
    }
}
