import {FaUser} from "react-icons/fa";
import {BsFillTelephoneFill} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {deleteContact} from "../../redux/contacts/operations";

export const Contact = ({values, openModal}) => {
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
      <div className="flex flex-col gap-1">
        <button onClick={openModal} className="btn btn-outline btn-sm">
          Edit
        </button>
        <button onClick={() => dispatch(deleteContact(id))} className="btn btn-outline btn-sm">
          Delete
        </button>
      </div>
    </>
  );
};
export default Contact;
