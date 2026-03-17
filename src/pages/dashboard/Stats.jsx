// const Stats = () => {
//   const metrics = [
//     { label: "Total Users", value: "12,345", change: "+12%", icon: "👥" },
//     { label: "Revenue", value: "$45,678", change: "+23%", icon: "💰" },
//     { label: "Active Sessions", value: "567", change: "+5%", icon: "⚡" },
//     { label: "Conversion Rate", value: "3.2%", change: "-2%", icon: "📊" },
//   ];

//   const recentActivity = [
//     { action: "New user registered", time: "2 minutes ago", status: "success" },
//     { action: "Payment processed", time: "15 minutes ago", status: "success" },
//     { action: "Server backup completed", time: "1 hour ago", status: "info" },
//     { action: "New feature deployed", time: "3 hours ago", status: "info" },
//     { action: "Error rate spike detected", time: "5 hours ago", status: "warning" },
//   ];

//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-gray-900 mb-6">Statistics</h2>

//       {/* Metrics Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
//         {metrics.map((metric, index) => (
//           <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
//             <div className="flex items-start justify-between">
//               <div>
//                 <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
//                 <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
//                 <p className={`text-sm mt-2 ${
//                   metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
//                 }`}>
//                   {metric.change} from last month
//                 </p>
//               </div>
//               <span className="text-3xl">{metric.icon}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Recent Activity */}
//       <div>
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
//         <div className="bg-gray-50 rounded-xl divide-y divide-gray-200">
//           {recentActivity.map((activity, index) => (
//             <div key={index} className="flex items-center justify-between p-4">
//               <div className="flex items-center space-x-3">
//                 <div className={`w-2 h-2 rounded-full ${
//                   activity.status === 'success' ? 'bg-green-500' :
//                   activity.status === 'warning' ? 'bg-yellow-500' :
//                   'bg-blue-500'
//                 }`} />
//                 <span className="text-gray-900">{activity.action}</span>
//               </div>
//               <span className="text-sm text-gray-500">{activity.time}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Chart Placeholder */}
//       <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="font-semibold">Performance Overview</h3>
//           <span className="text-sm opacity-90">Last 30 days</span>
//         </div>
//         <div className="h-32 flex items-end space-x-2">
//           {[65, 45, 85, 55, 75, 95, 70].map((height, i) => (
//             <div key={i} className="flex-1 bg-white/20 rounded-t-lg" style={{ height: `${height}%` }}>
//               <div className="w-full h-full bg-white/30 rounded-t-lg animate-pulse" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stats;








const Stats = () => {
  return (
    <div>
      <h3>Stats Page</h3>
      <p>Yahan analytics ya stats show honge</p>
    </div>
  );
};

export default Stats;