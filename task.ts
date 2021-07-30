export class Task {
id: number;
description: string;
completed: boolean
};
getAll () {
@component ({
selector: 'app-task-list',
templaterUrl: './task-list.component.html',
styleUrls: ['./task-list.component.css']
})
export class TaskLiatComponent implements OnInits {
 task: Task[] = [];
  construtctor (private taskService: TaskService) {}
  
  ngOnInit () {
  this.tasks = this.taskService.getAll();
  }
  
 <h2>Tarefas</h2>
 <hr />
 
 <button type="button" class="btn btn-primary mb-2" {routerLink}="['/new']">
 <button>
 
 <section>
   ul class="list-group">
      <li class="list-group-item">
      
      </li>
  </ul>
</section>
