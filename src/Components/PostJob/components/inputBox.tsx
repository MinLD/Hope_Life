import { FaUser } from "react-icons/fa";
type layoutProps = {
  handleChange: any;
  formData: any;
  type: string;
  placeholder?: string;
  name?: string;
};
function InputBoxPost({
  handleChange,
  type,
  placeholder,
  formData,
  name,
}: layoutProps) {
  return (
    <div className="flex items-center rounded-lg border px-3 py-2">
      <FaUser className="text-gray-500" />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full p-2 outline-none"
        value={name ? formData[name] || "" : ""}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default InputBoxPost;
