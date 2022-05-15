import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function Copyright() {
    return (
        <View>
            <Text style={styles.text}>
                João Pedro Kaspary - NLW Return 2022
            </Text>
        </View>
    );
}