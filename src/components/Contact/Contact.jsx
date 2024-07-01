import {FaUser} from "react-icons/fa";
import {BsFillTelephoneFill} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {deleteContact} from "../../redux/contactsOps";

export const Contact = ({values}) => {
  const {id, name, number} = values;
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div className="flex gap-2 items-center">
          <FaUser />
          <p>{name}</p>
        </div>

        <div className="flex gap-2 items-center">
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>
      <button onClick={() => dispatch(deleteContact(id))} className="btn btn-outline">
        Delete
      </button>
    </>
  );
};
export default Contact;
