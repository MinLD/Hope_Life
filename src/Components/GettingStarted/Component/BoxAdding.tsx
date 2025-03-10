import { useState } from "react";
type props = {
  src: string;
  label: string;
  id?: number;
  title: string;
};

function BoxAdding({ src, label,  title }: props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="overflow-hidden rounded-lg border-b">
        <button
          className="flex w-full items-center justify-between p-4 text-left "
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>
        {isOpen && (
          <div
            className={`space-y-2 p-4 text-gray-700 transition-all duration-500 ${isOpen ? "opacity-[100%]" : "opacity-[0%]"}`}
          >
            <img src={src} alt="" />
            <p>{label}</p>

            <div className="mt-4 flex flex-col gap-2 text-green-600 md:flex-row md:justify-between"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BoxAdding;
