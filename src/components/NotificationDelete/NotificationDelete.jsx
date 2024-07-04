import Modal from "react-modal";
import {customStyles} from "../../helpers/customStyleForModal";
import {deleteContact} from "../../redux/contacts/operations";
import {useDispatch} from "react-redux";
import {AnimatePresence, motion} from "framer-motion";
import {modalVariants} from "../../helpers/paramsAnimationModal";

const NotificationDelete = ({isOpenWindow, onClose, id}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    onClose();
  };
  return (
    <AnimatePresence>
      <Modal isOpen={isOpenWindow} onRequestClose={onClose} style={customStyles}>
        <motion.div
          className="modal-box"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <p className="text-xl text-center mb-4">Do you want delete this contact?</p>
          <div className="flex justify-center gap-4">
            <button className="btn btn-outline btn-sm" onClick={handleDelete}>
              Yes
            </button>
            <button className="btn btn-outline btn-sm" onClick={onClose}>
              No
            </button>
          </div>
        </motion.div>
      </Modal>
    </AnimatePresence>
  );
};
export default NotificationDelete;
