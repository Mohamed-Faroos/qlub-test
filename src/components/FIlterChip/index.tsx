/* React core and React Native components */
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

/* Third-Party libraries */
import { SvgProps } from 'react-native-svg';

/* Constants and configs */
import { DARK_COLOR, GREY_COLOR, WHITE_COLOR } from '../../constants/colors';

type FilterChipProps = {
    title?: string;
    icon: React.FC<SvgProps>;
};

const FilterChip = ({ ...props }: FilterChipProps) => {
    const IconComponent = props.icon;
    return (
        <TouchableOpacity style={styles.chipContainer}>
            <IconComponent width={15} height={15} />
            <Text style={styles.chipText}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    chipContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: WHITE_COLOR,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
        margin: 5,
        borderColor: GREY_COLOR,
        borderWidth: 0.5,
    },
    chipText: {
        color: DARK_COLOR,
        fontWeight: '600',
        fontSize: 12,
        marginLeft: 5,
    },
});

export default FilterChip;