import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <Grid>
      {todos.map((todo, indx) => (
        <GridItem key={todo.id}>
          <TodoListItem
            index={indx}
            onDelete={onDelete}
            onEdit={onEdit}
            id={todo.id}
            text={todo.text}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
