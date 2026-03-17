const About = () => {
  const team = [
    {
      name: "React Router",
      role: "Routing Library",
      description: "Nested routes ke liye best library",
      icon: "🔄",
    },
    {
      name: "Tailwind CSS",
      role: "Styling Framework",
      description: "Utility-first CSS for modern design",
      icon: "🎨",
    },
    {
      name: "Outlet",
      role: "React Router Component",
      description: "Child routes render karne ke liye",
      icon: "🪆",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About This Project</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ye project React Router ke nested routes ko demonstrate karta hai. Dashboard ke andar teen child pages hain jo same layout share karte hain.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Concepts</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-900">1. Nested Routes</h3>
              <p className="text-gray-600">Routes ke andar routes - Dashboard ek layout hai jiske andar teen pages hain</p>
            </div>
            
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-semibold text-gray-900">2. Outlet Component</h3>
              <p className="text-gray-600">Dashboard component mein Outlet lagaya hai jo child pages ko render karta hai</p>
            </div>
            
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="font-semibold text-gray-900">3. Shared Layout</h3>
              <p className="text-gray-600">Sidebar aur layout sab child pages ke liye same rahta hai</p>
            </div>
          </div>

          {/* Navigation Example */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">URL Examples:</p>
            <ul className="space-y-2 font-mono text-sm">
              <li>🔵 /dashboard/profile - Profile page</li>
              <li>🟢 /dashboard/settings - Settings page</li>
              <li>🟣 /dashboard/stats - Statistics page</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;






// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <p>Yeh about section hai</p>
//     </div>
//   );
// };

// export default About;