'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Schema } from '../../amplify/data/resource'

const Todo = ({
  todo,
  onDelete,
  onToggleDone,
}: {
  todo: Pick<Schema['Todo'], 'content' | 'id' | 'done'>
  onDelete: (id: string) => void
  onToggleDone: (id: string, done: boolean) => void // Add onToggleDone to the props
}) => {
  const router = useRouter()
  return (
    <div
      className={`border w-full p-4 rounded flex justify-between ${
        todo.done ? 'bg-green-100' : 'bg-gray-100'
      }`}
    >
      <div className="flex gap-2">
        <div>{todo.content}</div>
      </div>
      <div>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggleDone(todo.id, !todo.done)} // Call onToggleDone
        />
        <button
          className="text-red-500 cursor-pointer"
          onClick={() => onDelete(todo.id)}
        >
          X
        </button>
      </div>
    </div>
  )
}

export default Todo
