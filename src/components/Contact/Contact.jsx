import {FaUser} from "react-icons/fa";
import {BsFillTelephoneFill} from "react-icons/bs";

export const Contact = ({values, openModal, questionDelete}) => {
  const {id, name, number} = values;

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
        <button onClick={() => questionDelete(id)} className="btn btn-outline btn-sm">
          Delete
        </button>
      </div>
    </>
  );
};
export default Contact;
