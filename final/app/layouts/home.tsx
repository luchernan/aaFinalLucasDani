import SearchBar from "~/components/SearchBar";
import { useState } from "react"; 
import Search from "~/routes/search";

export default function Home() {
  const [search, setSearch] = useState<string>("");

  return (
    <div>
      <Search />
    </div>
  );
}