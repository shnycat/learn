import { Navbar } from "./";

export default function MainWrapper(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}
