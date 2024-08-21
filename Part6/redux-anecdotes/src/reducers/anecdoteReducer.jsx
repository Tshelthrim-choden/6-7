import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes';


export const fetchAnecdotes = createAsyncThunk(
  'anecdotes/fetchAnecdotes',
  async () => {
    const anecdotes = await anecdoteService.getAll();
    return anecdotes;
  }
);

export const voteAnecdoteAsync = createAsyncThunk(
  'anecdotes/voteAnecdote',
  async (anecdote) => {
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
    const response = await anecdoteService.update(anecdote.id, updatedAnecdote);
    return response;
  }
);

export const createAnecdote = createAsyncThunk(
  'anecdotes/createAnecdote',
  async (content) => {
    const newAnecdote = await anecdoteService.createNew(content);
    return newAnecdote;
  }
);

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload;
      const anecdoteToVote = state.find(a => a.id === id);
      if (anecdoteToVote) {
        anecdoteToVote.votes += 1;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnecdotes.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createAnecdote.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(voteAnecdoteAsync.fulfilled, (state, action) => {
        const id = action.payload.id;
        const anecdoteToVote = state.find(a => a.id === id);
        if (anecdoteToVote) {
          anecdoteToVote.votes = action.payload.votes;
        }
      });
  }
});


export const { appendAnecdote } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;