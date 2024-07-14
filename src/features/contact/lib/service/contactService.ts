// src/services/contactService.ts
import * as ContactsComponent from 'expo-contacts';
import { Contact } from '../../model/types/contact';

export const fetchContacts = async (limit: number = 20): Promise<Contact[]> => {
    const { status } = await ContactsComponent.requestPermissionsAsync();
    if (status === 'granted') {
        const { data } = await ContactsComponent.getContactsAsync({
            pageSize: limit,
        });
        return data as Contact[];
    }
    return [];
};
