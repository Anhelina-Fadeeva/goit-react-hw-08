import { useDispatch, useSelector } from 'react-redux'
import css from './SearchBox.module.css'
import { useId } from 'react';
import { selectNameFilter } from '../../redux/filters/selectors';
import { setFilter } from '../../redux/filters/slice';

export default function SearchBox() {
    const filter = useSelector(selectNameFilter);
    const dispatch = useDispatch();
    const inputId = useId();
    const handleChange = (e) => {
        dispatch(setFilter(e.target.value));
    };

    return <div className={css.container}>
        <label  htmlFor={inputId}>Find contacts by name</label>
        <input className={css.input} type="text" value={filter} onChange={handleChange} id={inputId}></input>
    </div>
}