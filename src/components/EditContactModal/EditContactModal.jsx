import Modal from "react-modal";
import {useDispatch, useSelector} from "react-redux";
import {Form, Formik} from "formik";
import {selectCurrentContact} from "../../redux/contacts/selectors";
import {editContact} from "../../redux/contacts/operations";
import {FeedbackSchema} from "../../helpers/FeedbackSchema";
import {GrClose} from "react-icons/gr";
import {customStyles} from "../../helpers/customStyleForModal";
import {motion, AnimatePresence} from "framer-motion";
import {modalVariants} from "../../helpers/paramsAnimationModal";
import NameField from "../Fields/NameField";
import NumberField from "../Fields/NumberField";
import {useId} from "react";

Modal.setAppElement("#root");

const EditContactModal = ({isOpen, onClose}) => {
  const currentContact = useSelector(selectCurrentContact);
  const dispatch = useDispatch();
  const idFieldName = useId();
  const idFieldNumber = useId();

  const handleSubmitModal = (values) => {
    const updContact = {id: currentContact.id, ...values};
    dispatch(editContact(updContact));
    onClose();
  };

  return (
    <AnimatePresence>
      <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
        {currentContact && (
          <>
            <motion.div
              className="modal-box"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button className="absolute right-4 top-4" onClick={onClose}>
                <GrClose />
              </button>
              <h1 className="text-center mb-4 text-lg font-bold">Edit Contact</h1>
              <Formik
                initialValues={{
                  name: currentContact.name,
                  number: currentContact.number,
                }}
                onSubmit={handleSubmitModal}
                validationSchema={FeedbackSchema}
              >
                {({setFieldValue}) => {
                  return (
                    <Form className="flex flex-col gap-6">
                      <div>
                        <label htmlFor={idFieldName} className="px-4 text-xs">
                          Name
                        </label>
                        <NameField
                          id={idFieldName}
                          classNameInput="field"
                          classNameError="px-[16px]"
                        />
                      </div>
                      <div>
                        <label htmlFor={idFieldNumber} className="px-4 text-xs">
                          Number
                        </label>
                        <NumberField
                          id={idFieldNumber}
                          setFieldValue={setFieldValue}
                          classNameInput="field"
                          classNameError="px-[16px]"
                        />
                      </div>
                      <button type="submit" className="btn btn-outline">
                        Save
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </motion.div>
          </>
        )}
      </Modal>
    </AnimatePresence>
  );
};

export default EditContactModal;
