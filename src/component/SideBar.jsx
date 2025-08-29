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
import { Link } from "react-router-dom";
import { Logout } from "../services/Auth";
function Sidebar() {
  async function handleLogout() {
    try {
      const res = await Logout(WholeUserObject.access_token);

      if (res.status) {
        setUser(null);
        Navigate("/login");
      }
      console.log("logout", res);
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <aside className="w-64 bg-white shadow-sm h-screen sticky top-0">
      <nav className="mt-6 px-4">
        <div className="space-y-2">
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg"
          >
            <TrendingUp className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </a>
          <Link
            to="/booking"
            className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Calendar className="w-5 h-5" />
            <span>Bookings</span>
          </Link>
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Users className="w-5 h-5" />
            <span>Coaches</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <DollarSign className="w-5 h-5" />
            <span>Revenue</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <MapPin className="w-5 h-5" />
            <span>Routes</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="space-y-2">
            <a
              href="#"
              className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </a>
            <div
              onClick={handleLogout}
              className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
