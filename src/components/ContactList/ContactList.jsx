import Contact from "../Contact/Contact";

export const ContactList = ({users, openModal, questionDelete}) => {
  return (
    <>
      <ul className="flex flex-col gap-2 max-h-[300px] max-[767px]:max-h-[175px] overflow-auto px-3">
        {users.map((user) => (
          <li key={user.id} className="flex items-center justify-between border-b py-1">
            <Contact
              values={user}
              openModal={() => openModal(user)}
              questionDelete={questionDelete}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactList;
