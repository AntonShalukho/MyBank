import { Provider as ReduxProvider } from "react-redux";
import { SpinnerProvider } from "components_v2/SpinnerProvider";
import { PageRenderer } from "./pages_v2/PageRenderer";
import { Provider } from "./translation";
import { store } from "./redux/store/store";

export const App = () => (
  <ReduxProvider store={store}>
    <Provider>
      <SpinnerProvider>
        <PageRenderer />
      </SpinnerProvider>
    </Provider>
  </ReduxProvider>
);
