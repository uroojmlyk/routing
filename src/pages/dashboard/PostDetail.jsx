// import { useParams } from "react-router-dom";

// const PostDetail = () => {
//   const { id } = useParams();

//   return (
//     <div>
//       <h3>Post Detail</h3>
//       <p>Post ID: {id}</p>
//     </div>
//   );
// };

// export default PostDetail;


import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const PostDetail = () => {
  const { slug } = useParams(); // 👈 Ab yeh slug hai, ID nahi!
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Sample posts data with proper slugs
  const allPosts = [
    {
      id: 1,
      title: "Understanding React Router Nested Routes",
      slug: "understanding-react-router-nested-routes",
      content: `
        <h2 class="text-2xl font-bold mt-6 mb-4">What are Nested Routes?</h2>
        <p class="mb-4">Nested routes in React Router allow you to compose your UI as a hierarchy of routes. This is perfect for layouts that have persistent components like sidebars or navigation while changing only part of the page.</p>
        
        <h3 class="text-xl font-semibold mt-5 mb-3">Key Concepts:</h3>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Outlet Component:</strong> Acts as a placeholder where child routes are rendered</li>
          <li class="mb-2"><strong>Layout Routes:</strong> Parent routes that wrap multiple child routes</li>
          <li class="mb-2"><strong>Relative Links:</strong> Child routes can have paths relative to parent</li>
        </ul>
      `,
      excerpt: "Learn how to create nested routes in React Router with practical examples and best practices.",
      author: "Alex Johnson",
      date: "March 15, 2024",
      category: "React",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS: Tips and Tricks",
      slug: "mastering-tailwind-css-tips-and-tricks",
      content: `
        <h2 class="text-2xl font-bold mt-6 mb-4">Why Tailwind CSS?</h2>
        <p class="mb-4">Tailwind CSS is a utility-first CSS framework that gives you building blocks to create custom designs without leaving your HTML.</p>
        
        <h3 class="text-xl font-semibold mt-5 mb-3">Pro Tips:</h3>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>Use @apply for repeated styles:</strong> Create custom classes for common patterns</li>
          <li class="mb-2"><strong>Responsive Design:</strong> Use md:, lg:, xl: prefixes for breakpoints</li>
        </ul>
      `,
      excerpt: "Discover advanced Tailwind CSS techniques to build beautiful, responsive designs faster.",
      author: "Sarah Chen",
      date: "March 12, 2024",
      category: "CSS",
    },
    {
      id: 3,
      title: "What are URL Slugs? A Complete Guide",
      slug: "what-are-url-slugs-complete-guide",
      content: `
        <h2 class="text-2xl font-bold mt-6 mb-4">Understanding URL Slugs</h2>
        <p class="mb-4">A slug is the part of a URL that identifies a particular page in a human-readable format. For example, in <code class="bg-gray-100 px-2 py-1 rounded">/post/understanding-url-slugs</code>, "understanding-url-slugs" is the slug.</p>

        <h3 class="text-xl font-semibold mt-5 mb-3">Why Use Slugs?</h3>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2"><strong>SEO Friendly:</strong> Search engines understand the content from URL</li>
          <li class="mb-2"><strong>User Friendly:</strong> Users can read and remember the URL</li>
          <li class="mb-2"><strong>Clean URLs:</strong> No more /post?id=123 - instead /post/post-title</li>
        </ul>
      `,
      excerpt: "URL slugs are SEO-friendly strings that identify specific pages. Learn how to implement them in React.",
      author: "Michael Rodriguez",
      date: "March 10, 2024",
      category: "SEO",
    },
    {
      id: 4,
      title: "React Hooks Deep Dive: useEffect and useParams",
      slug: "react-hooks-deep-dive-useeffect-useparams",
      content: `
        <h2 class="text-2xl font-bold mt-6 mb-4">Essential React Hooks</h2>
        
        <h3 class="text-xl font-semibold mt-5 mb-3">useParams Hook</h3>
        <p class="mb-4">useParams returns an object of key/value pairs of URL parameters. Use it to access dynamic parameters from the current route.</p>
        <pre class="bg-gray-800 text-white p-4 rounded-lg mb-4"><code>const { slug } = useParams();
// If URL is /post/my-post, slug = "my-post"</code></pre>
      `,
      excerpt: "Master the most important React hooks including useParams for dynamic routing.",
      author: "Emily Parker",
      date: "March 8, 2024",
      category: "React",
    },
    {
      id: 5,
      title: "Building a Blog with React Router and Slugs",
      slug: "building-blog-react-router-slugs",
      content: `
        <h2 class="text-2xl font-bold mt-6 mb-4">Complete Blog Tutorial</h2>
        
        <h3 class="text-xl font-semibold mt-5 mb-3">Step 1: Setup Routes</h3>
        <pre class="bg-gray-800 text-white p-4 rounded-lg mb-4"><code>&lt;Route path="/posts" element={&lt;Posts /&gt;} /&gt;
&lt;Route path="/post/:slug" element={&lt;PostDetail /&gt;} /&gt;</code></pre>
      `,
      excerpt: "Step-by-step tutorial on creating a blog with dynamic routes using URL slugs.",
      author: "David Kim",
      date: "March 5, 2024",
      category: "Tutorial",
    },
  ];

  // Find post by SLUG (not by ID)
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // 👇 SLUG se find kar rahe hain
      const foundPost = allPosts.find(p => p.slug === slug);
      setPost(foundPost || null);
      
      // Find related posts (same category, excluding current)
      if (foundPost) {
        const related = allPosts
          .filter(p => p.category === foundPost.category && p.slug !== foundPost.slug)
          .slice(0, 3);
        setRelatedPosts(related);
      }
      
      setLoading(false);
    }, 500);
  }, [slug]); // 👈 Dependency array mein slug

  // Loading state
  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  // Post not found
  if (!post) {
    return (
      <div className="p-6 text-center">
        <div className="bg-red-50 rounded-2xl p-12">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">
            No post found with slug: <code className="bg-gray-100 px-3 py-1 rounded">{slug}</code>
          </p>
          <Link
            to="/dashboard/posts"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            ← Back to Posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-blue-600 mb-6 group"
      >
        <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Posts
      </button>

      {/* Post Header */}
      <div className="mb-8">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4">
          {post.category}
        </span>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>

        <div className="flex items-center text-gray-600">
          <span className="font-medium">{post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>
      </div>

      {/* SLUG Info Card - Important for understanding */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">🔗 Slug Information</h3>
        <div className="space-y-2">
          <p><span className="font-medium">Current URL:</span> /dashboard/posts/{slug}</p>
          <p><span className="font-medium">Slug Value:</span> <code className="bg-white px-3 py-1 rounded text-blue-600">{slug}</code></p>
          <p><span className="font-medium">Matched Post:</span> {post.title} (ID: {post.id})</p>
          <p className="text-sm text-blue-600 mt-2">✓ Slug-based routing successfully working!</p>
        </div>
      </div>

      {/* Post Content */}
      <div 
        className="prose max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                to={`/dashboard/posts/${related.slug}`}
                className="group bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {related.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">{related.excerpt}</p>
                <p className="text-xs text-gray-400 mt-2 font-mono truncate">{related.slug}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetail;