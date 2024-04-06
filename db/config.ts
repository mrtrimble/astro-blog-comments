import { defineDb, defineTable, column, NOW } from 'astro:db';

const BlogComments = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    post: column.text(),
    author: column.text(),
    content: column.text(),
    timestamp: column.date({ default: NOW }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    BlogComments,
  },
});
