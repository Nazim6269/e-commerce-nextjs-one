"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams.toString());

  //handle chnge function
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    //function that update url
    const updateUrl = () => {
      router.push(`${pathname}?${params.toString()}`);
    };

    //logics for sorting and filtering
    switch (name) {
      case "type":
        if (value === "Type") {
          params.delete("type"); // this is default value which is not actual filter or sort
        } else {
          params.set("type", value);
        }
        updateUrl();
        break;

      case "min":
      case "max":
        const priceValue = parseFloat(value);
        if (isNaN(priceValue) || value.trim() === "") {
          params.delete(name);
        } else {
          params.set(name, value);
        }
        updateUrl();
        break;

      case "cat":
        if (value === "Category") {
          params.delete("cat");
        } else {
          params.set("cat", value);
        }
        updateUrl();
        break;

      case "sort":
        if (value === "Sort By") {
          params.delete("sort");
        } else {
          if (value === "asc-price" || value === "desc-price") {
            params.set("sort", value);
          } else {
            params.set("sort", value);
          }
        }
        updateUrl();
        break;

      default:
        console.warn(`Unhandled filter name: ${name}`);
        break;
    }
  };

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />

        <select
          name="cat"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Category</option>
          <option value="new-arrival">New Arrival</option>
          <option value="popular">Popular</option>
        </select>
        <select
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
          onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc-price">Price (low to high)</option>
          <option value="desc-price">Price (high to low)</option>
          <option value="asc-lastUpdated">Newest</option>
          <option value="desc-lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
