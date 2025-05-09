import { Link } from "react-router-dom";

const categories = [
  "Design",
  "Development",
  "Writing",
  "Marketing",
  "Video Editing",
];

const CategoryGrid = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Popular Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/search?category=${cat.toLowerCase()}`}
            className="bg-white/10 backdrop-blur-md py-4 px-2 rounded-xl text-center text-sm font-medium hover:bg-white/20 transition"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
