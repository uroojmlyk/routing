// const Profile = () => {
//   const user = {
//     name: "Alex Johnson",
//     email: "alex@example.com",
//     role: "Senior Developer",
//     location: "New York, USA",
//     joinDate: "January 2024",
//     bio: "Passionate developer with expertise in React, Node.js, and Tailwind CSS. Love building scalable applications with clean code.",
//   };

//   const stats = [
//     { label: "Projects", value: "24" },
//     { label: "Followers", value: "1.2k" },
//     { label: "Following", value: "342" },
//   ];

//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile</h2>
      
//       <div className="space-y-6">
//         {/* Profile Header */}
//         <div className="flex items-center space-x-4">
//           <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold">
//             {user.name.charAt(0)}
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
//             <p className="text-gray-600">{user.role}</p>
//             <p className="text-sm text-gray-500 mt-1">{user.email}</p>
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-3 gap-4">
//           {stats.map((stat, index) => (
//             <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
//               <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
//               <div className="text-sm text-gray-600">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Bio */}
//         <div className="bg-gray-50 rounded-xl p-6">
//           <h4 className="font-semibold text-gray-900 mb-2">About</h4>
//           <p className="text-gray-600">{user.bio}</p>
//         </div>

//         {/* Details Grid */}
//         <div className="grid md:grid-cols-2 gap-4">
//           <div className="bg-gray-50 rounded-xl p-4">
//             <span className="text-sm text-gray-500">Location</span>
//             <p className="font-medium text-gray-900">{user.location}</p>
//           </div>
//           <div className="bg-gray-50 rounded-xl p-4">
//             <span className="text-sm text-gray-500">Member Since</span>
//             <p className="font-medium text-gray-900">{user.joinDate}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;








const Profile = () => {
  return (
    <div>
      <h3>Profile Page</h3>
      <p>User ka profile data yahan show hoga</p>
    </div>
  );
};

export default Profile;