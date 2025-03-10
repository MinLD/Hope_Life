
import {  useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type Props = {
  SetIsFileImages: (images: string[]) => void;
  setShowAddImage: (value: boolean) => void;
};

function AddImages({ SetIsFileImages, setShowAddImage = () => {} }: Props) {
  const [files, setFiles] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const selectedFiles = Array.from(event.target.files);
    const fileURLs = selectedFiles.map((file) => URL.createObjectURL(file));

    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles, ...fileURLs];
      SetIsFileImages(updatedFiles); // Cập nhật ngay lập tức
      return updatedFiles;
    });
  };
  const handleDeleteImage = (index: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== index));
  };

  return (
    <div className="w-full">
      <div className="relative rounded-2xl border p-2 text-[#333] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-2">
          <h2 className="text-lg font-semibold">Add photos/videos</h2>
        </div>

        {/* Upload Box */}
        <label className="flex h-auto max-h-[300px] min-h-30 w-full flex-col items-center justify-center overflow-y-auto rounded-lg border-2 border-dashed border-gray-500">
          {files.length === 0 && (
            <>
              <FaPlus className="mb-2 text-3xl text-[#333]" />
            </>
          )}
          {/* Preview Section */}
          <div className="max-h-auto grid grid-cols-2 gap-2 overflow-y-auto">
            {files.map((file, index) => (
              <div key={index} className="relative">
                <img
                  src={file}
                  alt="Preview"
                  className="h-full w-full rounded object-cover"
                />

                <button className="absolute top-0 right-0 cursor-pointer text-2xl text-[34px] font-bold text-[#333] ">
                  <IoClose onClick={() => handleDeleteImage(file)} />
                </button>
              </div>
            ))}

            {files.length > 0 && (
              <label className="z-9999 flex cursor-pointer flex-col items-center justify-center border-gray-500 shadow-2xl">
                <FaPlus className="mb-2 text-3xl text-[#333]" />
                <span className="text-sm text-gray-400">Add photos/videos</span>
                <span className="text-xs text-gray-400">or drag and drop</span>

                <input
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            )}
          </div>
          {files.length === 0 && (
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              className="hidden"
              onChange={handleFileChange}
            />
          )}
        </label>

        <button
          className="absolute top-0 right-0 text-2xl text-gray-400"
          onClick={() => setShowAddImage(false)}
        >
          <IoClose className="cusor-pointer" />
        </button>
      </div>
    </div>
  );
}

export default AddImages;
