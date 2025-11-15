import { useState } from "react";
import { useLocation } from "wouter";
import GitHubSidebar from "../components/Dashboard/GitHubSidebar";
import { SFSCircuitFlow } from "../components/SFSCircuitFlow";
import { Shield, Users, Lock, Activity, TrendingUp, CheckCircle2, AlertCircle, Clock, Zap, Database, Eye, Server } from "lucide-react";

export default function Dashboard() {
  const [, setLocation] = useLocation();

  const statsCards = [
    {
      title: "Active Devices",
      value: "1,284",
      change: "+12% from last month",
      icon: Shield,
      gradient: "from-[#FFD700] to-[#E6C200]",
    },
    {
      title: "Total Users",
      value: "4,592",
      change: "+8% from last month",
      icon: Users,
      gradient: "from-[#FFD700] to-[#E6C200]",
    },
    {
      title: "Security Score",
      value: "98.5%",
      change: "Excellent rating",
      icon: Lock,
      gradient: "from-[#FFD700] to-[#E6C200]",
    },
    {
      title: "Uptime",
      value: "99.9%",
      change: "Last 30 days",
      icon: Activity,
      gradient: "from-[#FFD700] to-[#E6C200]",
    },
  ];

  const recentActivity = [
    { type: "success", message: "Device authentication successful", time: "2 minutes ago", icon: CheckCircle2 },
    { type: "success", message: "New user registered", time: "15 minutes ago", icon: Users },
    { type: "warning", message: "Firmware update available", time: "1 hour ago", icon: AlertCircle },
    { type: "success", message: "Security scan completed", time: "2 hours ago", icon: Shield },
    { type: "success", message: "Cold storage backup verified", time: "3 hours ago", icon: Database },
  ];

  const quickActions = [
    { label: "View Demo", action: () => setLocation("/#demo"), icon: Zap },
    { label: "Security Settings", action: () => setLocation("/#security"), icon: Lock },
    { label: "View Analytics", action: () => setLocation("/#market"), icon: TrendingUp },
    { label: "Documentation", action: () => setLocation("/#integration"), icon: Shield },
  ];

  const systemMetrics = [
    { label: "AES-256 Encryption", value: "Active", icon: Lock },
    { label: "Tamper Detection", value: "Verified", icon: Eye },
    { label: "Cold Storage", value: "Enabled", icon: Server },
    { label: "FIDO2 Certified", value: "Compliant", icon: CheckCircle2 },
  ];

  return (
    <div className="relative min-h-screen bg-sf-black overflow-hidden">
      {/* Circuit Flow Background */}
      <SFSCircuitFlow />

      {/* GitHub-style Sidebar */}
      <GitHubSidebar />

      {/* Main Content */}
      <main className="relative z-10 pt-20 px-5 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 animate-sf-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-3">
              <span className="text-sf-beige">SecureAuth Pro</span>{" "}
              <span className="gradient-gold">Dashboard</span>
            </h1>
            <p className="text-xl text-sf-secondary">
              Real-time authentication system monitoring and security analytics
            </p>
          </div>

          {/* Stats Cards - Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {statsCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 hover-elevate group animate-sf-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-sf-black" />
                    </div>
                    <div className="text-xs text-sf-gold font-semibold uppercase tracking-wider">
                      Live
                    </div>
                  </div>
                  <h3 className="text-sm font-medium text-sf-secondary mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-4xl font-bold text-sf-beige mb-2 bg-clip-text">
                    {stat.value}
                  </p>
                  <p className="text-xs text-sf-gold">{stat.change}</p>
                </div>
              );
            })}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Recent Activity - Glass Panel */}
            <div className="lg:col-span-2 glass-card-lg p-8 hover-elevate-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-sf-beige flex items-center gap-3">
                  <div className="p-2 bg-sf-gold/10 rounded-lg">
                    <Clock className="w-6 h-6 text-sf-gold" />
                  </div>
                  Recent Activity
                </h2>
                <div className="text-xs text-sf-gold uppercase tracking-wider font-semibold">
                  Real-time
                </div>
              </div>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl glass-card-sm hover:border-sf-gold/40 transition-all group"
                    >
                      <div
                        className={`p-2.5 rounded-lg ${
                          activity.type === "success"
                            ? "bg-sf-gold/20"
                            : "bg-[#E6C200]/20"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            activity.type === "success"
                              ? "text-sf-gold"
                              : "text-[#E6C200]"
                          } group-hover:scale-110 transition-transform`}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-sf-beige">
                          {activity.message}
                        </p>
                        <p className="text-xs text-sf-secondary mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions - Glass Panel */}
            <div className="glass-card-lg p-8 hover-elevate-sm">
              <h2 className="text-2xl font-bold text-sf-beige mb-6 flex items-center gap-3">
                <div className="p-2 bg-sf-gold/10 rounded-lg">
                  <Zap className="w-6 h-6 text-sf-gold" />
                </div>
                Quick Actions
              </h2>
              <div className="space-y-3">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={index}
                      onClick={action.action}
                      className="w-full btn-sf-glass flex items-center gap-3 justify-start hover:border-sf-gold/50 group"
                    >
                      <Icon className="w-5 h-5 text-sf-gold group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-semibold text-sf-beige">
                        {action.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* CTA Button */}
              <button className="w-full btn-sf-gold mt-6 group">
                <Shield className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                View Full Report
              </button>
            </div>
          </div>

          {/* System Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {systemMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="glass-card-sm p-4 hover-glow group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-sf-gold/10 rounded-lg">
                      <Icon className="w-5 h-5 text-sf-gold group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-xs text-sf-secondary">{metric.label}</p>
                      <p className="text-sm font-bold text-sf-gold">{metric.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* System Status - Premium Banner */}
          <div className="glass-card-lg p-8 gold-glow-strong border-2 border-sf-gold/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-[#FFD700] to-[#E6C200] rounded-2xl animate-sf-pulse-gold">
                  <Shield className="w-8 h-8 text-sf-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-sf-beige mb-1">
                    All Systems Operational
                  </h3>
                  <p className="text-sm text-sf-secondary">
                    Last security scan: <span className="text-sf-gold font-semibold">Just now</span> •
                    Uptime: <span className="text-sf-gold font-semibold">99.9%</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-4 h-4 bg-sf-gold rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-sf-gold rounded-full animate-ping"></div>
                </div>
                <span className="text-lg font-bold text-sf-gold uppercase tracking-wider">
                  Online
                </span>
              </div>
            </div>
          </div>

          {/* Footer Credit */}
          <div className="mt-12 text-center">
            <p className="text-sm text-sf-secondary">
              Powered by <span className="text-sf-gold font-semibold">SmartFlow Systems</span> •
              Created by <span className="text-sf-gold font-semibold">Gareth Bowers</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
