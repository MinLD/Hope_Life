type Props = {
  children: React.ReactNode;
};
function MyLayout({ children }: Props) {
  return (
    <div className="flex justify-center">
      <div className="w-[400px] sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1200px]">{children}</div>
    </div>
  );
}

export default MyLayout;
