import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BlocklistModule } from './blocklist/blocklist.module';
import { ChatModule } from './chat/chat.module';
import { PrismaModule } from './prisma/prisma.module';
import { FriendshipModule } from './friendship/friendship.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    FriendshipModule,
    BlocklistModule,
    ChatModule,
    PrismaModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
