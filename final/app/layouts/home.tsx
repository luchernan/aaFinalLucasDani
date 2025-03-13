import SearchBar from "~/components/SearchBar";
import { useState } from "react";
import Search from "~/routes/search";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { Link, Outlet } from "react-router";

export default function Home() {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="bg-black text-white">
    <Header />
    <Outlet />
    <Footer />
  </div>
  );
}