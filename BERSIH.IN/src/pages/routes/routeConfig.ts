import PengaturanScreen from "@/screens/settings/PengaturanScreen";
import EditProfile from "@/screens/settings/EditProfile";
import GantiPassword from "@/screens/settings/GantiPassword";
import VerifikasiOTP from "@/screens/settings/VerifikasiOTP";
import KalkulatorScreen from "@/screens/kalkulator/KalkulatorScreen";
import MisiList from "@/screens/misi/MisiList";
import MisiDetail from "@/screens/misi/MisiDetail";
import ChatBotScreen from "@/screens/chatbot/ChatBotScreen";
import EmergencyScreen from "@/screens/emergency/EmergencyScreen";
import GameArcade from "@/screens/gamecenter/GameArcade";
import AboutScreen from "@/screens/about/AboutScreen";
import FAQScreen from "@/screens/about/FAQScreen";
import HomeScreen from "@/screens/HomeScreen";

export interface RouteConfig {
  path: string;
  component: React.FC;
  protected?: boolean;
}

export const routes: RouteConfig[] = [
  { path: "/", component: HomeScreen },
  { path: "/settings", component: PengaturanScreen, protected: true },
  { path: "/settings/edit-profile", component: EditProfile, protected: true },
  { path: "/settings/ganti-password", component: GantiPassword, protected: true },
  { path: "/settings/verifikasi-otp", component: VerifikasiOTP, protected: true },
  { path: "/kalkulator", component: KalkulatorScreen },
  { path: "/misi", component: MisiList, protected: true },
  { path: "/misi/:id", component: MisiDetail, protected: true },
  { path: "/chatbot", component: ChatBotScreen },
  { path: "/emergency", component: EmergencyScreen },
  { path: "/gamecenter", component: GameArcade },
  { path: "/about", component: AboutScreen },
  { path: "/faq", component: FAQScreen },
];
