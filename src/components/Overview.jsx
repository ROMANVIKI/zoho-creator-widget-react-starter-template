const Overview = () => {
  return (
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

  )
}

export default Overview
