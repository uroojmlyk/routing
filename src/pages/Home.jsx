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






const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Yeh simple home page hai</p>
    </div>
  );
};

export default Home;