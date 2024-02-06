import { useState } from "react";
import { useQuery } from "react-query";

export function MetaphorQuery() {
  const { isLoading, error, data } = useQuery('', fetchMetaphor)

  const [selectedAdjective, setSelectedAdjective] = useState<string | null>(null)

  const handleAdjectiveClick = (adjective: string) => {
    setSelectedAdjective(adjective === selectedAdjective ? null : adjective)
  }

  if (isLoading) return 'Loading...'
  if (error instanceof Error) return 'an error has occured: ' + error.message
  
  return (
    <div>
      {data.map(metaphor => (
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


async function fetchMetaphor() {
  const response = await fetch('http://localhost:3000/metaphors')
  return response.json = await response.json()
}