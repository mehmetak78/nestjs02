import MessagesRepository from "./messages.repository";
import {Injectable} from "@nestjs/common";

@Injectable()
export default class MessagesService {

    constructor(private messagesRepo: MessagesRepository) {}

    async findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    async findAll() {
        return this.messagesRepo.findAll();
    }

    async create(content: string) {
        return this.messagesRepo.create(content);
    }

}
