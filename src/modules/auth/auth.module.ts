import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[
    JwtModule.register({
<<<<<<< HEAD
      secret:"Mi_codigo_secreto",
=======
      secret: "MI_CODIGO_SECRETO",
>>>>>>> 9e0e8eadbc618168f2fec4a59ccc637a435bdd6a
      signOptions:{expiresIn: '60s'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
<<<<<<< HEAD
export class AuthModule {
  
}
=======
export class AuthModule {}
>>>>>>> 9e0e8eadbc618168f2fec4a59ccc637a435bdd6a
