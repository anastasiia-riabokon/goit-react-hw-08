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

Modal.setAppElement("#root");

const EditContactModal = ({isOpen, onClose}) => {
  const currentContact = useSelector(selectCurrentContact);
  const dispatch = useDispatch();

  const handleSubmitModal = (values) => {
    const updContact = {id: currentContact.id, ...values};
    dispatch(editContact(updContact));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      {currentContact && (
        <>
          <div className="modal-box">
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
          </div>
        </>
      )}
    </Modal>
  );
};

export default EditContactModal;
