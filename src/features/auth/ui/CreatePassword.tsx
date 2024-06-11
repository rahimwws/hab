import React, { useState } from 'react'
import { Input } from '@/src/shared/ui/Inputs'
import { View } from 'react-native'
import { Typography } from '@/src/shared/ui/Typography'

const CreatePassword = () => {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const validatePasswords = () => {
        if (password && confirmPassword) {
            if (password === confirmPassword) {
                setError(false);
                console.log('Success');
            } else {
                setError(true);
                console.log('Error: Passwords do not match');
            }
        }
    };

    return (
        <View>
            <Input
                placeholder='Create Password'
                styles={{ marginTop: 30 }}
                type="default"
                focus={true}
                password={true}
                onChangeText={(text: string) => setPassword(text)}
            />
            <Input
                placeholder='Verify Password'
                styles={{ marginTop: 10 }}
                type="default"
                password={true}
                onChangeText={(text: string) => {
                    setConfirmPassword(text);
                }}
                action={validatePasswords}
            />
            {error && (
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    marginTop: 5,
                    marginLeft:5
                }}>
                    <Typography align="left" size={14} color="yellow" font='p-m'>
                        Passwords must match!
                    </Typography>
                </View>
            )}
        </View>
    );
}

export default CreatePassword