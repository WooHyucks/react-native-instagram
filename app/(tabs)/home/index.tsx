import Header from '@/components/common/Header';
import PeedSidebar from '@/components/home/peedSidebar';
import { View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Header />
            <View
                style={{
                    paddingTop: 100,
                }}
            >
                <PeedSidebar />
            </View>
        </View>
    );
}
