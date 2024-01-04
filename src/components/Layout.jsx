import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { ThemeStore } from "../ThemeStore";

export default function Layout() {
  const imageUrl = ThemeStore((state) => state.theme);
  console.log(imageUrl);
  return (
    <>
      <main className="bg-white">
        <div
          style={{
            backgroundImage: `url(/${
              imageUrl.backgroundImage && imageUrl.backgroundImage
            }.svg)`,
          }}
          className="bg-center bg-fixed"
        >
          <Navbar />

          <Outlet />
        </div>
      </main>
    </>
  );
}
