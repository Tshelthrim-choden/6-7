import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'

const CommentForm = ({ blogId }) => {
  const [comment, setComment] = useState('')
  const queryClient = useQueryClient()

  const mutation = useMutation(
    async () => {
      await axios.post(`/api/blogs/${blogId}/comments`, { text: comment })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['blog', blogId])
        setComment('')
      }
    }
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button type="submit">Add Comment</button>
    </form>
  )
}

export default CommentForm
