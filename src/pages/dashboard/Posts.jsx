// import { Link } from "react-router-dom";

// const Posts = () => {
//   return (
//     <div>
//       <h3>Posts List</h3>

//       <ul>
//         <li><Link to="1">Post 1</Link></li>
//         <li><Link to="2">Post 2</Link></li>
//         <li><Link to="3">Post 3</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Posts;







// import { Link } from "react-router-dom";

// const Posts = () => {
//   // Sample posts data with slugs
//   const posts = [
//     {
//       id: 1,
//       title: "Understanding React Router Nested Routes",
//       slug: "understanding-react-router-nested-routes",
//       excerpt: "Learn how to create nested routes in React Router with practical examples and best practices.",
//       author: "Alex Johnson",
//       date: "March 15, 2024",
//       readTime: "5 min read",
//       category: "React",
//       image: "🚀",
//     },
//     {
//       id: 2,
//       title: "Mastering Tailwind CSS: Tips and Tricks",
//       slug: "mastering-tailwind-css-tips-and-tricks",
//       excerpt: "Discover advanced Tailwind CSS techniques to build beautiful, responsive designs faster.",
//       author: "Sarah Chen",
//       date: "March 12, 2024",
//       readTime: "7 min read",
//       category: "CSS",
//       image: "🎨",
//     },
//     {
//       id: 3,
//       title: "What are URL Slugs? A Complete Guide",
//       slug: "what-are-url-slugs-complete-guide",
//       excerpt: "URL slugs are SEO-friendly strings that identify specific pages. Learn how to implement them in React.",
//       author: "Michael Rodriguez",
//       date: "March 10, 2024",
//       readTime: "4 min read",
//       category: "SEO",
//       image: "🔗",
//     },
//     {
//       id: 4,
//       title: "React Hooks Deep Dive: useEffect and useParams",
//       slug: "react-hooks-deep-dive-useeffect-useparams",
//       excerpt: "Master the most important React hooks including useParams for dynamic routing.",
//       author: "Emily Parker",
//       date: "March 8, 2024",
//       readTime: "6 min read",
//       category: "React",
//       image: "⚡",
//     },
//     {
//       id: 5,
//       title: "Building a Blog with React Router and Slugs",
//       slug: "building-blog-react-router-slugs",
//       excerpt: "Step-by-step tutorial on creating a blog with dynamic routes using URL slugs.",
//       author: "David Kim",
//       date: "March 5, 2024",
//       readTime: "8 min read",
//       category: "Tutorial",
//       image: "📝",
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//           Blog <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Posts</span>
//         </h1>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//           Click on any post to see slug-based routing in action. URL mein post ka slug use ho raha hai.
//         </p>
//       </div>

//       {/* Slug Explanation Card */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-12">
//         <div className="flex items-start space-x-4">
//           <div className="bg-white/20 p-3 rounded-xl">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
//             </svg>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold mb-2">How Slugs Work</h2>
//             <p className="text-blue-100">
//               Jab aap kisi post par click karte ho, URL kuch is tarah banta hai: <br />
//               <code className="bg-white/20 px-3 py-1 rounded-lg inline-block mt-2">
//                 /post/understanding-react-router-nested-routes
//               </code>
//             </p>
//             <p className="text-blue-100 mt-2">
//               <strong>useParams()</strong> hook se hum slug ko capture karte hain aur specific post display karte hain.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Posts Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {posts.map((post) => (
//           <Link
//             key={post.id}
//             to={`/post/${post.slug}`}
//             className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
//           >
//             {/* Card Header with Emoji */}
//             <div className="h-40 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
//               <span className="text-7xl transform group-hover:scale-110 transition-transform duration-300">
//                 {post.image}
//               </span>
//             </div>

//             {/* Card Content */}
//             <div className="p-6">
//               <div className="flex items-center space-x-2 mb-3">
//                 <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
//                   {post.category}
//                 </span>
//                 <span className="text-xs text-gray-500">{post.readTime}</span>
//               </div>

//               <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
//                 {post.title}
//               </h2>

//               <p className="text-gray-600 mb-4 line-clamp-2">
//                 {post.excerpt}
//               </p>

//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-2">
//                   <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700">
//                     {post.author.charAt(0)}
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">{post.author}</p>
//                     <p className="text-xs text-gray-500">{post.date}</p>
//                   </div>
//                 </div>
//                 <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
//                   →
//                 </span>
//               </div>

//               {/* Slug Preview */}
//               <div className="mt-4 pt-4 border-t border-gray-100">
//                 <p className="text-xs text-gray-400 font-mono truncate">
//                   slug: {post.slug}
//                 </p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Posts;






import { Link } from "react-router-dom";

const Posts = () => {
  // Sample posts data with proper slugs
  const posts = [
    {
      id: 1,
      title: "Understanding React Router Nested Routes",
      slug: "understanding-react-router-nested-routes", // 👈 Proper slug
      excerpt: "Learn how to create nested routes in React Router with practical examples.",
      author: "Alex Johnson",
      date: "March 15, 2024",
      category: "React",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS: Tips and Tricks",
      slug: "mastering-tailwind-css-tips-and-tricks", // 👈 Proper slug
      excerpt: "Discover advanced Tailwind CSS techniques to build beautiful designs.",
      author: "Sarah Chen",
      date: "March 12, 2024",
      category: "CSS",
    },
    {
      id: 3,
      title: "What are URL Slugs? A Complete Guide",
      slug: "what-are-url-slugs-complete-guide", // 👈 Proper slug
      excerpt: "URL slugs are SEO-friendly strings that identify specific pages.",
      author: "Michael Rodriguez",
      date: "March 10, 2024",
      category: "SEO",
    },
    {
      id: 4,
      title: "React Hooks Deep Dive: useEffect and useParams",
      slug: "react-hooks-deep-dive-useeffect-useparams", // 👈 Proper slug
      excerpt: "Master the most important React hooks including useParams.",
      author: "Emily Parker",
      date: "March 8, 2024",
      category: "React",
    },
    {
      id: 5,
      title: "Building a Blog with React Router and Slugs",
      slug: "building-blog-react-router-slugs", // 👈 Proper slug
      excerpt: "Step-by-step tutorial on creating a blog with dynamic routes.",
      author: "David Kim",
      date: "March 5, 2024",
      category: "Tutorial",
    },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Posts</h1>
        <p className="text-gray-600">
          Click on any post to see slug-based routing in action. URLs kuch is tarah honge: 
          <span className="block mt-2 font-mono text-sm bg-gray-100 p-2 rounded">
            /dashboard/posts/understanding-react-router-nested-routes
          </span>
        </p>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-3">
                  {post.category}
                </span>
                
                {/* Title with Slug Link */}
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  <Link 
                    to={`/dashboard/posts/${post.slug}`} // 👈 Slug based link
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                
                {/* Excerpt */}
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                {/* Meta Info */}
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>

                {/* Slug Display (for learning) */}
                <div className="mt-3 text-xs text-gray-400 font-mono">
                  Slug: {post.slug}
                </div>
              </div>

              {/* View Post Button */}
              <Link
                to={`/dashboard/posts/${post.slug}`}
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Read Post →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;