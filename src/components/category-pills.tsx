import { Button } from "./button";

type CategoryPillsProps = {
  categories: string[];
};

export function CategoryPills({ categories }: CategoryPillsProps) {
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
        {categories.map((category) => (
          <Button
            variant="dark"
            className="py-1 px-3 rounded-lg whitespace-nowrap"
            key={category}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}
