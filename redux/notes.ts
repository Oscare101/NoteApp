import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Note } from '../constants/interfaces'

const initialState: Note[] = []

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    updateNotes: (state, action: PayloadAction<Note[]>) => {
      state.splice(0, state.length, ...action.payload)
    },
  },
})

export const { updateNotes } = notesSlice.actions
export default notesSlice.reducer
