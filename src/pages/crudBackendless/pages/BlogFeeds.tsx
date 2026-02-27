import { useEffect, useState } from "react";
import { BlogStore } from "../crudBackendless";
import { Link } from "react-router-dom";

type BlogPost = {
  objectId: string;
  title: string;
  author: string;
  content: string;
  published: string;
};

export default function BlogFeeds() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    BlogStore.find().then(setPosts);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-4 font-bold">Blog Feeds</h2>
      <div className="grid gap-4">
        {posts.map(post => (
          <Link key={post.objectId} to={`/crud/feeds/${post.objectId}`}>
            <div className="border rounded px-4 py-3 hover:bg-gray-100">
              <div className="font-bold">{post.title}</div>
              <div className="text-sm text-gray-600">By {post.author} | {new Date(post.published).toLocaleString()}</div>
              <div className="mt-2 text-gray-800 line-clamp-2">{post.content.slice(0, 100)}...</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}