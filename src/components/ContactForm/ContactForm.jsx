import {ErrorMessage, Field, Form, Formik} from "formik";

import ReactInputMask from "react-input-mask";
import {useId} from "react";
import {useDispatch} from "react-redux";
import {addContact} from "../../redux/contacts/operations";
import {FeedbackSchema} from "../../helpers/FeedbackSchema";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const idFieldName = useId();
  const idFieldNumber = useId();

  const initialValues = {
    nameContact: "",
    numberContact: "",
  };

  const handleSubmit = (values, actions) => {
    const action = addContact({
      id: crypto.randomUUID(),
      name: values.nameContact,
      number: values.numberContact,
    });

    dispatch(action);

    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      {({setFieldValue}) => (
        <Form className="flex justify-center gap-2 mb-8">
          <label
            htmlFor={idFieldName}
            className="input input-bordered flex items-center gap-2 max-w-[25%]"
          >
            <span>Name</span>
            <Field id={idFieldName} type="text" name="nameContact" placeholder="John" />
            <ErrorMessage
              name="nameContact"
              component="div"
              className="absolute transform translate-y-[34px] text-[14px] italic text-red-500"
            />
          </label>

          <label
            htmlFor={idFieldNumber}
            className="input input-bordered flex items-center gap-2 max-w-[30%]"
          >
            <span>Number</span>
            <Field id={idFieldNumber} type="text" name="numberContact" placeholder="123-45-78">
              {({field}) => (
                <ReactInputMask
                  {...field}
                  mask="999-99-99"
                  maskChar="_"
                  placeholder="___-__-__"
                  onChange={(e) => setFieldValue("numberContact", e.target.value)}
                />
              )}
            </Field>
            <ErrorMessage
              name="numberContact"
              component="div"
              className="absolute transform translate-y-[34px] text-[14px] italic text-red-500"
            />
          </label>

          <button type="submit" className="btn btn-outline">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default ContactForm;
