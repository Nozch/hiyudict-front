import { FC, useState } from "react"
import { metaphorData } from "./MetaphorFetcher"

interface MetaphorViewerProps {
  metaphors: metaphorData[] | null;
}
const MetaphorViewer: FC<MetaphorViewerProps> = ({ metaphors }) => {
  const [selectedAdjective, setSelectedAdjective] = useState<string | null>(null)

  const handleAdjectiveClick = (adjective: string) => {
    setSelectedAdjective(adjective === selectedAdjective ? null : adjective)
  }
  if (!metaphors) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {metaphors.map((metaphor) => (
        <div key={metaphor.id}>
          <button onClick={() => handleAdjectiveClick(metaphor.adjective)}>
            {metaphor.adjective}
          </button>
          {selectedAdjective === metaphor.adjective && (
            <div>{metaphor.metaphor}</div>
          )}
          </div>
      ))}
    </div>
  )
}

export default MetaphorViewer