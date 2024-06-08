import { useFetch } from '@/hooks/useFetch';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostsComponent = () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts?userId=1';
  const { data, error } = useFetch<Post[]>(apiUrl);
  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      {data?.map((post) => (
        <div key={post.id} className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold mb-2'>{post.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
