type Props = {
  children: React.ReactNode;
};
function MyLayout({ children }: Props) {
  return (
    <div className="flex justify-center">
      <div className="w-[400px] sm:w-[550px] md:w-[650px] lg:w-[800px] xl:w-[1000px]">
        {children}
      </div>
    </div>
  );
}

export default MyLayout;
