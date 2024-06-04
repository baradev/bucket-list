import React from 'react'
import { createTodo } from '@/app/_actions/actions'

const AddPost = () => {
  return (
    <div>
      <form
        action={createTodo}
        className="p-4 flex flex-col items-center gap-4"
      >
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Todo"
          className="border border-gray-200 text-gray-900 block p-2 rounded-lg"
        />
        <button type="submit" className="text-white bg-teal-600 rounded p-4">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddPost
