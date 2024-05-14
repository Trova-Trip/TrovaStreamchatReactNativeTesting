# TrovaStreamchatReactNativeTesting

## Introduction

**TrovaStreamchatReactNativeTesting** is a dedicated repository designed to debug and test the stream-chat-expo SDK in an isolated environment. This setup is for troubleshooting issues within our main application that utilizes stream-chat-expo, enabling us to replicate and address bugs more efficiently without the interference of additional application complexity.

### Getting Started

Edit the `chatConfig.js` file with the appropriate values for testing:

```
export const chatApiKey = ''; // API key for the test environment
export const chatUserId = ''; // User ID experiencing the issue
export const chatUserToken = ''; // Token for the user experiencing the issue signed with the secret pair of chatApiKey
export const chatUserName = ''; // Name of the user
```
