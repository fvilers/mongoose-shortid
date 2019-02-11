# mongoose-shortid

A Mongoose plugin that adds a virtual property with a shorter document ID

## How to install

```
npm install @fvilers/mongoose-shortid
```

or

```
yarn add @fvilers/mongoose-shortid
```

## How to use

```
const mongoose = require('mongoose');
const shortId = require('@fvilers/mongoose-shortid');

// This will add a virtual property `shortId` to all schemas
mongoose.plugin(shortId);
```

## Options

You can choose the name of the virtual property by passing an option object and specifying the `propertyName` key.

```
const mongoose = require('mongoose');
const shortId = require('@fvilers/mongoose-shortid');

// This will add a virtual property `myProperty` to all schemas
mongoose.plugin(shortId, { propertyName: 'myProperty' });
```

## How does it work

The generated ObjectId will be transformed into a base62 representation which is url-safe as it doesn't contain characters like `+` or `/`. For example, a value of `5c614931a1f4b30021fa212b` will be transformed to a shortId value of `BbkLuPjY756F4VMT`.
