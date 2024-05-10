import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

import Header from './components/header'

export default function vegprice() {
  return (
   <>
    <h1>vegprice.jsx</h1>
    <FontAwesomeIcon icon={faBuildingColumns} className="fa-10x" />
    <FontAwesomeIcon icon={faCheck} style={{ color: "red" }}/>
   </>
  );
}
