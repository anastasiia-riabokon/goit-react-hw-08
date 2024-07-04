import {ErrorMessage, Field} from "formik";
import ReactInputMask from "react-input-mask";

const NumberField = ({id, setFieldValue, classNameInput, classNameError}) => {
  return (
    <>
      <Field name="number" id={id}>
        {({field}) => (
          <ReactInputMask
            {...field}
            mask="999-99-99"
            maskChar="_"
            placeholder="___-__-__"
            onChange={(e) => setFieldValue("number", e.target.value)}
            className={classNameInput}
          />
        )}
      </Field>
      <ErrorMessage
        name="number"
        component="div"
        className={`absolute transform ${classNameError} text-[14px] italic text-red-500`}
      />
    </>
  );
};
export default NumberField;
