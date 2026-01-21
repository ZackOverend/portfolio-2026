import Gallery, { GalleryItem } from "@/app/projects/components/gallery";
import { useState } from "react";

const items: GalleryItem[] = [
  {
    src: "/nwm/product-view.png",
    title: "Most Recent Developed UI Iteration",
  },
  {
    src: "/nwm/product-view-wireframe.png",
    title: "Early UI Wireframe",
  },
  {
    src: "/nwm/02-swiftui.png",
    title: "XCode Workspace Using SwiftUI",
  },
];

export default function BodyDesign() {
  const [index, setIndex] = useState(0);

  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
      {/* LEFT — text */}
      <div className="text-md">
        <div className="space-y-4">
          <h2 className="h2">Design Development & Process</h2>
          <p className="p-body">
            Over the course of a three-month semester, I worked closely with my
            group members, who are also friends, to shape the logo and overall
            design language for NoWasteMate. Design has always been something I
            naturally gravitate toward, and of the three of us, I had the most
            hands-on experience with Figma, which allowed me to take the lead in
            turning early ideas into tangible visuals.
          </p>
          <p className="p-body">
            One of my main focuses during the design process was creating an
            experience that felt accessible and effortless to use. Since users
            are expected to log their food items on a daily basis, it was
            important to minimize the number of steps required and to automate
            details wherever possible.
          </p>
        </div>
      </div>
      {/* RIGHT — visual */}
      <div className="min-h-128 lg:min-h-64 h-full ">
        <Gallery items={items} index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}
