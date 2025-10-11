import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/Logo.png";
import { Button } from "../components/button";
import { useEffect, useState } from "react";

export function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  useEffect(() => {
    console.log(showFullWidthSearch);
  }, [showFullWidthSearch]);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`gap-4 items-center shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-6" />
        </a>
      </div>

      <form
        className={`gap-4 grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            variant="ghost"
            className="shrink-0"
            type="button"
            size="icon"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button
            onClick={() => setShowFullWidthSearch(true)}
            className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0 shrink-0"
            type="button"
          >
            <Search />
          </Button>
        </div>
        <Button className="shrink-0" type="button" size="icon">
          <Mic />
        </Button>
      </form>

      <div
        className={`shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost" size="icon" className="md:hidden">
          <Search />
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Mic />
        </Button>
        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </div>
    </div>
  );
}
