import Modal from "react-modal";
import {useDispatch, useSelector} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {selectCurrentContact} from "../../redux/contacts/selectors";
import {editContact} from "../../redux/contacts/operations";
import {FeedbackSchema} from "../../helpers/FeedbackSchema";
import ReactInputMask from "react-input-mask";
import {setCurrentContact} from "../../redux/contacts/slice";
import {GrClose} from "react-icons/gr";
import {customStyles} from "../../helpers/customStyleForModal";
import {motion, AnimatePresence} from "framer-motion";
import {modalVariants} from "../../helpers/paramsAnimationModal";

Modal.setAppElement("#root");

const EditContactModal = ({isOpen, onClose}) => {
  const currentContact = useSelector(selectCurrentContact);
  const dispatch = useDispatch();

  const handleSubmitModal = (values) => {
    const updContact = {id: currentContact.id, ...values};
    console.log(updContact.id);
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
                  nameContact: currentContact.name,
                  numberContact: currentContact.number,
                }}
                onSubmit={handleSubmitModal}
                validationSchema={FeedbackSchema}
              >
                {({setFieldValue}) => {
                  return (
                    <Form className="flex flex-col gap-3">
                      <div>
                        <label htmlFor="name" className="px-4 text-xs">
                          Name
                        </label>
                        <Field
                          id="name"
                          name="nameContact"
                          type="text"
                          className="input input-bordered"
                        />
                        <ErrorMessage name="name" component="div" />
                      </div>
                      <div>
                        <label htmlFor="number" className="px-4 text-xs">
                          Number
                        </label>
                        <Field name="numberContact">
                          {({field}) => (
                            <ReactInputMask
                              {...field}
                              mask="999-99-99"
                              maskChar="_"
                              placeholder="___-__-__"
                              onChange={(e) => setFieldValue("number", e.target.value)}
                              className="input input-bordered"
                            />
                          )}
                        </Field>
                        <ErrorMessage name="number" component="div" />
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
