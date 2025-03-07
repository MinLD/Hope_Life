import MyFooter from "../Footer";
import MyHeader from "../Header";

type Props = {
  children: React.ReactNode;
};
function MyHomePages({ children }: Props) {
  return (
    <div>
      <MyHeader />
      {children}
      <MyFooter />
    </div>
  );
}

export default MyHomePages;
