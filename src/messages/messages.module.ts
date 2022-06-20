import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import MessagesService from "./messages.service";
import MessagesRepository from "./messages.repository";
import {PowerModule} from "../power/power.module";

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository],
  imports: [PowerModule]
})
export class MessagesModule {}
