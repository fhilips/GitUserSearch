
import ButtonIcon from "../../../components/ButtonIcon";
import { User } from "../../../utils/types";
import "./styles.scss";
type Props = {
  user: User
}

const CardDetails = ({user}: Props) => (
  <div className="">
    <div className="card-details-container">
      <div className="card-details-content">
        <div className="user-picture-container">
          <img className="user-picture" src={user.avatar_url} alt=""/>
        </div>

        <div className="user-details-card-container">
          <div className="user-info-followers-container">
            <div className="user-info-followers">Repositórios públicos: {user.public_repos} </div>
            <div className="user-info-followers">Seguidores: {user.followers}</div>
            <div className="user-info-followers">Seguindo: {user.following}</div>
          </div>

          <div className="user-details-card-content">
            <h3 className="text-details-title">Informações</h3>
            <div className="text-details">Empresa: {user.company}</div>
            <div className="text-details">Website/Blog: {user.blog} </div>
            <div className="text-details">Localidade: {user.location}</div>
            <div className="text-details">Membro desde: {user.created_at}</div>
          </div>
        </div>
      </div>
        <a className="btn-git-perfil" href={`https://github.com/${user.login}`}>
           <ButtonIcon text="Ver Perfil" />
        </a>      
    </div>
  </div>
);

export default CardDetails;
