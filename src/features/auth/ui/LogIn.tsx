import React, { useState } from 'react'
import { Input } from '@/src/shared/ui/Inputs'
import { View } from 'react-native';
import { Typography } from '@/src/shared/ui/Typography';
import Danger from '@/src/shared/assets/icons/interface/Danger';
import { EmailValid } from '@/src/shared/lib/format';
import { LargeButton } from '@/src/shared/ui/Buttons';
import { useAppNavigation } from '@/src/shared/config/navigation';

const Register = () => {
    const navigation = useAppNavigation()
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [status, setStatus] = useState<boolean>(false)
    const user = {
        email: "rahimwws",
        password: "rahim"
    } // this is temporary data
    const action = () => {
        const check = EmailValid(email)
        if (email === user.email && password === user.password) {
            console.log("success");
            navigation.navigate("Service")
            setStatus(false)
        } else {
            setStatus(true)
        }
    }
    return (
        <>
            <View
                style={{ gap: 5 }}
            >
                <Input
                    placeholder='Enter your Email'
                    styles={{ marginTop: 30 }}
                    type="email-address"
                    focus={true}
                    onChangeText={(text) => setEmail(text)}
                    error={status}
                />
                <Input
                    placeholder='Enter your Password'
                    styles={{ marginTop: 10 }}
                    type="email-address"
                    onChangeText={(text) => setPassword(text)}
                    error={status}
                    password={true}
                />
                {status &&
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 5,

                    }}>
                        <Danger size={20} />
                        <Typography align="left" size={14} color="error">This account doesn't exist</Typography>
                    </View>
                }
            </View>
            <View style={{
                alignSelf: "flex-end",
                marginTop: "auto",
                width: "100%",
                marginBottom: 10
            }}>
                <LargeButton text='Continue' isRoute={false}  action={action} />
            </View>
        </>

    )
}

export default Register