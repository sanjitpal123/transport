import React, { useContext } from "react";
import {
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  MapPin,
  Star,
  Bell,
  Search,
  MoreVertical,
  User as UserIcon, // ✅ Keep this
  Settings,
  LogOut,
} from "lucide-react";

import { GlobalStore } from "../component/GlobalStore";
import { Logout } from "../services/Auth";
import { Link, useNavigate } from "react-router-dom";
import Headers from "../component/Header";
import Sidebar from "../component/SideBar";

function Dashboard() {
  const Navigate = useNavigate();
  const { User, setUser } = useContext(GlobalStore);
  const WholeUserObject = JSON.parse(localStorage.getItem("user"));
  console.log("wholeuser", WholeUserObject);
  const LoginUser = WholeUserObject.user;
  console.log("login user", LoginUser);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Headers />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome back, {LoginUser?.name}!
            </h2>
            <p className="text-gray-600">
              Here's what's happening with your coach hiring business today.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Bookings
                  </p>
                  <p className="text-2xl font-bold text-gray-900">1,247</p>
                  <p className="text-sm text-green-600 mt-1">
                    +12.5% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Active Coaches
                  </p>
                  <p className="text-2xl font-bold text-gray-900">89</p>
                  <p className="text-sm text-green-600 mt-1">
                    +3 new this week
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">$84,592</p>
                  <p className="text-sm text-green-600 mt-1">
                    +8.2% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Avg. Rating
                  </p>
                  <p className="text-2xl font-bold text-gray-900">4.8</p>
                  <p className="text-sm text-green-600 mt-1">
                    +0.2 from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Bookings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Recent Bookings
                  </h3>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    View all
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      id: "#BK001",
                      customer: "Sarah Johnson",
                      route: "NYC → Boston",
                      date: "Today, 2:30 PM",
                      status: "confirmed",
                    },
                    {
                      id: "#BK002",
                      customer: "Mike Chen",
                      route: "LA → San Diego",
                      date: "Today, 4:00 PM",
                      status: "pending",
                    },
                    {
                      id: "#BK003",
                      customer: "Emma Davis",
                      route: "Chicago → Detroit",
                      date: "Tomorrow, 9:00 AM",
                      status: "confirmed",
                    },
                    {
                      id: "#BK004",
                      customer: "Robert Wilson",
                      route: "Miami → Orlando",
                      date: "Tomorrow, 1:15 PM",
                      status: "confirmed",
                    },
                  ].map((booking) => (
                    <div
                      key={booking.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <UserIcon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {booking.customer}
                          </p>
                          <p className="text-sm text-gray-600">
                            {booking.route}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-900 font-medium">
                          {booking.date}
                        </p>
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            booking.status === "confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Performing Coaches */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Top Performing Coaches
                  </h3>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    View all
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      name: "Premium Express",
                      rating: 4.9,
                      trips: 342,
                      revenue: "$23,450",
                    },
                    {
                      name: "Luxury Cruiser",
                      rating: 4.8,
                      trips: 298,
                      revenue: "$19,890",
                    },
                    {
                      name: "City Connect",
                      rating: 4.7,
                      trips: 276,
                      revenue: "$18,340",
                    },
                    {
                      name: "Swift Travel",
                      rating: 4.6,
                      trips: 251,
                      revenue: "$16,780",
                    },
                  ].map((coach, index) => (
                    <div
                      key={coach.name}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {coach.name}
                          </p>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-600 ml-1">
                                {coach.rating}
                              </span>
                            </div>
                            <span className="text-gray-400">•</span>
                            <span className="text-sm text-gray-600">
                              {coach.trips} trips
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          {coach.revenue}
                        </p>
                        <p className="text-sm text-gray-600">This month</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="flex flex-col items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <Calendar className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-sm font-medium text-blue-700">
                  New Booking
                </span>
              </button>
              <button className="flex flex-col items-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                <Users className="w-8 h-8 text-green-600 mb-2" />
                <span className="text-sm font-medium text-green-700">
                  Add Coach
                </span>
              </button>
              <button className="flex flex-col items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                <MapPin className="w-8 h-8 text-purple-600 mb-2" />
                <span className="text-sm font-medium text-purple-700">
                  Manage Routes
                </span>
              </button>
              <button className="flex flex-col items-center p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                <TrendingUp className="w-8 h-8 text-orange-600 mb-2" />
                <span className="text-sm font-medium text-orange-700">
                  View Reports
                </span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
