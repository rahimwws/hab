import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Typography } from "@/shared/ui/Typography";
import ContactCard from "./Card/ContactCard";
import { useContacts } from "../lib/hooks/useContact";
import { sendEmail } from "../lib/service/mailService";
import colors from "@/shared/lib/theme/colors";
const Contacts: React.FC = () => {
  const contacts = useContacts(20);

  const handleEmailPress = async (email: string, name: string) => {
    const subject = "Invitation";
    const body = `I'd like to invite you to join us, ${name}!`;

    const status = await sendEmail(email, subject, body);
  };

  if (contacts.length === 0) {
    return null;
  } else {
    return (
      <View>
        <Typography
          align="left"
          font="p-sb"
          size={20}
          styles={{ marginVertical: 10 }}
        >
          Invite Your Contacts
        </Typography>
        {contacts.map((contact) => {
          const name = `${contact.firstName ?? ""} ${
            contact.lastName ?? ""
          }`.trim();
          return (
            <ContactCard
              key={contact.id}
              name={name || "Unnamed Contact"}
              image={contact.rawImage?.uri}
              number={contact.emails?.map((email) => email.email).join(", ")}
              action={() => {
                if (contact.emails && contact.emails.length > 0) {
                  handleEmailPress(contact.emails[0].email, name);
                } else {
                  console.log("No email available for contact:", name);
                }
              }}
            />
          );
        })}
        <TouchableOpacity
          style={{
            backgroundColor: colors.gray100,
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 10,
            width: 150,
            alignSelf: "center",
            marginBottom: 20,
          }}
        >
          <Typography align="left" font="p-m" color="primary900">
            Show More
          </Typography>
        </TouchableOpacity>
      </View>
    );
  }
};

export default Contacts;
