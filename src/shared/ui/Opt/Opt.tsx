import { View, Text, StyleSheet, Keyboard, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ratio from '../../lib/theme/ratio';
import colors from '../../lib/theme/colors';

const Opt = ({ action, error, success }: { action: Function, error: boolean, success: boolean }) => {
    const [otp, setOtp] = useState(["", "", "", "", ""]);
    const otpInputs: Array<any> = Array(5).fill("");
    const [focus, setFocus] = useState<number>(0);
    const otpRefs: any = otpInputs.map(() => useRef(null));

    async function onChangeText(inputText: string, index: number) {
        setOtp((prevState) => {
            prevState[index] = inputText;
            return [...prevState];
        });

        if (inputText.length === 0 && index > 0) {
            otpRefs[index - 1].current.focus();
        }
        if (index + 1 === 5) {
            setFocus(-1)
        } else {
            otpRefs[index + 1].current.focus();
        }
    }
    useEffect(() => {
        if (otp.every((value) => value !== "")) {
            const codeFormat = (otp.join('')).toString()
            const optResponse = action(codeFormat)
            if (!optResponse) {
                setOtp([""])
            }
        }
    }, [otp])
    return (
        <View style={styles.otpInputContainer}>
            {otpInputs.map((_: any, index: number) => (
                <View key={index} style={[styles.otpInput,
                focus == index && { borderWidth: 1, borderColor: error ? colors.error : colors.primary900 },
                error && { borderWidth: 1, borderColor: colors.error },
                success && { borderWidth: 1, borderColor: colors.success }]}>
                    <TextInput
                        style={styles.textInput}
                        maxLength={1}
                        value={otp[index]}
                        onChangeText={(text) => onChangeText(text, index)}
                        keyboardType="numeric"
                        ref={otpRefs[index]}
                        onFocus={() => setFocus(index)}
                    />
                </View>
            ))}
        </View>
    )
}

export default Opt
const styles = StyleSheet.create({

    otpInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 30,
    },
    otpInput: {
        height: ratio.width * 0.15,
        width: ratio.width * 0.15,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.gray200,
    },
    textInput: {
        padding: 10,
        paddingHorizontal: 5,
        fontSize: 23,
        textAlign: 'center',
        fontWeight: '500',
        borderRadius: 10,
        color: colors.primary900,
        fontFamily: "p-m1"
    },

})