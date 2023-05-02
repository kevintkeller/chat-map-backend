import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/models/user.entity';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { PostEntity } from './post/models/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      //url: process.env.DATABASE_URL,
      host: 'wayne.cs.uwec.edu',
      port: 3306,
      username: 'CS355G3',
      password: 'SGL5TPQV',
      database: 'cs355g3',
      entities: [UserEntity, PostEntity],
      synchronize: true,
  }),
    ConfigModule.forRoot({isGlobal: true}),
    UserModule,
    AuthModule,
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
