import React, { useState } from 'react'
import { Input } from '@/src/shared/ui/Inputs'
import { View } from 'react-native';
import { Typography } from '@/src/shared/ui/Typography';
import Danger from '@/src/shared/assets/icons/interface/Danger';
import { EmailValid } from '@/src/shared/lib/format';

const Register = () => {
    const [error, setError] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const action = () => {
        const check = EmailValid(email)
        if (check) {
            console.log("success");
            setError(false)
        } else {
            setError(true)
        }
    }
    return (
        <View
            style={{ gap: 5 }}
        >
            <Input
                placeholder='Enter Email'
                styles={{ marginTop: 30 }}
                type="email-address"
                focus={true}
                onChangeText={(text) => setEmail(text)}
                action={action}
                error={error}
            />
            {error &&
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,

                }}>
                    <Danger size={20} />
                    <Typography align="left" size={14} color="error">Please Enter a Valid Email Address</Typography>
                </View>
            }
        </View>

    )
}

export default Register