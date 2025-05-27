import { createContext, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router";
import { Navbar } from "./components/navbar";

export const MainRefCurrentContext = createContext<HTMLDivElement | null>(null);

export function Layout() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [mainRefCurrent, setMainRefCurrent] = useState<HTMLDivElement | null>(mainRef.current);

  useEffect(() => {
    setMainRefCurrent(mainRef.current);
  }, [mainRef]);

  return (
    <MainRefCurrentContext.Provider value={mainRefCurrent}>
      <div className="main">
        <Navbar />

        <div
          ref={mainRef}
          className="size-full overflow-auto"
        >
          <Outlet />
        </div>
      </div>
    </MainRefCurrentContext.Provider>
  );
}
