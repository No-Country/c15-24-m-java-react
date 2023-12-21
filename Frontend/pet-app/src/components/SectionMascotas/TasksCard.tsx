import {Task} from '../interface/interface'

 interface TaskCardProps {
    task: Task;
    toggleTaskCompletion: (id: string) => void;
   }


export const TasksCard = ({ task, toggleTaskCompletion }: TaskCardProps) => (
 <div className={`p-2 ${task.completed ? "line-through" : ""}`}>
   <input
     type="checkbox"
     checked={task.completed}
     onChange={() => toggleTaskCompletion(task.id)}
   />
   <span> {task.notas} </span>
 </div>
);