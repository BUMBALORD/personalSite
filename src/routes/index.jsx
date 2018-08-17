import Components from "views/Components/Components.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";

var indexRoutes = [
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/", name: "Components", component: Components }
];

export default indexRoutes;
