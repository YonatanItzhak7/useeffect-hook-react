import { About, Game, User } from "./components/pages";

function Router({page}) {
  switch (page) {
    case "About":
      return <About />;
    case "Game":
      return <Game />;
    case "User":
      return <User />;
    default:
      break;
  }
}

export default Router;
