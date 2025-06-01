import { Stack } from 'expo-router';

export default function HomeStackLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{ title: '홈', headerShown: false }}
            />
        </Stack>
    );
}
