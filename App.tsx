import React from 'react';

import {
  ConfigCatProvider,
  createConsoleLogger,
  LogLevel,
  PollingMode,
} from 'configcat-react';

import Home from './src/screens/Home';

import {SDK_KEY} from './src/utils/constants';
import {StatusBar} from 'react-native';

export default function App() {
  // Set the log level to INFO to track how your feature flags were evaluated. When moving to production, you can remove this line to avoid too detailed logging.
  const logger = createConsoleLogger(LogLevel.Info);

  return (
    <ConfigCatProvider
      sdkKey={SDK_KEY}
      options={{logger, pollIntervalSeconds: 2}}
      pollingMode={PollingMode.AutoPoll}>
      <Home />

      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </ConfigCatProvider>
  );
}
