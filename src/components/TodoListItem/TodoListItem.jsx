import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

import style from './TodoListItem.module.css';
import Text from '../Text/Text';

const TodoListItem = ({ index, text, onDelete, id, onEdit }) => {
  const handleclick = () => {
    onEdit(id);
  };

  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{index + 1}
      </Text>

      <Text>{text}</Text>

      <button
        onClick={() => onDelete(id)}
        className={style.deleteButton}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>

      <button onClick={handleclick} className={style.editButton} type="button">
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
