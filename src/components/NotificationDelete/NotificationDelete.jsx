import Modal from "react-modal";
import {customStyles} from "../../helpers/customStyleForModal";
import {deleteContact} from "../../redux/contacts/operations";
import {useDispatch} from "react-redux";

const NotificationDelete = ({isOpenWindow, onClose, id}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(id);
    dispatch(deleteContact(id));
    onClose();
  };
  return (
    <Modal isOpen={isOpenWindow} onRequestClose={onClose} style={customStyles}>
      <div className="modal-box">
        <p className="text-xl text-center mb-4">Do you want delete this contact?</p>
        <div className="flex justify-center gap-4">
          <button className="btn btn-outline btn-sm" onClick={handleDelete}>
            Yes
          </button>
          <button className="btn btn-outline btn-sm" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default NotificationDelete;
