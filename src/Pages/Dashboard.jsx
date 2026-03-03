import React from "react";
import { Ban, BlocksIcon, Home, RefreshCcw, SearchAlert, TriangleAlert } from "lucide-react";

export default function Dashboard() {
    return (
        <div className="flex h-screen bg-gray-100 text-gray-800">

            {/* SIDEBAR */}
            <aside className="w-64 bg-white border-r flex flex-col">
                <div className="p-6 flex items-center gap-2 font-semibold text-lg">
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    aps
                </div>

                <nav className="px-4 space-y-2 text-sm">
                    <SidebarItem active label="Dashboard" />
                    <SidebarItem label="Projects" />
                    <SidebarItem label="Scans" />
                    <SidebarItem label="Schedule" />
                    <SidebarItem label="Notifications" />
                    <SidebarItem label="Settings" />
                    <SidebarItem label="Support" />
                </nav>

                {/* USER */}
                <div className="mt-auto p-4 border-t flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-400"></div>
                    <div>
                        <p className="text-sm font-medium">Security Lead</p>
                        <p className="text-xs text-gray-500">admin@edu.com</p>
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <div className="flex-1 flex flex-col">

                {/* TOP BAR */}
                <header className="bg-white border-b px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                        {/* Left Side - Breadcrumb */}
                        <div className="flex items-center flex-wrap gap-2 text-sm sm:text-base font-medium text-gray-600">
                            <span className="flex items-center gap-1">
                                Scan <Home className="w-4 h-4" />
                            </span>
                            <span className="text-gray-400">/</span>
                            <span className="text-gray-400">Private Assets</span>

                            <span className="text-gray-400">/</span>

                            <span className="text-teal-600 font-semibold">
                                New Scan
                            </span>
                        </div>

                        {/* Right Side - Buttons */}
                        <div className="flex flex-wrap gap-3">
                            <button className="px-4 py-2 border border-gray-300 font-semibold rounded-lg text-sm hover:bg-gray-50 transition">
                                Export Report
                            </button>

                            <button className="px-4 py-2 text-red-600 bg-red-100 border border-red-200 font-medium rounded-lg text-sm hover:bg-red-200 transition">
                                Stop Scan
                            </button>
                        </div>

                    </div>
                </header>
                {/* CONTENT */}
                <main className="p-8 overflow-auto">

                    {/* INFO ROW */}
                    <div className="flex flex-wrap gap-8 text-sm text-gray-500 mb-6">
                        <Info label="Org" value="Project X" /> |
                        <Info label="Owner" value="Namangiri" /> |
                        <Info label="Total Scans" value="100" /> |
                        <Info label="Scheduled" value="1000" /> |
                        <Info label="Rescans" value="100" /> |
                        <Info label="Failed Scans" value="100" />
                        <span className="flex items-center gap-1">
                            <RefreshCcw className="w-4 h-4 text-teal-400" /> 10 min ago
                        </span>


                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-4 gap-3 mb-8">
                        
                        <StatCard title="Critical Severity" value="86" changeText="+2%" changeType="increase" Icon={Ban} IconColor="red" />
                        <StatCard title="High Severity" value="16" changeText="+0.9%" changeType="increase" Icon={TriangleAlert} IconColor="orange" />
                        <StatCard title="Medium Severity" value="26" changeText="-0.9%" changeType="decrease" Icon={TriangleAlert} IconColor="yellow" />
                        <StatCard title="Low Severity" value="16" changeText="+0.9%" changeType="increase" Icon={SearchAlert} IconColor="blue" />
                    </div>

                    {/* TABLE CARD */}
                    <div className="bg-white rounded-xl border p-6">

                        {/* SEARCH BAR */}
                        <div className="flex gap-3 mb-6">
                            <input
                                placeholder="Search scans by name or type..."
                                className="flex-1 border rounded-lg px-4 py-2 text-sm"
                            />

                            <button className="border px-4 rounded-lg text-sm">
                                Filter
                            </button>

                            <button className="border px-4 rounded-lg text-sm">
                                Column
                            </button>

                            <button className="bg-teal-600 text-white px-4 rounded-lg text-sm">
                                + New scan
                            </button>
                        </div>

                        {/* TABLE */}
                        <table className="w-full text-sm">
                            <thead className="text-gray-500 border-b">
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
                                    <tr key={i} className="border-b">
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

/* ---------- COMPONENTS ---------- */

const SidebarItem = ({ label, active }) => (
    <div
        className={`px-4 py-2 rounded-lg cursor-pointer ${active ? "bg-teal-100 text-teal-700" : "hover:bg-gray-100"
            }`}
    >
        {label}
    </div>
);

const Info = ({ label, value, showcolon = true }) => (
    <div>
        <span className="text-gray-400">{label}{showcolon ? ":" : ""} </span>
        <span className="font-medium text-gray-700">{value}</span>
    </div>
);

const Stat = ({ title, value, color, icon }) => (
    <div className="border rounded-xl p-5">
        <p className="text-sm text-gray-500 ">{title}</p>
        <p className={`text-2xl font-semibold ${color}`}>{value}</p>
    </div>
);


const StatCard = ({
  title,
  value,
  changeText,
  changeType = "increase",  
  Icon,
  IconColor
}) => {
  const isIncrease = changeType === "increase";

  return (
    <div className="rounded-2xl p-6 flex justify-between items-start w-full max-w-sm">
       
      <div>
        <p className="text-gray-400 text-sm font-medium">
          {title}
        </p>

        <div className="flex items-end gap-3 mt-2">
          <h2 className="text-3xl font-bold text-gray-800">
            {value}
          </h2>

          <span
            className={`text-sm font-small ${
              isIncrease ? "text-red-500" : "text-green-500"
            }`}
          >
            {isIncrease ? "↑" : "↓"} {changeText} {changeType} than yesterday
          </span>
        </div>
      </div>

      {/* Right Icon */}
      <div className={`bg-${IconColor}-100 p-3 rounded-xl`}>
  
          <Icon className={`w-4 h-4 text-${IconColor}-500`} strokeWidth={3} />
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
    <span className={`${color} text-white text-xs px-2 py-1 rounded`}>
        {text}
    </span>
);