import {createSlice} from '@reduxjs/toolkit'
import { client } from "./client.tsx"
import { createAppAsyncThunk } from './withTypes.tsx'
import {URL} from '../app/envy.tsx'
import {RootState} from "./store.tsx";
import {IData_SnippetNews, News} from "../app/Types.tsx";
import {data} from "../app/Const.tsx";

export const fetchPosts = createAppAsyncThunk('news/fetchNews', async () => {
    const response = await client.get<IData_SnippetNews[]>(URL)
    return response.data
  },
  {
    condition(_, thunkApi) {
      const newsStatus = selectNewsStatus(thunkApi.getState())
      if (newsStatus !== 'idle') {
        return false
      }
    }
  })
export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [
      data
    ],
    status: 'idle',
    error: null,
  } as News,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.news.push(...action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message ?? 'Unknown Error'
      })
  }
})

export default newsSlice.reducer

export const selectAllNews = (state: RootState) => state.news.news
export const selectNewsStatus = (state: RootState) => state.news.status