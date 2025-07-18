// React core and React Native components
import React from 'react';
import { Image, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';

// Third-Party libraries
import { Text } from 'react-native-gesture-handler';

// Custom UI components
import IconButton from '../IconButton/Index';
import { DirectionIcon, MenuIcon, StarIcon } from '../../assets/icons';

// Constants and configs
import { GREY_COLOR, PRIMARY_COLOR, PRIMARY_LIGHT_COLOR, WHITE_COLOR } from '../../constants/colors';
import { DeviceWidth } from '../../utils';

// Props and Types
import { RestaurantCarsProps } from '../../types';

const RestaurantCard: React.FC<RestaurantCarsProps> = (props) => {
    const placeHolderImage = 'https://images.wsj.net/im-65599456?width=1280&size=1.501&pixel_ratio=2';

    /**
     * function calls the `onSelectLocation` prop function with the `id` as an
     * argument.
     */
    const onSelectLocation = () => {
        props.onSelectLocation(props.id);
    };

    return (
        <TouchableOpacity
            style={props.isSelected ? style.selectedCardContainer : style.cardContainer}
            onPress={onSelectLocation}
        >
            <Image
                source={{
                    uri: props.restaurant.imageUrl ?
                        props.restaurant.imageUrl :
                        placeHolderImage
                }}
                style={style.cardImage}
                height={150}
                width={DeviceWidth - 44}
            />
            <View style={style.infoContainer}>
                <Text style={style.name}>{props.restaurant.name}</Text>
                <Text style={style.discount}>{'Discount upto 30%'}</Text>
            </View>
            <View style={style.rateContainer}>
                <StarIcon width={15} height={15} />
                <Text>
                    {props.restaurant.rating.toFixed(1)}
                </Text>
                <Text style={style.address} >
                    {`|  ${props.restaurant.address}`}
                </Text>
            </View>
            <View style={style.actionContainer}>
                <IconButton
                    title='Direction'
                    onPress={() => Alert.alert('Feature under construction!')}
                    icon={DirectionIcon}
                />
                <IconButton
                    title='Menu'
                    onPress={() => Alert.alert('Feature under construction!')}
                    icon={MenuIcon}
                    style={style.menuButton}
                    textStyle={style.menuButtonText}
                />
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    cardContainer: {
        padding: 22,
        marginBottom: 10,
        shadowColor: PRIMARY_COLOR,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: WHITE_COLOR
    },
    selectedCardContainer: {
        padding: 22,
        marginBottom: 10,
        shadowColor: PRIMARY_COLOR,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: PRIMARY_LIGHT_COLOR
    },
    cardImage: {
        borderRadius: 10
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingVertical: 12
    },
    name: {
        fontSize: 18,
        width: (DeviceWidth - 30) / 2,
        fontWeight: 700
    },
    discount: {
        backgroundColor: PRIMARY_COLOR,
        color: WHITE_COLOR,
        fontSize: 12,
        fontWeight: 400,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 28,
        padding: 6,
        borderRadius: 6
    },
    rateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
    address: {
        fontSize: 12,
        fontWeight: 600,
        color: GREY_COLOR,
        marginLeft: 5
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingTop: 15
    },
    menuButton: {
        backgroundColor: PRIMARY_COLOR
    },
    menuButtonText: {
        color: WHITE_COLOR
    }
});

export default RestaurantCard;