import CardDetails from "./CardDetails";
import CardSearch from "./CardSearch";
import "./styles.scss";

const Search = () => (
  <>    
      <div className="card-search-container">
        <CardSearch />
      </div>      
        <CardDetails />
         
  </>
);

export default Search;
