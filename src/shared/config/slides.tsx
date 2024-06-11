import { ImageSourcePropType } from "react-native";
import First from "../assets/images/hobbies/First";
import Second from "../assets/images/hobbies/Second";
import Third from "../assets/images/hobbies/Third";
import Fourth from "../assets/images/hobbies/Fourth";

export interface Slide {
    id: number;
    title: string;
    description: string;
    image: any
}
export const slides: Slide[] = [
    {
        id: 1,
        title: "Gain total control of your money",
        image: <First/>,
        description: "Become your own money manager and make every cent count"
    },
    {
        id: 2,
        title: "Know where your money goes",
        image: <Second/>,

        description: "Track your transaction easily,with categories and financial report "
    },
    {
        id: 3,
        title: "Planning ahead",
        image: <Third/>,

        description: "Setup your budget for each category so you in control"
    },
    {
        id: 4,
        title: "Planning ahead",
        image: <Fourth/>,

        description: "Setup your budget for each category so you in control"
    },
]