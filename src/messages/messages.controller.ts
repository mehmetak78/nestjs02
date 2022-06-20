import {Body, Controller, Get, NotFoundException, Param, Post} from '@nestjs/common';
import CreateMessageDto from "./dtos/create-message.dto";
import MessagesService from "./messages.service";
import PowerService from "../power/power.service";

@Controller('messages')
export class MessagesController {

    constructor(private messagesService: MessagesService, private powerService: PowerService) {}

    @Get('')
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post('')
    createMessages(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content);
    }

    @Get('/power')
    supplyPower() {
        return this.powerService.supplyPower(20);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string ) {
        const message = await this.messagesService.findOne(id);
        if (!message) {
            throw new NotFoundException('message not found');
        }
        return message;
    }




}
