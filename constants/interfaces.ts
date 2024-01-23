export interface NoteData {
  type: 'text' | 'h1'
  text: string
}

export interface Note {
  id: string
  color: string
  title: string
  created: string
  lastUpdated: string
  password: string
  data: string // NoteData[] // TODO do this
  isArchived: boolean
  archivedDate: string
}
