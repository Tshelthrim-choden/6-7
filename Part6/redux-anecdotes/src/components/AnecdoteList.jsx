import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdoteAsync } from '../reducers/anecdoteReducer';
import { showNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(state => state.anecdotes);

  const vote = (anecdote) => {
    dispatch(voteAnecdoteAsync(anecdote));
    dispatch(showNotification(`You voted '${anecdote.content}'`, 5));
  };

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnecdoteList;
