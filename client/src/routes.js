import Create from "./pages/Create";
import Edit from "./pages/Edit";
import List from "./pages/List";
import Info from "./pages/Info";
import {
  CREATE_ROUTE,
  EDIT_ROUTE,
  INFO_ROUTE,
  LIST_ROUTE,
} from "./utils/consts";

export const routes = [
  {
    path: LIST_ROUTE,
    Component: List,
  },
  {
    path: CREATE_ROUTE,
    Component: Create,
  },
  {
    path: EDIT_ROUTE + "/:id",
    Component: Edit,
  },
  {
    path: LIST_ROUTE,
    Component: List,
  },
  {
    path: INFO_ROUTE + "/:id",
    Component: Info,
  },
];
