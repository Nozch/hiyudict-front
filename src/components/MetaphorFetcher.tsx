import { useState, useEffect, ReactNode, FC } from 'react';

export interface metaphorData {
  id: number
  adjective: string
  metaphor: string
}

interface MetaphorFetcherProps {
  render: (metaphors: metaphorData[] | null) => ReactNode
}

const MetaphorFetcher: FC<MetaphorFetcherProps> = ({ render }) =>  {
  const [metaphors, setMetaphors] = useState<metaphorData[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/metaphors')
      const json = await response.json()
      setMetaphors(json)
      }

      fetchData()
  }, [])

  return render(metaphors)
}

export default MetaphorFetcher