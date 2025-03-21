type Props = {
  email: string;
  phone: string;
  storeDescription: string;
  storeName: string;
};
const CartItem = ({ email, phone, storeDescription, storeName }: Props) => {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-lg transition-all hover:shadow-2xl">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
        {storeName}
      </div>
      <h2 className="mb-2 text-2xl font-bold text-gray-900">{storeName}</h2>
      <p className="mb-2 text-sm text-gray-600">
        📧 <span className="font-medium">{email}</span>
      </p>
      <p className="mb-4 leading-relaxed text-gray-700">
        📞 <span className="font-medium">{phone}</span>
      </p>
      <p className="mb-4 leading-relaxed text-gray-700">{storeDescription}</p>
    </div>
  );
};
export default CartItem;
