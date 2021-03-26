
import { Link } from 'react-router-dom';
import ButtonIcon from '../../components/ButtonIcon';
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <div className="home-content">
            <h1 className="title-text">
                Encontre um perfil no Github!
            </h1>
            <h4 className="text-subtitle">
                 Busca pelo nome do usuário, integrando com a API oficial do Github.
                <br />
            </h4>      
            <Link to="/search">
                <ButtonIcon text="COMEÇAR"/>
            </Link>             
        </div>
        
    </div>
)

export default Home;