import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './database/database.module';
<<<<<<< HEAD
import { ConfigModule } from './config/config.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { PersonaModule } from './modules/persona/persona.module';
import { ProductoModule } from './modules/producto/producto.module';
import { RoleModule } from './modules/role/role.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { PedidoModule } from './modules/pedido/pedido.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, ConfigModule, CategoriaModule, PersonaModule, ProductoModule, RoleModule, ClienteModule, PedidoModule],
=======
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, TypeOrmModule, ConfigModule],
>>>>>>> 9e0e8eadbc618168f2fec4a59ccc637a435bdd6a
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
