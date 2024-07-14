export type Contact = {
    id: string;
    firstName?: string;
    lastName?: string;
    rawImage?: { uri: string };
    emails?: { email: string }[];
    phoneNumbers?: { number: string }[];
};