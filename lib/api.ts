import axios from "axios";

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type Note = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

export const getSingleNote = async (id: string) => {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type NewNoteData = {
  title: string;
  content: string;
  categoryId: string;
};

export const createNote = async (data: NewNoteData) => {
  const res = await axios.post<Note>("/notes", data);
  return res.data;
};

export const getCategories = async () => {
  const res = await axios<Category[]>("/categories");
  return res.data;
};

axios.defaults.baseURL = "https://next-v1-notes-api.goit.study";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getNotes = async (categoryId?: string) => {
  const res = await axios.get<NoteListResponse>("/notes", {
    params: { categoryId },
  });
  return res.data;
};

export const getUser = async (id: string): Promise<User | null> => {
  try {
    const res = await axios.get<User>(`/users/${id}`);
    return res.data;
  } catch (err) {
    return null; // повертаємо null, якщо користувача не існує
  }
};
