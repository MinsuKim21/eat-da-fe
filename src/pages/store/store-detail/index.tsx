import React from "react";
import { useLocation } from "react-router";
// import withList from '../../hocs/withList';
import Store from "../../../components/store/Store";

export default function StorePage() {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];
  return (
    <main className="w-full h-full flex flex-col gap-y-[0.5rem] bg-black">
      <Store id={id}></Store>
    </main>
  );
}
