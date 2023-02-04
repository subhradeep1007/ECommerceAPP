import React,{useState} from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import { BsSearch } from "react-icons/bs";
import { CardsContext } from "../../CardsDataContext/Context";
import { useContext } from "react";

export const SearchPage = () => {
  const { cardsData, setcardsData ,loading,setloading} = useContext(CardsContext);

  const GetFilteredData = async (query) => {
     setloading(true)
    const url = `https://fakestoreapi.com/products`;
    const res = await (await fetch(url)).json();
    
   
    const filteredData = res.filter((post) => {
      if (query === "") {
        return post;
      } else if (post.title.toLowerCase().replace("-","").includes(query.replace('-',"").toLowerCase()) || post.description.toLowerCase().includes(query.toLowerCase())) {
        return post;
      }
    });
    setloading(false)
    
  setcardsData(filteredData)
  
  };
  
  const [searchText, setsearchText] = useState()

  const handleOnChange = (e) => {
    
    e.key==='Enter' && GetFilteredData(e.target.value);
  };

  return (
    <MDBCol md="6">
      <div className="input-group md-form form-sm form-1 pl-0">
        <span className="input-group-text purple lighten-3" id="basic-text1" style={{cursor:'pointer'}}  onClick={()=>{GetFilteredData(searchText)}} >
          <BsSearch style={{ height: "100%" }}/>
        </span>
        <input
          className="form-control my-0 py-1"
          type="text"
          placeholder="Search and press Enter"
          aria-label="Search"
          value={searchText}
          onChange={(e)=>{setsearchText(e.target.value)}}
          onKeyDown={handleOnChange}
        />
      </div>
    </MDBCol>
  );
};
