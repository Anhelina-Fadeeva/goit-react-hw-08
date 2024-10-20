import { Toaster } from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';
import css from './Loyout.module.css'

export default function Layout ({children}) {
    return (
        <div className={css.div}>
            <AppBar />{children}
            <Toaster position="top-right" reverseOrder={false} />
        </div>
            
    )
}