import { UsersProvider } from "./context/user-context";
import { MainContent } from "./components/main-content";


export const App = () => {

  return (
    <UsersProvider>
      <MainContent />
    </UsersProvider>
  );
};
