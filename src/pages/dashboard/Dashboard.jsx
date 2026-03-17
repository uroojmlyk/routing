import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const sidebarLinks = [
    {
      name: "Profile",
      path: "profile",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      name: "Settings",
      path: "settings",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      name: "Statistics",
      path: "stats",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Nested routes example - Sidebar sab pages par same rahega</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-64 shrink-0">
          <div className="bg-white rounded-2xl shadow-lg p-4 sticky top-24">
            <div className="space-y-1">
              {sidebarLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`
                  }
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
                </NavLink>
              ))}
            </div>

            {/* Info Card */}
            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <div className="flex items-center space-x-2 text-blue-600 mb-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">Nested Routes</span>
              </div>
              <p className="text-sm text-gray-600">
                Sidebar fixed hai, content change ho raha hai <code className="bg-white px-1 rounded">{'<Outlet />'}</code> se.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Outlet renders child pages here */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;







// import { Link, Outlet } from "react-router-dom";

// const Dashboard = () => {
//   return (
//     <div style={{ display: "flex", marginTop: "20px" }}>
      
//       {/* Sidebar */}
//       <div style={{ width: "200px", borderRight: "1px solid gray", padding: "10px" }}>
//         <h3>Dashboard</h3>

//         <ul style={{ listStyle: "none", padding: 0 }}>
//           <li><Link to="profile">Profile</Link></li>
//           <li><Link to="settings">Settings</Link></li>
//           <li><Link to="stats">Stats</Link></li>
//           <li><Link to="posts">Posts</Link></li>
//         </ul>
//       </div>

//       {/* Content Area */}
//       <div style={{ padding: "20px", flex: 1 }}>
//         <h2>Welcome to Dashboard</h2>

//         {/* YAHAN CHILD ROUTES RENDER HONGE */}
//         <Outlet />
//       </div>

//     </div>
//   );
// };

// export default Dashboard;