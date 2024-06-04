'use server'

import { cookieBasedClient } from '@/utils/aplify-utils'
import { redirect } from 'next/navigation'

export async function createTodo(formData: FormData) {
  const { data } = await cookieBasedClient.models.Todo.create({
    content: formData.get('content')?.toString() || '',
  })
  redirect('/')
}
