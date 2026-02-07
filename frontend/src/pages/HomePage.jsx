import { useChatStore } from "../store/useChatStore.js";
import { useAuthStore } from "../store/useAuthStore.js";

import Sidebar from "../components/SideBar.jsx";
import NoChatSelected from "../components/NoChatSelected.jsx";
import ChatContainer from "../components/ChatContainer.jsx";
import AuthImagePattern from "../components/AuthImagePattern.jsx";

const HomePage = () => {
  const { selectedUser } = useChatStore();
  const { user } = useAuthStore();

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>

      {/* Display AuthImagePattern component when no user is selected */}
      {!selectedUser && user && (
        <div className="absolute inset-0 pointer-events-none">
          <AuthImagePattern />
        </div>
      )}
    </div>
  );
};
export default HomePage;