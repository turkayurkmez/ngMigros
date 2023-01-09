import { Component } from '@angular/core';
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

  todoItems: TodoItem[] = [
    new TodoItem("Çiçekleri Sula",false),
    new TodoItem(".NET Core ile Web API Geliştir",true),
    new TodoItem("Angular ile frontend planını yap",false)
  ];
  

  clicked():void{
   alert('tıklandı')
   
  }
}
