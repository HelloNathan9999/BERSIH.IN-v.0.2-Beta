import React from "react";

const Search = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Cari...",
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow px-3 py-2">
      <Search className="w-4 h-4 text-gray-500" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="ml-2 flex-1 bg-transparent outline-none text-sm"
      />
    </div>
  );
};
