import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'react-native';
import {useChatClient} from './useChatClient';
import {AppProvider} from './AppContext';
import {ChannelList, Chat, OverlayProvider} from 'stream-chat-expo';
import {StreamChat} from 'stream-chat';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {chatApiKey, chatUserId} from './chatConfig';

const Stack = createStackNavigator();

const filters = {
  members: {
    $in: [chatUserId],
  },
};

const sort = {
  last_message_at: -1,
};

const ChannelListScreen = () => {
  //@ts-ignore
  return <ChannelList filters={filters} sort={sort} />;
};

const chatClient = StreamChat.getInstance(chatApiKey);

const NavigationStack = () => {
  const {clientIsReady} = useChatClient();

  if (!clientIsReady) {
    return <Text>Loading chat ...</Text>;
  }
  return (
    <OverlayProvider>
      <Chat client={chatClient}>
        <Stack.Navigator>
          <Stack.Screen name="ChannelList" component={ChannelListScreen} />
        </Stack.Navigator>
      </Chat>
    </OverlayProvider>
  );
};

export default () => {
  return (
    <AppProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <NavigationStack />
        </NavigationContainer>
      </GestureHandlerRootView>
    </AppProvider>
  );
};
