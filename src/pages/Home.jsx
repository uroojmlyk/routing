// import { Link } from "react-router-dom";

// const Home = () => {
//   const features = [
//     {
//       title: "Nested Routes",
//       description: "Dashboard ke andar Profile, Settings aur Stats pages hain",
//       icon: "🪆",
//       color: "bg-blue-50",
//     },
//     {
//       title: "Outlet Component",
//       description: "Dashboard layout mein Outlet use ho raha hai child pages render karne ke liye",
//       icon: "🔄",
//       color: "bg-green-50",
//     },
//     {
//       title: "Shared Layout",
//       description: "Sidebar dashboard ke har child page par same rahega",
//       icon: "📐",
//       color: "bg-purple-50",
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* Hero Section */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//           Nested Routes with{" "}
//           <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//             Tailwind CSS
//           </span>
//         </h1>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//           React Router ke nested routes ka practical example. Dashboard mein jaake Profile, Settings aur Stats pages dekhein.
//         </p>
//         <div className="mt-8">
//           <Link
//             to="/dashboard"
//             className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
//           >
//             Explore Dashboard
//             <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </Link>
//         </div>
//       </div>

//       {/* Features Grid */}
//       <div className="grid md:grid-cols-3 gap-8 mb-16">
//         {features.map((feature, index) => (
//           <div key={index} className={`${feature.color} rounded-2xl p-8 hover:shadow-lg transition-shadow`}>
//             <div className="text-4xl mb-4">{feature.icon}</div>
//             <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
//             <p className="text-gray-600">{feature.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Code Explanation */}
//       <div className="bg-gray-900 rounded-2xl p-8 text-white">
//         <h2 className="text-2xl font-bold mb-4">⚡ Routing Structure</h2>
//         <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
//           <code>{`
// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/about" element={<About />} />
  
//   {/* Nested Routes */}
//   <Route path="/dashboard" element={<Dashboard />}>
//     <Route path="profile" element={<Profile />} />
//     <Route path="settings" element={<Settings />} />
//     <Route path="stats" element={<Stats />} />
//   </Route>
// </Routes>
//           `}</code>
//         </pre>
//         <p className="text-gray-400 mt-4">
//           Dashboard layout mein <code className="bg-gray-700 px-2 py-1 rounded">{'<Outlet />'}</code> use ho raha hai child pages render karne ke liye.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home;






// const Home = () => {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>Yeh simple home page hai</p>
//     </div>
//   );
// };

// export default Home;





import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      title: "Nested Routes",
      description: "Dashboard ke andar Profile, Settings aur Stats pages hain",
      icon: "🪆",
      color: "bg-blue-50",
    },
    {
      title: "Slug Routes",
      description: "/post/:slug se dynamic pages banaye gaye hain",
      icon: "🔗",
      color: "bg-purple-50",
    },
    {
      title: "Outlet Component",
      description: "Dashboard layout mein Outlet use ho raha hai child pages render karne ke liye",
      icon: "🔄",
      color: "bg-green-50",
    },
    {
      title: "useParams Hook",
      description: "Slug capture karne ke liye useParams() hook use ho raha hai",
      icon: "🎣",
      color: "bg-orange-50",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          React Router with{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Nested & Slug Routes
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nested routes aur slug-based routing ka complete example. Dashboard mein nested routes aur Posts mein slug routes check karein.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to="/dashboard"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Nested Routes
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/posts"
            className="inline-flex items-center px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Slug Routes
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, index) => (
          <div key={index} className={`${feature.color} rounded-2xl p-6 hover:shadow-lg transition-shadow`}>
            <div className="text-3xl mb-3">{feature.icon}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Code Explanation */}
      <div className="bg-gray-900 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">⚡ Routing Structure with Slug</h2>
        <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <code>{`
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  
  {/* Posts Routes with Slug */}
  <Route path="/posts" element={<Posts />} />
  <Route path="/post/:slug" element={<PostDetail />} />  {/* 👈 Dynamic slug */}
  
  {/* Nested Routes */}
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
    <Route path="stats" element={<Stats />} />
  </Route>
</Routes>
          `}</code>
        </pre>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-400 mb-2">Nested Routes Example</h3>
            <p className="text-gray-400">/dashboard/profile → Profile page with sidebar</p>
            <p className="text-gray-400">/dashboard/settings → Settings page with sidebar</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-400 mb-2">Slug Routes Example</h3>
            <p className="text-gray-400">/post/what-are-url-slugs-complete-guide</p>
            <p className="text-gray-400">/post/understanding-react-router-nested-routes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;