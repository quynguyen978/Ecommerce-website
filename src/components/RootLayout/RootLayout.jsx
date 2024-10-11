import { Outlet } from "react-router-dom";
import MainNavigate from "../Navigates/MainNavigate";

function RootLayout() {
      return <div>
            <MainNavigate/>
            <main>
                  <Outlet/>
            </main>
      </div>
}
export default RootLayout;