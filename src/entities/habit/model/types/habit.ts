import colors from "@/shared/lib/theme/colors";
export interface completeDays {
  date: string;
  status: "success" | "failed" | "doing";
}
export interface Habit {
  id: number;
  name: string;
  remain: number;
  total: number;
  type: "timer" | "counter" | "default";
  emoji?: string;
  description?: string;
  measure?: string;
  startDate: Date;
  endDate: Date;
  time: string;
  color: keyof typeof colors;
  public: boolean;
  relations: number[];
  completedDays: completeDays[];
  category: string;
}

export interface Friend {
  id: number;
  name: string;
  avatar: string;
  username: string;
}
