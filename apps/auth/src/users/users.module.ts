import { Module } from '@nestjs/common';

import { DatabaseModule } from '@app/common';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { LoggerModule } from '@app/common';
import { UserDocument, UserSchema } from './models/user.schema';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { schema: UserSchema, name: UserDocument.name },
    ]),
    LoggerModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
