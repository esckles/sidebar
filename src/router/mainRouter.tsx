import { createBrowserRouter } from "react-router-dom";

import GoalScreen from "../Pages/GoalScreen";
import GoalLayout from "../layout/GoalLayout";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <GoalLayout />,
    children: [
      {
        index: true,
        element: <GoalScreen />,
      },
    ],
  },
]);
