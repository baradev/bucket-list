'use server'

import { cookieBasedClient } from '@/utils/aplify-utils'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function onDelete(id: string) {
  const { data, errors } = await cookieBasedClient.models.Todo.delete({ id })

  console.log('delete data', data, errors)
  revalidatePath('/')
}

export async function onToggleDone(id: string, done: boolean) {
  const { data, errors } = await cookieBasedClient.models.Todo.update({
    id,
    done,
  })

  console.log('toggle done data', data, errors)
  revalidatePath('/')
}

export async function createTodo(formData: FormData) {
  const { data } = await cookieBasedClient.models.Todo.create({
    content: formData.get('todo')?.toString() || '',
    description: formData.get('description')?.toString() || '',
  })

  console.log('create post data', data)
  redirect('/')
}
