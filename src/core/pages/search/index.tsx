import { useEffect, useState } from "react";
import { makeRequest } from "../../utils/request";
import { UserGithub } from "../../types/types";
import CardDetails from "./CardDetails";
import CardSearch from "./CardSearch";
import UserDetailsLoader from "./Loaders/UserDetailsLoader";
import "./styles.scss";

const Search = () => {
  const [username, setUsername] = useState('');
  const [userResponse, setUserResponse] = useState<UserGithub>({
    login: '',
    public_repos: 0,
    followers: 0,
    following: 0,
    company: '',
    blog: '',
    location: '',
    created_at: '',
    avatar_url: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [userIsEmpty, setUserIsEmpty] = useState(true);

  useEffect(() => {
    
    if (username === "" ) {
      setUserIsEmpty(true);
    } else {
      setUserIsEmpty(false);
      setIsLoading(true);
      if (!userIsEmpty) {
        makeRequest({ url: `/${username}` })
          .then((response) => setUserResponse(response.data))
          .catch(() => {
            
            alert("Usuário não encontrado!")
          })
          .finally(() => {
            setIsLoading(false);
          });
    }
    }
    
  }, [username, userIsEmpty]);

  return (
    <>
      <div className="card-search-container">
        <CardSearch onChange={(username) => setUsername(username)} />
      </div>      
      {console.log(userResponse)}
      {userIsEmpty ? (
        <div></div>
      ) : isLoading ? (
        <div className="loader-details-container">
          <UserDetailsLoader />
        </div>
        
      ) : (
        <CardDetails userGithub={userResponse} />
      )}
    </>
  );
};

export default Search;
