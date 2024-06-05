'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Schema } from '../../amplify/data/resource'

const Todo = ({
  todo,
  onDelete,
  idx,
}: {
  todo: Pick<Schema['Todo'], 'content' | 'id'>
  onDelete: (id: string) => void
  idx: number
}) => {
  const router = useRouter()
  return (
    <div className="border bg-gray-100 w-full p-4 rounded flex justify-between">
      <div className="flex gap-2">
        <div>{todo.content}</div>
      </div>
      <button
        className="text-red-500 cursor-pointer" // Corrected class name
        onClick={() => onDelete(todo.id)}
      >
        X
      </button>
    </div>
  )
}

export default Todo
