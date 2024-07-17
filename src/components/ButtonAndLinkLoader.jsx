import React from 'react'
import { Loader } from "lucide-react";

export default function ButtonAndLinkLoader() {
  const loader = (
    <div className='flex'>
      <Loader className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </div>
  )
  return loader
}

