/* React core and React Native components */
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

/* Third party libraries */
import { PRIMARY_COLOR } from '../../constants/colors';

/* Button pops */
interface ButtonProps extends TouchableOpacityProps {
    title: string;
    onPress(): void;
    disabled?: boolean;
}

const Button = ({ ...props }: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            disabled={props.disabled}
            style={[styles.button, props.style]}
        >
            <Text style={styles.buttonText}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: 10,
        elevation: 5,
        height: 60,
        justifyContent: 'center',
        padding: 10,
        shadowOffset: { width: 3, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: '100%',
    },
    buttonText: {
        color: PRIMARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Button;