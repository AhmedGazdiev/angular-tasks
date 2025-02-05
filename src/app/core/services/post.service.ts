import {Injectable} from '@angular/core';
import {IPost} from '../core';

// @ts-ignore
@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: IPost[] = [
    {
      authorId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      content:
        'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      likes: 0,
      comments: [],
    },
    {
      authorId: 1,
      id: 2,
      title: 'qui est esse',
      content:
        'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
      likes: 7,
      comments: [],
    },
    {
      authorId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      content:
        'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
      likes: 10,
      comments: [],
    },
    {
      authorId: 1,
      id: 4,
      title: 'eum et est occaecati',
      content:
        'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit',
      likes: 9,
      comments: [],
    },
    {
      authorId: 1,
      id: 5,
      title: 'nesciunt quas odio',
      content:
        'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque',
      likes: 8,
      comments: [],
    },
    {
      authorId: 2,
      id: 6,
      title: 'dolorem eum magni eos aperiam quia',
      content:
        'ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae',
      likes: 0,
      comments: [],
    },
    {
      authorId: 2,
      id: 7,
      title: 'magnam facilis autem',
      content:
        'dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas',
      likes: 6,
      comments: [],
    },
    {
      authorId: 4,
      id: 8,
      title: 'dolorem dolore est ipsam',
      content:
        'dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae',
      likes: 4,
      comments: [],
    },
    {
      authorId: 4,
      id: 9,
      title: 'nesciunt iure omnis dolorem tempora et accusantium',
      content:
        'consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas',
      likes: 3,
      comments: [],
    },
    {
      authorId: 4,
      id: 10,
      title: 'optio molestias id quia eum',
      content:
        'quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error',
      likes: 0,
      comments: [],
    },
  ];

  getPosts(): IPost[] {
    return this.posts
  }

  getPostById(id: number): IPost | undefined {
    return this.posts.find(post => post.id === id);
  }

  likePost(id: number): IPost | undefined {
    const post: IPost | undefined = this.getPostById(id)
    if (post) {
      post.likes += 1
    }
    return post
  }

  toggleComments(id: number): void {
  }
}
