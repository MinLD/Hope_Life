type layoutProps = {
  type: string;
  placeholder?: string;
};
function InputBox({ type, placeholder }: layoutProps) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border pt-2 pb-2 pl-4"
      />
    </div>
  );
}

export default InputBox;
