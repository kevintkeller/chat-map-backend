import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from './login/login.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'wayne.cs.uwec.edu',
    port: 3306,
    username: 'CS355G3',
    password: 'SGL5TPQV',
    database: '',
    entities: [],
    synchronize: true,
  }), LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
