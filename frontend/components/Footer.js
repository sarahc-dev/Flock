function LogoTitle() {
    return (
        <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
    );
}

export default function Footer() {
    return (
        <View><Text>Footer</Text><LogoTitle/></View>
    )
}