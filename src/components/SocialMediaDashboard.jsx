import React, { useState } from 'react';
import {
  Users,
  MessageSquare,
  Heart,
  UserPlus,
  FileText,
  BarChart3,
  TrendingUp,
  Activity,
  Mail,
  Phone,
  Calendar,
  Search,
  Filter
} from 'lucide-react';

const SocialMediaDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data based on your Zoho Creator structure
  const dashboardData = {
    stats: {
      totalUsers: 1247,
      totalPosts: 3456,
      totalComments: 8901,
      totalLikes: 15432,
      totalFollowers: 5678,
      totalMessages: 2345
    },
    recentUsers: [
      {
        id: "4464954000001415005",
        fullName: "Arun Kumar",
        email: "arunp@20802@gmail.com",
        username: "arun",
        phone: "+91343234235213",
        gender: "Male",
        dateOfBirth: "01-Feb-2005",
        profilePicture: "/api/v2.1/user3_demo121/vchat-social-media-application-vikraman/report/All_Users/4464954000001415005/Profile_Picture/download"
      },
      {
        id: "4464954000001410005",
        fullName: "Vikraman Mathivanan",
        email: "vikramanm.py@gmail.com",
        username: "romanvik1",
        phone: "+919444438137",
        gender: "Male",
        dateOfBirth: "15-Mar-1995",
        profilePicture: "/api/v2.1/user3_demo121/vchat-social-media-application-vikraman/report/All_Users/4464954000001410005/Profile_Picture/download"
      }
    ],
    recentActivity: [
      { type: 'user', action: 'New user registered', user: 'Arun Kumar', time: '2 hours ago' },
      { type: 'post', action: 'New post created', user: 'Vikraman Mathivanan', time: '4 hours ago' },
      { type: 'comment', action: 'Comment posted', user: 'Arun Kumar', time: '6 hours ago' },
      { type: 'like', action: 'Post liked', user: 'Vikraman Mathivanan', time: '8 hours ago' },
      { type: 'follow', action: 'Started following', user: 'Arun Kumar', time: '1 day ago' }
    ]
  };

  const StatCard = ({ title, value, icon: Icon, trend, color = "blue" }) => (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value.toLocaleString()}</p>
          {trend && (
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">{trend}% this month</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-full bg-${color}-100`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
      </div>
    </div>
  );

  const UserCard = ({ user }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-lg">
            {user.fullName.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{user.fullName}</h3>
          <p className="text-sm text-gray-600">@{user.username}</p>
          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              {user.email}
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              {user.phone}
            </div>
          </div>
        </div>
        <div className="text-right text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {user.dateOfBirth}
          </div>
          <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
            {user.gender}
          </span>
        </div>
      </div>
    </div>
  );

  const ActivityItem = ({ activity }) => {
    const getIcon = () => {
      switch (activity.type) {
        case 'user': return <Users className="w-5 h-5 text-blue-600" />;
        case 'post': return <FileText className="w-5 h-5 text-green-600" />;
        case 'comment': return <MessageSquare className="w-5 h-5 text-purple-600" />;
        case 'like': return <Heart className="w-5 h-5 text-red-600" />;
        case 'follow': return <UserPlus className="w-5 h-5 text-indigo-600" />;
        default: return <Activity className="w-5 h-5 text-gray-600" />;
      }
    };

    return (
      <div className="flex items-center space-x-3 py-3 border-b border-gray-100 last:border-b-0">
        <div className="flex-shrink-0">
          {getIcon()}
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-900">
            <span className="font-medium">{activity.user}</span> {activity.action}
          </p>
          <p className="text-xs text-gray-500">{activity.time}</p>
        </div>
      </div>
    );
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'users', name: 'Users', icon: Users },
    { id: 'posts', name: 'Posts', icon: FileText },
    { id: 'comments', name: 'Comments', icon: MessageSquare },
    { id: 'likes', name: 'Likes', icon: Heart },
    { id: 'followers', name: 'Followers', icon: UserPlus },
    { id: 'messages', name: 'Messages', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">VChat Dashboard</h1>
              <p className="text-gray-600">Social Media Application Analytics</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatCard
                title="Total Users"
                value={dashboardData.stats.totalUsers}
                icon={Users}
                trend={12}
                color="blue"
              />
              <StatCard
                title="Total Posts"
                value={dashboardData.stats.totalPosts}
                icon={FileText}
                trend={8}
                color="green"
              />
              <StatCard
                title="Total Comments"
                value={dashboardData.stats.totalComments}
                icon={MessageSquare}
                trend={15}
                color="purple"
              />
              <StatCard
                title="Total Likes"
                value={dashboardData.stats.totalLikes}
                icon={Heart}
                trend={22}
                color="red"
              />
              <StatCard
                title="Total Followers"
                value={dashboardData.stats.totalFollowers}
                icon={UserPlus}
                trend={18}
                color="indigo"
              />
              <StatCard
                title="Total Messages"
                value={dashboardData.stats.totalMessages}
                icon={Mail}
                trend={5}
                color="yellow"
              />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Users */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Users</h3>
                </div>
                <div className="p-6 space-y-4">
                  {dashboardData.recentUsers.map((user) => (
                    <UserCard key={user.id} user={user} />
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                </div>
                <div className="p-6">
                  {dashboardData.recentActivity.map((activity, index) => (
                    <ActivityItem key={index} activity={activity} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other tab content would be implemented similarly */}
        {activeTab !== 'overview' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                {tabs.find(tab => tab.id === activeTab)?.icon &&
                  React.createElement(tabs.find(tab => tab.id === activeTab).icon, {
                    className: "w-8 h-8 text-gray-600"
                  })
                }
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {tabs.find(tab => tab.id === activeTab)?.name} Section
              </h3>
              <p className="text-gray-600">
                This section will display detailed {tabs.find(tab => tab.id === activeTab)?.name.toLowerCase()}
                management and analytics. Connect your Zoho Creator API to populate this section with real data.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialMediaDashboard;
