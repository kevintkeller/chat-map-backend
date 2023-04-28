import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from './login/login.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      //url: process.env.DATABASE_URL,
      host: 'wayne.cs.uwec.edu',
      port: 3306,
      username: 'CS355G3',
      password: 'SGL5TPQV',
      database: '',
      entities: [],
      synchronize: true,
  }),
    LoginModule,
    ConfigModule.forRoot({isGlobal: true})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
