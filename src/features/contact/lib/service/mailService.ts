// src/services/mailService.ts
import * as MailComposer from 'expo-mail-composer';

type MailStatus = 'sent' | 'cancelled' | 'saved' | 'failed';

export const sendEmail = async (email: string, subject: string, body: string): Promise<MailStatus> => {
    try {
        const result = await MailComposer.composeAsync({
            recipients: [email],
            subject: subject,
            body: body,
        });

        switch (result.status) {
            case MailComposer.MailComposerStatus.SENT:
                return 'sent';
            case MailComposer.MailComposerStatus.CANCELLED:
                return 'cancelled';
            case MailComposer.MailComposerStatus.SAVED:
                return 'saved';
            default:
                return 'failed';
        }
    } catch (error) {
        console.error("An error occurred while sending the email:", error);
        return 'failed';
    }
};
