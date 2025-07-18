// React core and React Native components
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

// Constants and Configurations
import { PRIMARY_COLOR, PRIMARY_LIGHT_COLOR } from '../../constants/colors';

// Props and Types
import { IconButtonProps } from '../../types';

const IconButton: React.FC<IconButtonProps> = (props) => {
    const IconComponent = props.icon;

    return (
        <TouchableOpacity
            onPress={props.onPress}
            disabled={props.disabled}
            style={[styles.button, props.style]}
        >
            <IconComponent width={20} height={20} />
            <Text style={[styles.buttonText, props.textStyle]}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: PRIMARY_LIGHT_COLOR,
        borderRadius: 20,
        height: 36,
        width: 170,
        paddingHorizontal: 10,
        shadowColor: PRIMARY_COLOR,
        shadowOffset: { width: 3, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: PRIMARY_COLOR,
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
        paddingLeft: 8
    }
});

export default IconButton;