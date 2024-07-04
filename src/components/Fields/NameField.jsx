import {ErrorMessage, Field} from "formik";

const NameField = ({id, classNameInput, classNameError}) => {
  return (
    <>
      <Field id={id} type="text" name="name" placeholder="John" className={classNameInput} />
      <ErrorMessage
        name="name"
        component="div"
        className={`absolute transform ${classNameError} text-[14px] italic text-red-500`}
      />
    </>
  );
};
export default NameField;
