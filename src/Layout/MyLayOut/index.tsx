
type Props = {
  children: React.ReactNode;
};
function MyLayout({ children }: Props) {
  // const menuProvider = useContext(MenuContext);
  // if (!menuProvider) return;
  // const { isWindowSize } = menuProvider;

  return (
    <div className="flex justify-center">
      {/* <div
        className={`${isWindowSize.width < 350 ? "w-[250px]" : "w-[400px]"} sm:w-[550px] md:w-[650px] lg:w-[800px] xl:w-[1000px]`}
      >
        {children}
      </div> */}
      <div className="mx-auto px-5 sm:px-6 md:px-8">
        {children}
      </div>
    </div>
  );
}

export default MyLayout;
