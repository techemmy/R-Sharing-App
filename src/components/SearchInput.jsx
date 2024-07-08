import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SearchInput({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const word = event.target.q.value;
    onSubmit(word)
  }

  function handleClearSearchInput() {
    setSearchTerm('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <div className="relative w-full max-w-md">
        <Input type="text" name="q" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search..." className="pr-10" />
        <Button type="submit" variant="ghost" size="icon" className="absolute inset-y-0 right-0 rounded-full">
          <SearchIcon className="w-5 h-5" />
        </Button>
        <Button onClick={handleClearSearchInput} variant="ghost" size="icon" className="absolute inset-y-0 right-8 rounded-full">
          <XIcon className="w-5 h-5" />
        </Button>
      </div>
    </form>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
