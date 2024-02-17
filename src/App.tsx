import { QueryClient, QueryClientProvider } from "react-query";
import { LogoDiscription } from "./components/common/LogoDiscription";
import { DisplayAdjectiveMetaphors } from "./components/react_query/DisplayAdjectiveMetaphors";
import { AdjectiveInput } from "./components/adjectiveInput/adjectiveInput";

const queryClient = new QueryClient()

function App() {
  return (
  <>
    <QueryClientProvider client={queryClient}>

      <LogoDiscription />
      {/* <MetaphorFetcher render={metaphor => <MetaphorViewer metaphors={metaphor} />} /> */}
      <DisplayAdjectiveMetaphors />
      <AdjectiveInput />
    </QueryClientProvider>
  </>
  )
}

export default App;
