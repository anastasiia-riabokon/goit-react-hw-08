import * as Yup from "yup";

export const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),

  number: Yup.string().required("Required"),
});
