# Interweave

[![Build Status](https://travis-ci.org/milesj/interweave.svg?branch=master)](https://travis-ci.org/milesj/interweave)

Interweave is a robust React library that can...

- Safely render HTML without using `dangerouslySetInnerHTML`.
- Safely strip HTML tags.
- Automatic XSS and injection protection.
- Clean HTML attributes using filters.
- Interpolate components using matchers.
- Autolink URLs, IPs, emails, and hashtags.
- Render Emoji and emoticon characters.
- And much more!

## Requirements

- React 16.3+
- IE 10+
- Emoji support: `fetch`, `sessionStorage`

## Installation

Interweave requires React as a peer dependency.

```
npm install interweave react --save
// Or
yarn add interweave react
```

## Documentation

[https://milesj.gitbooks.io/interweave](https://milesj.gitbooks.io/interweave)
