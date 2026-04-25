import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import MainLayout from "./layout/MainLayout";
import ChatPage from "./pages/chat/ChatPage";
import AlbumPage from "./pages/album/AlbumPage";
import AdminPage from "./pages/admin/AdminPage";

import { Toaster } from "react-hot-toast";
import NotFoundPage from "./pages/404/NotFoundPage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/auth-callback" element={<AuthCallbackPage />} />
				<Route path="/sso-callback" element={<AuthenticateWithRedirectCallback />} />

				<Route element={<MainLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/album/:id" element={<AlbumPage />} />
					<Route path="/chat" element={<ChatPage />} />
					<Route path="/admin" element={<AdminPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
			<Toaster />
		</>
	);
}

export default App;
