import DocumentTitle from '../DocumentTitle'
import css from './HomePage.module.css'
export default function HomePage() {
    return (
    <>
        <DocumentTitle>Home</DocumentTitle>
        <div className={css.container}>
                <h1 className={css.title}>Contact Book</h1> 
                <p>Keep all your contacts in one place. Easily add and remove contacts with our user-friendly interface.</p>
        </div>
    </>
    )
}