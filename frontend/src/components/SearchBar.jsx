import {Link} from "react-router-dom";
export default function SearchBar(){
    return (
      <div className ="SerchBar">
        <form>
          <label>What would you like to buy?</label>
          <br/>
          <input type="text" id="search-text"/>
          <Link to={"/"}>
                <button className="search-submit-button">
                    Search
                </button >
         </Link>
        </form>

  
      </div>
    )
  }