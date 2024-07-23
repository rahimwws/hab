import {
  Calendar,
  Faq,
  Feed,
  Notification,
  Privacy,
  UserIcon,
} from "@/shared/assets";
import { Item } from "../../model/types/Item";

export const list: (Item | { type: "header"; title: string })[] = [
  { type: "header", title: "Profile" },
  {
    title: "Personal Info",
    icon: <UserIcon size={25} />,
    route: "PersonalInfo",
  },
  { title: "Notifications", icon: <Notification />, route: "Notifications" },
  { type: "header", title: "Settings" },

  { title: "Security", icon: <Privacy />, route: "Security" },

  { title: "Support & FAQ", icon: <Faq />, route: "SupportFAQ" },
  { title: "Give us feedback", icon: <Feed />, route: "GiveUsFeedback" },
];
