import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  async create(dto: CreateTodoDto) {
    const todo = this.todoRepository.create(dto);
    return await this.todoRepository.save(todo);
  }

  async findAll() {
    return await this.todoRepository.find();
  }

  async findOne(id: number) {
    return await this.todoRepository.find({ where: { id } });
  }

  async update(id: number, dto: CreateTodoDto) {
    const todo = await this.todoRepository.findOne({ where: { id } });
    const updatedTodo = { ...todo, ...dto };
    return await this.todoRepository.save(updatedTodo);
  }

  async remove(id: number) {
    const todo = await this.todoRepository.findOne({ where: { id } });
    return await this.todoRepository.delete(todo);
  }
}
