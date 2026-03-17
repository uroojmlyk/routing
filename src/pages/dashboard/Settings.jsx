const Settings = () => {
  const settingsSections = [
    {
      title: "Account Settings",
      items: [
        { name: "Email Preferences", description: "Manage email notifications" },
        { name: "Password", description: "Change your password" },
        { name: "Two-Factor Authentication", description: "Add extra security" },
      ],
    },
    {
      title: "Appearance",
      items: [
        { name: "Theme", description: "Light, Dark, or System" },
        { name: "Language", description: "Choose your preferred language" },
        { name: "Time Zone", description: "Set your local time zone" },
      ],
    },
    {
      title: "Privacy",
      items: [
        { name: "Profile Visibility", description: "Control who can see your profile" },
        { name: "Data Sharing", description: "Manage data preferences" },
        { name: "Activity Status", description: "Show when you're active" },
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
      
      <div className="space-y-8">
        {settingsSections.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h3>
            <div className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    Edit
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Save Button */}
        <div className="pt-4">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition-all">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;







// const Settings = () => {
//   return (
//     <div>
//       <h3>Settings Page</h3>
//       <p>User settings yahan manage hongi</p>
//     </div>
//   );
// };

// export default Settings;



