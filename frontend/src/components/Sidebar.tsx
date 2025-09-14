import Image from "next/image";

interface SidebarProps {
  userName?: string | null;
  userEmail?: string | null;
  userImage?: string | null;
}

export default function Sidebar({ userName, userEmail, userImage }: SidebarProps) {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6 flex flex-col">
      {/* User Profile Section */}
      <div className="flex flex-col items-center mb-8">
        {userImage ? (
          <Image
            src={userImage}
            alt={userName || "User avatar"}
            width={80}
            height={80}
            className="rounded-full mb-4 border-2 border-gray-700"
          />
        ) : (
          <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center mb-4 border-2 border-gray-700">
            <span className="text-2xl font-bold">
              {userName?.charAt(0)?.toUpperCase() || "U"}
            </span>
          </div>
        )}
        
        <h3 className="text-lg font-semibold text-center mb-1">
          {userName || "Unknown User"}
        </h3>
        <p className="text-sm text-gray-400 text-center break-all">
          {userEmail || "No email"}
        </p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <a
              href="/dashboard"
              className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v3H8V5z" />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/profile"
              className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profile
            </a>
          </li>
          <li>
            <a
              href="/settings"
              className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="pt-4 border-t border-gray-700">
        <button
          className="w-full flex items-center p-3 rounded-lg hover:bg-red-800 transition-colors text-red-400 hover:text-white"
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
}
