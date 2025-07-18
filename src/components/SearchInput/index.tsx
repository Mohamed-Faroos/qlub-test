// React core and React Native components
import { StyleSheet, TextInput, View } from 'react-native';

// Custom UI components
import { SearchIcon } from '../../assets/icons';

// Constants and configs
import { GREY_COLOR, WHITE_COLOR } from '../../constants/colors';

const SearchInput = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Search for the Location You Want to Get Offer"
                style={styles.input}
                keyboardType='default'
                returnKeyType='search'
                returnKeyLabel='Search'
            />
            <SearchIcon width={18} height={18} style={styles.inputIcon} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        paddingBottom: 8,
        backgroundColor: WHITE_COLOR,
        width: '100%',
        paddingHorizontal: 25,
    },
    input: {
        height: 40,
        borderColor: GREY_COLOR,
        borderWidth: 0.5,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingLeft: 43,
        fontSize: 13
    },
    inputIcon: {
        position: 'absolute',
        left: 40,
        top: 26,
    }
});

export default SearchInput;
