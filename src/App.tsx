import { useState } from "react";
import { CategoryPills } from "./components/category-pills";
import { categories, videos } from "./data/home";
import { PageHeader } from "./layouts/page-header";
import "./styles.css";
import { VideoGridItem } from "./components/video-grid-item";
import { Sidebar } from "./layouts/sidebar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="max-h-screen flex flex-col ">
      <PageHeader />
      <div className="grid grid-cols-[auto_1fr] grow overflow-auto">
        <Sidebar />
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {videos.map((video) => (
              <VideoGridItem key={video.id} {...video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
