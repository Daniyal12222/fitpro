import { Stack, Link, router, useRouter } from 'expo-router';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


// function App() {
//   return <Animated.View entering={FadeIn} exiting={FadeOut} />;
// }


export default function Home() {
  const router = useRouter()
  return (
    <View className="flex flex-1 justify-end">
      <Image className="absolute h-full w-full" source={require('../assets/back.jpg')} />
      <LinearGradient
      
        colors={['transparent', '#18181b']}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className='flex justify-end pb-12 space-y-8 '
      >

        <Animated.View entering={FadeInDown.delay(100).springify()} className='flex items-center mb-5'>
          <Text style={{ fontSize: hp(5) }} className='text-white font-bold tracking-wide'>
            Bast<Text className='text-rose-500 '> Workouts</Text>
          </Text>
          <Text style={{ fontSize: hp(5) }} className='text-white font-bold tracking-wide'>
            For you
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
          onPress={() => router.push('./home')}
            style={{ height: hp(7), width: wp(80) }}
            className='bg-rose-500 flex items-center justify-center   mx-auto rounded-full border-[2px] border-neutral-200 '>
            <Text style={{ fontSize: hp(3) }} className='text-white font-bold tracking-wide'>Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
