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
        todo.done ? 'bg-teal-100' : 'bg-gray-100'
      }`}
    >
      <div className="flex flex-col gap-2">
        <div className="font-bold text-lg">{todo.content}</div>
        <div className="text-sm">{todo.description}</div>
      </div>
      <div className="flex items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggleDone(todo.id, !todo.done)}
            className="sr-only peer"
          />
          {todo.done ? (
            '🎉'
          ) : (
            <div className="w-6 h-6 bg-gray-200 rounded"></div>
          )}
        </label>
        <button
          className="cursor-pointer ml-4 text-gray-400"
          onClick={() => onDelete(todo.id)}
        >
          X
        </button>
      </div>
    </div>
  )
}

export default Todo
