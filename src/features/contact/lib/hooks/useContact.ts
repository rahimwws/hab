import { useEffect, useState } from 'react';
import { Contact } from '../../model/types/contact';
import { fetchContacts } from '../service/contactService';

export const useContacts = (limit: number = 20) => {
    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() => {
        (async () => {
            const fetchedContacts = await fetchContacts(limit);
            if (fetchedContacts.length > 0) {
                setContacts(fetchedContacts);
            }
        })();
    }, [limit]);

    return contacts;
};