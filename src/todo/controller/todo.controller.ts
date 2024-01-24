import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { Todo } from '@prisma/client';


@Controller('api/v1/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService){}

  // 전체조회
  @Get()
  async fetchAllTodos(): Promise<Todo[]>{
    return this.todoService.fetchAllTodos();
  }

  // 단일조회
  @Get(':id')
  async fetchTodoItem(@Param('id') id : number): Promise<Todo | null>{
    return this.todoService.fetchTodoItem(id);
  }

  // 단일 삭제
  @Delete(':id')
  async deleteTodoItem(@Param('id') id : number): Promise<Todo | null>{
    return this.todoService.deleteTodoItem(id);
  }

  // 단일 추가
  @Post()
  async createTodoItem(@Body() data: Todo): Promise<Todo>{
    return this.todoService.createTodoItem(data);
  }

  // 단일 수정
  @Put(':id')
  async updateTodoItem(
    @Param('id') id: number, 
    @Body() data: Todo
    ): Promise<Todo>{
    return this.todoService.updateTodoItem(id, data.title, data.content, data.is_Done);
  }
}
