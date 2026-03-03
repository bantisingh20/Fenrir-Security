import React, { useState } from "react";
import { ArrowDown, ArrowUp, Ban, Bell, BlocksIcon, CalendarCheck2, ClipboardCheck, Columns2, Home, LayoutDashboard, ListFilter, Plus, RefreshCcw, ScanText, Search, SearchAlert, SearchCheck, Settings, SettingsIcon, TriangleAlert, User } from "lucide-react";
import ClientIcon from "../Components/UI-Blocks/ClientIcon";

export default function Dashboard() {
    const [activeItem, setActiveItem] = useState("Dashboard");

    const menuItems = [
        { label: "Dashboard", Icon: LayoutDashboard },
        { label: "Projects", Icon: ClipboardCheck },
        { label: "Scans", Icon: ScanText },
        { label: "Schedule", Icon: CalendarCheck2 },
        { label: "Notifications", Icon: Bell },
        { label: "Settings", Icon: Settings },
        { label: "Support", Icon: Info },
    ];

    return (
        <div className="flex h-screen bg-gray-100 text-gray-800">

            <aside className="w-64 bg-white border-r border-gray-100 flex flex-col">
                <div className="p-6 flex items-center gap-2 font-semibold text-lg text-teal-600">
                    <ClientIcon />
                    aps
                </div>

                <nav className="px-4 space-y-2 text-sm">
                    {menuItems.map((item) => (
                        <SidebarItem
                            key={item.label}
                            active={activeItem === item.label}
                            label={item.label}
                            Icon={item.Icon}
                            onClick={() => setActiveItem(item.label)}
                        />
                    ))}
                </nav>


                <div className="mt-auto p-4 border-t flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-400"><User /></div>
                    <div>
                        <p className="text-xs text-gray-500">admin@edu.com</p>
                        <p className="text-sm font-medium">Security Lead</p>
                    </div>
                </div>
            </aside>


            <div className="flex-1 flex flex-col">


                <header className="border px-4 sm:px-6 lg:px-8 py-4 border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                        {/* Breadcrumb / Page Title */}
                        <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-medium text-gray-600">
                            <span className="flex items-center gap-1">
                                Scan <Home className="w-4 h-4" />
                            </span>
                            <span className="text-gray-400">/</span>
                            <span className="text-gray-400">Private Assets</span>
                            <span className="text-gray-400">/</span>
                            <span className="text-teal-600 font-semibold whitespace-nowrap">
                                New Scan
                            </span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 mt-2 sm:mt-0">
                            <button className="px-4 py-2 border border-gray-300 font-semibold rounded-lg text-sm hover:bg-gray-50 transition">
                                Export Report
                            </button>

                            <button className="px-4 py-2 text-red-600 bg-red-100 border border-red-200 font-medium rounded-lg text-sm hover:bg-red-200 transition">
                                Stop Scan
                            </button>
                        </div>

                    </div>
                </header>
                <main className="p-8 overflow-auto">

                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-8 text-sm text-gray-500 mb-6 items-start sm:items-center">
                        <Info label="Org" value="Project X" />
                        <span className="hidden sm:inline">|</span>

                        <Info label="Owner" value="Namangiri" />
                        <span className="hidden sm:inline">|</span>

                        <Info label="Total Scans" value="100" />
                        <span className="hidden sm:inline">|</span>

                        <Info label="Scheduled" value="1000" />
                        <span className="hidden sm:inline">|</span>

                        <Info label="Rescans" value="100" />
                        <span className="hidden sm:inline">|</span>

                        <Info label="Failed Scans" value="100" />

                        <span className="flex items-center gap-1 mt-2 sm:mt-0">
                            <RefreshCcw className="w-4 h-4 text-teal-400" /> 10 min ago
                        </span>
                    </div>

                    <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-3 mb-8">
                        <StatCard title="Critical Severity" value="86" changeText="+2%" changeType="increase" Icon={Ban} IconColor="red" />
                        <StatCard title="High Severity" value="16" changeText="+0.9%" changeType="increase" Icon={TriangleAlert} IconColor="orange" />
                        <StatCard title="Medium Severity" value="26" changeText="-0.9%" changeType="decrease" Icon={TriangleAlert} IconColor="yellow" />
                        <StatCard title="Low Severity" value="16" changeText="+0.9%" changeType="increase" Icon={SearchAlert} IconColor="blue" />
                    </div>

                    <div className="rounded-xl p-6">

                        <div className="flex flex-wrap gap-3 mb-6 items-center">
                            <div className="relative flex-1 min-w-[220px]">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                <input
                                    type="text"
                                    placeholder="Search scans by name or type..."
                                    className="w-full border border-gray-300 rounded-sm pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                />
                            </div>

                            <button className="flex items-center gap-1 border border-gray-300 rounded-sm px-4 py-2 text-sm hover:bg-gray-100 transition">
                                <ListFilter className="w-4 h-4" />
                                Filter
                            </button>

                            <button className="flex items-center gap-1 border border-gray-300 rounded-sm px-4 py-2 text-sm hover:bg-gray-100 transition">
                                <Columns2 className="w-4 h-4" />
                                Column
                            </button>

                            <button className="flex items-center gap-1 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700 transition">
                                <Plus className="w-4 h-4" />
                                New scan
                            </button>
                        </div>

                        <table className="w-full text-sm min-w-[600px]">
                            <thead className="text-gray-400 border-b bg-gray-50 ">
                                <tr>
                                    <th className="text-left py-3">Scan Name</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Progress</th>
                                    <th>Vulnerability</th>
                                    <th>Last Scan</th>
                                </tr>
                            </thead>

                            <tbody>
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i} className="text-sm font-medium">
                                        <td className="py-4">Web App Servers</td>
                                        <td className="text-center">Greybox</td>
                                        <td className="text-center">
                                            <StatusBadge status="Completed" />
                                        </td>
                                        <td>
                                            <Progress value={100} />
                                        </td>
                                        <td>
                                            <Vulnerability />
                                        </td>
                                        <td className="text-center text-gray-500">
                                            4d ago
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </main>
            </div>
        </div>
    );
}



