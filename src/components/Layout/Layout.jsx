import { Toaster } from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      <main className={css.mainContent}>{children}</main>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
