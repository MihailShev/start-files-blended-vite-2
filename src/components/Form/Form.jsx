import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { nanoid } from 'nanoid';

const Form = ({ onAdd }) => {
  const handleCghange = e => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();

    if (!value) return;

    onAdd({ id: nanoid(), text: value });
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleCghange} className={style.form}>
        <button className={style.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <input
          className={style.input}
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
        />
      </form>
    </>
  );
};

export default Form;