const SidebarItem = ({ label, active, Icon, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`px-4 py-2 rounded-full cursor-pointer transition-colors duration-200 
        flex items-center gap-2
        ${active
                    ? "bg-teal-100 text-teal-700"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
        >
            <Icon className="w-4 h-4" strokeWidth={2.5} />
            <span className="font-medium">{label}</span>
        </div>
    );
};
const Info = ({ label, value, showcolon = true }) => (
    <div>
        <span className="text-gray-400">{label}{showcolon ? ":" : ""} </span>
        <span className="font-medium text-gray-700">{value}</span>
    </div>
);

const StatCard = ({
  title,
  value,
  changeText,
  changeType = "increase",
  Icon,
  IconColor = "teal",
}) => {
  const isIncrease = changeType === "increase";

  return (
    <div className="flex-1 min-w-[180px] rounded-2xl p-4 sm:p-6 flex flex-col justify-between gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-gray-400 text-xs sm:text-sm font-medium">{title}</p>
        <div className={`bg-${IconColor}-100 p-3 rounded-xl`}>
          <Icon className={`w-4 h-4 text-${IconColor}-500`} strokeWidth={3} />
        </div>
      </div>
 
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{value}</h2>

        <span
          className={`flex items-center gap-1 text-xs sm:text-sm ${
            isIncrease ? "text-red-500" : "text-green-500"
          }`}
        >
          {isIncrease ? (
            <ArrowUp className="w-3 h-3" strokeWidth={3} />
          ) : (
            <ArrowDown className="w-3 h-3" strokeWidth={3} />
          )}
          {changeText} {changeType} than yesterday
        </span>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }) => (
    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-xs">
        {status}
    </span>
);

const Progress = ({ value }) => (
    <div className="flex items-center gap-3">
        <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
                className="bg-teal-500 h-2 rounded-full"
                style={{ width: `${value}%` }}
            />
        </div>
        <span className="text-xs">{value}%</span>
    </div>
);

const Vulnerability = () => (
    <div className="flex gap-2 justify-center">
        <Chip color="bg-red-500" text="5" />
        <Chip color="bg-orange-400" text="12" />
        <Chip color="bg-yellow-400" text="23" />
        <Chip color="bg-green-500" text="18" />
    </div>
);

const Chip = ({ color, text }) => (
    <span className={`${color} text-white text-xs px-2 py-1 rounded font-medium`}>
        {text}
    </span>
);