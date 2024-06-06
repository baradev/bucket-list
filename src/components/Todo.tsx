'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Schema } from '../../amplify/data/resource'

const Todo = ({
  todo,
  onDelete,
  onToggleDone,
}: {
  todo: Pick<Schema['Todo'], 'content' | 'id' | 'done' | 'description'>
  onDelete: (id: string) => void
  onToggleDone: (id: string, done: boolean) => void
}) => {
  const router = useRouter()
  return (
    <div
      className={`border w-full p-4 rounded flex justify-between ${
        todo.done ? 'bg-green-100' : 'bg-gray-100'
      }`}
    >
      <div className="flex flex-col gap-2">
        <div className="font-bold text-lg">{todo.content}</div> {/* Title */}
        <div className="text-sm">{todo.description}</div> {/* Description */}
      </div>
      <div className="flex items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggleDone(todo.id, !todo.done)}
            className="sr-only peer"
          />
          <div className="w-6 h-6 bg-gray-200 rounded peer-checked:bg-green-500 peer-focus:ring-green-300"></div>
        </label>
        <button
          className="text-red-500 cursor-pointer ml-4"
          onClick={() => onDelete(todo.id)}
        >
          X
        </button>
      </div>
    </div>
  )
}

export default Todo
