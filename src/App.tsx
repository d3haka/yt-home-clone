import { useState } from "react";
import { CategoryPills } from "./components/category-pills";
import { categories, vids } from "./data/home";
import { PageHeader } from "./layouts/page-header";
import "./styles.css";
import { VideoGridItem } from "./components/video-grid-item";
import { Sidebar } from "./layouts/sidebar";
import { SidebarProvider } from "./contexts/SidebarContext";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <SidebarProvider>
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
              {vids.map((vid) => (
                <VideoGridItem key={vid.id} {...vid} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
