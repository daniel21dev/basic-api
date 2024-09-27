import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/shared/prisma/prisma.module';
import { UsersModule } from './modules/core/users/users.module';
import { AuthModule } from './modules/core/auth/auth.module';
import { ItemsModule } from './modules/core/items/items.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
