import { QueryClient, QueryClientProvider } from "react-query";
import { LogoDiscription } from "./components/LogoDiscription";
import MetaphorFetcher from "./components/MetaphorFetcher";
import MetaphorViewer from "./components/MetaphorViewer";
import { MetaphorQuery } from "./components/reactQuery/MetaphorQuery";

const queryClient = new QueryClient()

function App() {
  return (
  <>
    <QueryClientProvider client={queryClient}>

      <LogoDiscription />
      {/* <MetaphorFetcher render={metaphor => <MetaphorViewer metaphors={metaphor} />} /> */}
      <MetaphorQuery />
    </QueryClientProvider>
  </>
  )
}

export default App;
