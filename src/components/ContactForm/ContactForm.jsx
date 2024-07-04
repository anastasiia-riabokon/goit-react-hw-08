import {ErrorMessage, Field, Form, Formik} from "formik";
import ReactInputMask from "react-input-mask";
import {useId} from "react";
import {useDispatch} from "react-redux";
import {addContact} from "../../redux/contacts/operations";
import {FeedbackSchema} from "../../helpers/FeedbackSchema";
import {nanoid} from "@reduxjs/toolkit";
import NumberField from "../Fields/NumberField";
import NameField from "../Fields/NameField";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const idFieldName = useId();
  const idFieldNumber = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    const action = addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });

    dispatch(action);

    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      {({setFieldValue}) => (
        <Form className="flex justify-center gap-2 mb-8 max-[767px]:flex-wrap max-[767px]:gap-8">
          <label
            htmlFor={idFieldName}
            className="field flex items-center gap-2 min-[768px]:max-w-[25%] max-[767px]:w-full"
          >
            <span>Name</span>
            <NameField id={idFieldName} classNameError="translate-y-[34px]" />
          </label>

          <label
            htmlFor={idFieldNumber}
            className="field flex items-center gap-2 min-[768px]:max-w-[30%] max-[767px]:w-full"
          >
            <span>Number</span>
            <NumberField
              id={idFieldNumber}
              setFieldValue={setFieldValue}
              classNameError="translate-y-[34px]"
            />
          </label>

          <button type="submit" className="btn btn-outline max-[767px]:w-full">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
