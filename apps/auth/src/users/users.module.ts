import { Module } from '@nestjs/common';

import { DatabaseModule } from '@app/common';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { UserDocument, UserSchema } from './models/user.schema';
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
