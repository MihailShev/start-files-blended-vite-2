import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';

const EditForm = ({ updateTodo, cancelUpdate, defaultValue }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const value = e.target.elements.text.value.trim();
    if (!value) return;

    updateTodo({ ...defaultValue, text: value });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button onClick={cancelUpdate} className={style.editButton} type="button">
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={defaultValue.text}
        autoFocus
      />
    </form>
  );
};
export default EditForm;
