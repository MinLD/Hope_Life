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
        className={`"w-[400px]"} sm:w-[550px] md:w-[650px] lg:w-[800px] xl:w-[1000px]`}
      >
        {children}
      </div> */}
      <div className="mx-auto w-[80vw] lg:w-[70vw] xl:w-[65vw]">{children}</div>
    </div>
  );
}

export default MyLayout;
