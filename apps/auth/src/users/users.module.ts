import { Module } from '@nestjs/common';

import { DatabaseModule, UserDocument, UserSchema } from '@app/common';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { UsersRepository } from './users.repository';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { schema: UserSchema, name: UserDocument.name },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
