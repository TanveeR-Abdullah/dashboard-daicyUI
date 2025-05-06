

import { createBrowserRouter} from "react-router";
import Dashboard from "./Dashboard";
import Admin from "./pages/admin";
import Organization from "./pages/Organization";
import Doner from "./pages/Doner";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
      children:[
        { path :"/Admin",
            element:<Admin/>,
        },
        { path :"/Organization",
            element:<Organization/>,
        },
        { path :"/Doner",
            element:<Doner/>,
        },

        
      ]
    },

  ]);

export default router ;