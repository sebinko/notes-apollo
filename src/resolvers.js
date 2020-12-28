import { Note } from "./models/Note";

export const resolvers = {
  Query: {
    notes: () => Note.find(),
  },
  Mutation: {
    createNote: async (_, { title, content, createdAt }) => {
      const note = new Note({
        title,
        content,
        createdAt,
      });
      await note.save();
      return note;
    },
  },
};
