import Contact from "../Contact/Contact";

export const ContactList = ({users}) => {
  return (
    <ul className="flex flex-col gap-2 max-h-[350px] overflow-auto px-3">
      {users.map((user) => (
        <li key={user.id} className="flex items-center justify-between border-b py-1">
          <Contact values={user} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
