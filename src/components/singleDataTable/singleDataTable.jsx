import "./datatable.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const SingleDatatable = () => {
  const { currentUser } = useContext(AuthContext)
  const data = currentUser;

  return (
    <div className="datatable">
      <div className="datatableTitle" style={{ borderBottom: "1px solid lightgray" }}>
        My Profile
      </div>

      <div style={{ paddingTop: "30px" }}>
        <div className="datatableTitle">
          You're Logged in with below email and Id
        </div>
        <div className="datatableTitle">ID
          <span>{data.uid}</span>
        </div>
        <div className="datatableTitle">Email
          <span>{data.email}</span>
        </div>
        
      </div>
    </div>
  );
};

export default SingleDatatable;
