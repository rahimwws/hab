export interface Habit {
    name: string;
    status: "Success" | "Skipped" | "default";
    remain: number;
    total: number;
    type: "timer" | "counter" | "default";
    emoji?: string;
    friends?: Array<Friend> | "private";
    descriptions?: string;
    measure?: string;
    startDate: Date;
    endDate: Date; 
}

export interface Friend {
    name: string;
    avatar: string
}