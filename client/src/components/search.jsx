import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { callApi, detailGetName } from "../redux/action";
import styles from "../styleComponents/navBar.module.css";
import { Whatever } from "./validate";

export default function Search() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handlerChange = (e) => {
    setName(e.target.value);
  };

  const handlerClick = () => {
    

    if(Whatever(name)){
      dispatch(detailGetName(name))
      .then(data => {
        if(!data.payload.length){
          alert(`no country name found containig your search`);
          dispatch(callApi())
        }
      })
    
    }else {

      alert(
          "the country you are looking for does not exit, please try searching for another");
    }
    setName("");
    
  };
 


  return (
    <div className={styles.search}>
      <h2>Search</h2>
        <div className={styles.nav}>
          
          <input type="text" value={name} onChange={(e) => handlerChange(e)} />
         
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fontSize: "25px" , cursor: 'pointer'}}
              onClick={handlerClick}
              
            >
              <path
                fillRule="evenodd"
                d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
              ></path>
            </svg>
          
        </div>
      
      
    </div>
  );
}
