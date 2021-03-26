import { useState } from "react";
import ButtonIcon from "../../../components/ButtonIcon";

import "./styles.scss";

type Props = {
  onChange: (name: string) => void;
};

const CardSearch = ({ onChange }: Props) => {
  const [username, setUsername] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setUsername(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    onChange(username);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="card-search-container">
        <div className="card-search-content">
          <h1>Encontre um perfil no Github</h1>
          <input
            className="input-search-name"
            name="username"
            onChange={handleOnChange}
            value={username}
            type="text"
            placeholder="Digite o nome do usuário"
            required
          />

          <div className="btn-search">
            <ButtonIcon text="ENCONTRAR" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CardSearch;
