import { Link } from "react-router-dom";
import ButtonIcon from "../../../components/ButtonIcon";
import "./styles.scss";

const CardDetails = () => (
  <div className="">
    <div className="card-details-container">
      <div className="card-details-content">
        <div className="user-picture-container"></div>

        <div className="user-details-card-container">
          <div className="user-info-followers-container">
            <div className="user-info-followers">Repositórios públicos: </div>
            <div className="user-info-followers">Seguidores: </div>
            <div className="user-info-followers">Seguindo: </div>
          </div>

          <div className="user-details-card-content">
            <h3 className="text-details-title">Informações</h3>
            <div className="text-details">Empresa: </div>
            <div className="text-details">Website/Blog: </div>
            <div className="text-details">Localidade: </div>
            <div className="text-details">Membro desde: </div>
          </div>
        </div>
      </div>
      <Link to="/link" className="btn-git-perfil">
        <ButtonIcon text="Ver Perfil" />
      </Link>
    </div>
  </div>
);

export default CardDetails;
