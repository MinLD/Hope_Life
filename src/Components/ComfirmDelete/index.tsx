import React, { useEffect } from "react";

type ConfirmDeleteProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);
  return (
    <div>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="fixed inset-0 flex items-center justify-center ">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
          <h2 className="text-lg font-semibold">Xác nhận xóa</h2>
          <p className="text-gray-600 mt-2">
            Bạn có chắc chắn muốn xóa sản phẩm này không?
          </p>
          <div className="flex justify-end mt-4 gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            >
              Hủy
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
