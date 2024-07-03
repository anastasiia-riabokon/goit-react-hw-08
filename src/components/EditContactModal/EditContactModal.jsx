import Modal from "react-modal";
import {useDispatch, useSelector} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {selectCurrentContact} from "../../redux/contacts/selectors";
import {editContact} from "../../redux/contacts/operations";
import {FeedbackSchema} from "../../helpers/FeedbackSchema";
import ReactInputMask from "react-input-mask";
import {setCurrentContact} from "../../redux/contacts/slice";
import {GrClose} from "react-icons/gr";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    padding: "24px",
    paddingTop: "32px",
    borderRadius: "12px",
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.3)",
    maxWidth: "350px",
  },
  overlay: {
    backgroundColor: "rgba(40, 40, 40, 0.75)",
  },
};

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
                <Form className="flex flex-col gap-2">
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
        </>
      )}
    </Modal>
  );
};

export default EditContactModal;
