import { Button } from "@/components/ui/button";

interface CategoryBarProps {
  categories: string[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

export default function CategoryBar({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryBarProps) {
  return (
    <div className="flex gap-2 overflow-x-auto">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        onClick={() => setSelectedCategory(null)}
      >
        Semua
      </Button>
      {categories.map((cat) => (
        <Button
          key={cat}
          variant={selectedCategory === cat ? "default" : "outline"}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </Button>
      ))}
    </div>
  );
}
