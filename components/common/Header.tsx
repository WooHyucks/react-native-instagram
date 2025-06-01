import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = () => (
    <SafeAreaView style={styles.header} edges={['top']}>
        <Image
            source={require('@/assets/images/common/main_logo.png')}
            style={styles.image}
        />
        <View style={styles.actions}>
            <TouchableOpacity>
                <Ionicons name="heart-outline" size={24} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="search" size={24} />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    image: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
    },
    actions: {
        flexDirection: 'row',
        gap: 12,
    },
});

export default Header;
