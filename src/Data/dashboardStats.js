import {
  FiSlash,
  FiAlertTriangle,
  FiAlertCircle,
  FiSearch,
} from "react-icons/fi";

export const dashboardStats = [
  {
    id: 1,
    title: "Critical Severity",
    value: 86,
    change: "+2% increase than yesterday",
    trendColor: "text-pink-600",
    icon: FiSlash,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    id: 2,
    title: "High Severity",
    value: 16,
    change: "+0.9% increase than yesterday",
    trendColor: "text-orange-500",
    icon: FiAlertTriangle,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    id: 3,
    title: "Medium Severity",
    value: 26,
    change: "+0.9% decrease than yesterday",
    trendColor: "text-green-600",
    icon: FiAlertCircle,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    id: 4,
    title: "Low Severity",
    value: 16,
    change: "+0.9% increase than yesterday",
    trendColor: "text-blue-600",
    icon: FiSearch,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
];