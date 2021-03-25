
import { Link } from 'react-router-dom';
import './styles.scss';

const PageHeader = () => (
    <header className="header-container">
        <Link to="/" className="header-title">
            <h1 >GitUserSearch</h1>
        </Link>       
    </header>
)

export default PageHeader;