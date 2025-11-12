import { useState } from "react";
import { useLocation } from "wouter";
import GitHubSidebar from "../components/Dashboard/GitHubSidebar";
import { Shield, Users, Lock, Activity, TrendingUp, CheckCircle2, AlertCircle, Clock } from "lucide-react";

export default function Dashboard() {
  const [, setLocation] = useLocation();

  const statsCards = [
    {
      title: "Active Devices",
      value: "1,284",
      change: "+12% from last month",
      icon: Shield,
      color: "text-[#FFD700]",
      bgColor: "bg-[#FFD700]/10",
    },
    {
      title: "Total Users",
      value: "4,592",
      change: "+8% from last month",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
    },
    {
      title: "Security Score",
      value: "98.5%",
      change: "Excellent rating",
      icon: Lock,
      color: "text-green-600",
      bgColor: "bg-green-600/10",
    },
    {
      title: "Uptime",
      value: "99.9%",
      change: "Last 30 days",
      icon: Activity,
      color: "text-purple-600",
      bgColor: "bg-purple-600/10",
    },
  ];

  const recentActivity = [
    { type: "success", message: "Device authentication successful", time: "2 minutes ago", icon: CheckCircle2 },
    { type: "success", message: "New user registered", time: "15 minutes ago", icon: Users },
    { type: "warning", message: "Firmware update available", time: "1 hour ago", icon: AlertCircle },
    { type: "success", message: "Security scan completed", time: "2 hours ago", icon: Shield },
  ];

  const quickActions = [
    { label: "View Demo", action: () => setLocation("/#demo"), icon: Activity },
    { label: "Security Settings", action: () => setLocation("/#security"), icon: Lock },
    { label: "View Analytics", action: () => setLocation("/#market"), icon: TrendingUp },
    { label: "Documentation", action: () => setLocation("/#integration"), icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      {/* GitHub-style Sidebar */}
      <GitHubSidebar />

      {/* Main Content */}
      <main className="pt-20 px-5 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#0D0D0D] mb-2">
              SecureAuth Pro Dashboard
            </h1>
            <p className="text-lg text-[#3B2F2F]">
              Monitor your authentication system and security metrics
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-[#3B2F2F]/20 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                  <h3 className="text-sm font-medium text-[#3B2F2F] mb-1">
                    {stat.title}
                  </h3>
                  <p className="text-3xl font-bold text-[#0D0D0D] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#3B2F2F]">{stat.change}</p>
                </div>
              );
            })}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md border border-[#3B2F2F]/20">
              <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#FFD700]" />
                Recent Activity
              </h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#F5F5DC]/50 transition-colors"
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          activity.type === "success"
                            ? "bg-green-100"
                            : "bg-yellow-100"
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 ${
                            activity.type === "success"
                              ? "text-green-600"
                              : "text-yellow-600"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-[#0D0D0D]">
                          {activity.message}
                        </p>
                        <p className="text-xs text-[#3B2F2F] mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-[#3B2F2F]/20">
              <h2 className="text-xl font-semibold text-[#0D0D0D] mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={index}
                      onClick={action.action}
                      className="w-full flex items-center gap-3 p-3 rounded-lg bg-[#F5F5DC] hover:bg-[#FFD700]/20 border border-[#3B2F2F]/10 transition-all hover:border-[#FFD700]"
                    >
                      <Icon className="w-5 h-5 text-[#FFD700]" />
                      <span className="text-sm font-medium text-[#0D0D0D]">
                        {action.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="mt-6 bg-gradient-to-r from-[#0D0D0D] to-[#3B2F2F] p-6 rounded-lg shadow-md text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">System Status</h3>
                <p className="text-sm text-[#F5F5DC]">
                  All systems operational • Last checked: Just now
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Online</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
