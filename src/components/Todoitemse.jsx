import TodoItem from "./todoitem1"
import styles from "./Todoitems.module.css";
const TodoItems=({todoItems})=>{ 
  return(
    <>
    <div className={styles.itemscontainer}>
    
    {todoItems.map((item) =>(
      <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
    ))}
    

    </div>
    </>
  );
}
export default TodoItems;