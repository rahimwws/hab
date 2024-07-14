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
  descriptions?: string;
  measure?: string;
  startDate: Date;
  endDate: Date;
  time: string;
  color: keyof typeof colors;
  public: boolean;
  relations: number[];
  completedDays: completeDays[];
}

export interface Friend {
  name: string;
  avatar: string;
}
