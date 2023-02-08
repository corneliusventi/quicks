import { BASE_API } from "@/config";
import fetcher from "@/libs/fetcher";
import Image from "next/image";
import { useEffect, useState } from "react";
import useSWRImmutable from "swr/immutable";
import { Category } from "./QuickTaskTab";

type TaskBarProps = {
  category?: Category;
  selectCategory: (category: Category) => void;
};

export default function TaskBar({ category, selectCategory }: TaskBarProps) {
  const [isSelectCategory, setIsSelectCategory] = useState(false);

  const { data: categories, isLoading } = useSWRImmutable<Category[]>(
    `${BASE_API}/categories`,
    fetcher
  );

  const toggleIsSelectCategory = () => {
    return setIsSelectCategory((isSelectCategory) => !isSelectCategory);
  };

  useEffect(() => {
    if (categories) {
      selectCategory(categories[0]);
    }
  }, [categories]);

  return (
    <div className="flex justify-between">
      <div className="relative flex w-72 items-center justify-center">
        <button
          className="flex items-center rounded-md border border-gray-3 px-4 py-2 font-bold"
          onClick={toggleIsSelectCategory}
        >
          <div className={isLoading ? "text-gray-3" : "text-gray-2"}>
            {category ? category.name : "Select Category"}
          </div>
          <Image
            height={20}
            width={20}
            src="/expand-more.svg"
            alt="expand more icon"
          />
        </button>
        {isSelectCategory && categories && (
          <div className="absolute top-12 z-10 divide-y divide-gray-4 rounded-md border border-gray-3 bg-white">
            {categories
              .filter((currentCategory) => currentCategory.id !== category?.id)
              .map((category) => (
                <button
                  className="w-full py-2 px-4 text-left font-bold text-gray-2"
                  key={category.id}
                  onClick={() => {
                    selectCategory(category);
                    toggleIsSelectCategory();
                  }}
                >
                  {category.name}
                </button>
              ))}
          </div>
        )}
      </div>
      <div className="rounded-md bg-blue-1 px-4 py-2 font-bold text-white">
        New Task
      </div>
    </div>
  );
}
