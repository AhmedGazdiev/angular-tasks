export interface IPost {
  id: number;
  title: string;
  content: string;
  authorId: number;
  likes: number;
  comments: string[];
}
