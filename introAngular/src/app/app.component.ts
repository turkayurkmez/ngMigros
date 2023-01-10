import { Component } from '@angular/core';
import { todoItems } from './models/todoItem.mock';
import { TodoItem } from './models/todoItem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Öğreniyorum';
  creator:string = 'Türkay Ürkmez';
  createdDate:string = 'Ocak 2023';

  todoItems: TodoItem[] = todoItems

  isAllTaskDisplaying:boolean = true;

  getButtonText():string{
    return this.isAllTaskDisplaying ? "Yapılan işleri gizle": "Tüm görevleri göster";
  }
  
  getItemsCount():number{
    return this.todoItems.filter(x=>!x.isDone).length;
  }

  filter():void{
  //  alert('tıklandı')
    this.isAllTaskDisplaying = !this.isAllTaskDisplaying;
    if(!this.isAllTaskDisplaying){
      this.todoItems = this.todoItems.filter(x=>!x.isDone);
    }
    else{
      this.todoItems = todoItems;
    }
  }

  addNewTask(taskName:string):void{
    let todoItem = new TodoItem(taskName,false);
    this.todoItems.push(todoItem);
  }
}
