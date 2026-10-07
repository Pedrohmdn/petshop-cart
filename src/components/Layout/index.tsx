import { Outlet } from "react-router";
import Header from "../Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="px-6">
        <Outlet />
      </main>
    </>
  );
}
