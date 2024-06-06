import React from 'react'
import { createTodo } from '@/app/_actions/actions'
import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/utils/aplify-utils'

const AddPost = async () => {
  const authenticated = await isAuthenticated()

  if (!authenticated) {
    redirect('/signin')
    return null
  }

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
          className="border border-gray-200 text-gray-900 block p-2 rounded-lg w-3/5"
        />
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          className="border border-gray-200 text-gray-900 block p-2 rounded-lg w-3/5 h-32"
        />
        <input type="file" />

        <button type="submit" className="text-white bg-teal-600 rounded p-4">
          Add a wish
        </button>
      </form>
    </div>
  )
}

export default AddPost
