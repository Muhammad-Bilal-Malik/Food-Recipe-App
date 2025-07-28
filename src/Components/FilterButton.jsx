import { filters } from "../Utills";
export const FilterButton = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex gap-10">
      {filters.map((filter, i) => {
        return (
          <button
            key={i}
            onClick={() => onFilterChange(filter.id)}
            className={`text-lg border cursor-pointer shadow px-4 py-2 font-medium rounded-full transition-all duration-300 ${
              activeFilter === filter.id
                ? `bg-orange-500 text-white shadow-lg`
                : `border-gray-200 bg-white text-gray-700 hover:bg-gray-50`
            }`}
          >
            {filter.lable}
          </button>
        );
      })}
    </div>
  );
};
