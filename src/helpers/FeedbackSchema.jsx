import * as Yup from "yup";

export const FeedbackSchema = Yup.object().shape({
  nameContact: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .matches(/^[A-Za-z]+$/, "Name must consist only of letters!")
    .required("Required"),

  numberContact: Yup.string().required("Required"),
});
