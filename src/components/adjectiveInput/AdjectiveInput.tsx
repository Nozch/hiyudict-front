import { FormEvent, useState } from 'react'
import useStore from './store'
export function AdjectiveInput() {
  const [input, setInput] = useState('')
  const setAdjective = useStore(state => state.setAdjective)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setAdjective(input)
    
    await fetch('http://endpoint/for/adjectives', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ adjective: input }),
    })
    setInput('')
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
       type="text"
       value={input}
       onChange={(e) => setInput(e.target.value)}
       placeholder='ぬるい、ゆるい…'
       />
       <button type='submit'>+</button>
    </form>
  )
}
