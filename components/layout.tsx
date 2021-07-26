import { AppProps } from "next/app";
import Header from "./header";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
