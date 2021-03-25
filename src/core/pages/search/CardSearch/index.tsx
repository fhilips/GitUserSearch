
import ButtonIcon from '../../../components/ButtonIcon';
import './styles.scss';

const CardSearch = () => (
    <div className="card-search-container">
        <div className="card-search-content">
            <h1>Encontre um perfil no Github</h1>

            <input className="input-search-name" type="text" value="" placeholder="Digite o nome do usuário"/>
            
            <div className="btn-search">
                <ButtonIcon text="ENCONTRAR" />
            </div>
            
        </div>     
    </div>
    
)

export default CardSearch;