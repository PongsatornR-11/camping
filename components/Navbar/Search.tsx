"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const search = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  );

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams();
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/?${params.toString()}`);
  }, 1000);

  useEffect(() => {
    if (!searchParams.get("search")) {
      setSearch("");
    }
  }, [searchParams.get("search")]);

  return (
    <Input
      type="text"
      placeholder="Search Locations ..."
      className="max-w-xs"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        handleSearch(e.target.value);
        setSearch(e.target.value);
      }}
      value={search}
    />
  );
};

export default search;
