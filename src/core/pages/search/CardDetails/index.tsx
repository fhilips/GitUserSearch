
import ButtonIcon from "../../../components/ButtonIcon";
import { UserGithub } from "../../../types/types";
import "./styles.scss";
type Props = {
  userGithub: UserGithub
}

const CardDetails = ({userGithub}: Props) => (
  <div className="">
    <div className="card-details-container">
      <div className="card-details-content">
        <div className="user-picture-container">
          <img className="user-picture" src={userGithub.avatar_url} alt=""/>
        </div>

        <div className="user-details-card-container">
          <div className="user-info-followers-container">
            <div className="user-info-followers">Repositórios públicos: {userGithub.public_repos} </div>
            <div className="user-info-followers">Seguidores: {userGithub.followers}</div>
            <div className="user-info-followers">Seguindo: {userGithub.following}</div>
          </div>

          <div className="user-details-card-content">
            <h3 className="text-details-title">Informações</h3>
            <div className="text-details">Empresa: {userGithub.company}</div>
            <div className="text-details">Website/Blog: {userGithub.blog} </div>
            <div className="text-details">Localidade: {userGithub.location}</div>
            <div className="text-details">Membro desde: {userGithub.created_at}</div>
          </div>
        </div>
      </div>
        <a className="btn-git-perfil" href={`https://github.com/${userGithub.login}`}>
           <ButtonIcon text="Ver Perfil" />
        </a>      
    </div>
  </div>
);

export default CardDetails;
