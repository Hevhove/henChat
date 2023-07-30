import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './serializer/session.serializer';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [JwtModule.register({}), PassportModule, ConfigModule],
	controllers: [AuthController],
	providers: [AuthService, JwtStrategy, SessionSerializer],
})
export class AuthModule {}
