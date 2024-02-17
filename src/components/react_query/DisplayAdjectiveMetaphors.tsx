import { useState } from "react";
import { useQuery } from "react-query";

interface adjectiveMetaphors {
  id: number
  adjective: string
  metaphors: string[]
}

export function DisplayAdjectiveMetaphors() {
  const { isLoading, error, data } = useQuery('fetchAdjectiveMetaphors', fetchAdjectiveMetaphors)

  const [selectedAdjective, setSelectedAdjective] = useState<string | null>(null)

  const handleAdjectiveClick = (adjective: string) => {
    setSelectedAdjective(adjective === selectedAdjective ? null : adjective)
  }

  if (isLoading) return 'Loading...'
  if (error instanceof Error) return 'an error has occured: ' + error.message

  console.log(data)
  
  return (
    <div>
      {data.map((adjectiveMetaphors: adjectiveMetaphors) => (
        <div key={adjectiveMetaphors.id}>
        <button  onClick={() => handleAdjectiveClick(adjectiveMetaphors.adjective)}>
          {adjectiveMetaphors.adjective}
        </button>
        {selectedAdjective === adjectiveMetaphors.adjective && (
          <div>{adjectiveMetaphors.metaphors.map((m, index) => (
            <p key={index}>{m}</p>
          ))}</div>
        )}
        </div>
      ))}
    </div>
  )
}


async function fetchAdjectiveMetaphors() {
  const response = await fetch('http://localhost:3000/metaphors')
  const data = await response.json()
  return data
}