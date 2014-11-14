---
layout: post
title: Implementing Undo and Redo in JavaScript
description: Improve users' experience by allowing them to undo/redo their actions 
meta: Post
categories: [javascript, prototype, framework]
image: /assets/images/public/clickago-300x300.gif 
postImage: /assets/images/public/clickago-full.jpg
published: true
hasComments: true
---

<p class="type--big">About two years ago I thought to myself "how could I implement undo and redo functionality in JavaScript", unfortunately, I couldn't think of any good solutions. A couple of weeks ago it came back to me again so I decided to give it another go.</p>

Within 15 minutes I had a [JSBin prototype](http://jsbin.com/xuxime/2/edit?js) - it only supported "undo" but at least I had some ideas how to make this work. Then a couple of days later I created [Clickago.js](https://github.com/adampoczatek/Clickago.js) - a lightweight implementation of "undo" and "redo" functionality in JavaScript.

## How It Works

The idea is very simple - every time a user does something you have to register his action along with a relevant rollback function. Those rollbacks and actions then get executed when you call `.undo()` or `.redo()`. 

Registering actions is handled by the `.register()` method which accepts two parameters - current action options and the rollback options. Here's an example:

```javascript
var clickago = new Clickago()

clickago.register(
	// Current action - first parameter.
	{
	    method: addUser,
	    thisArg: window,
	    arguments: ["Mike", "mike@acme.com"]
	}, 
	// Rollback function - second parameter.
	{
	    method: removeUser,
	    thisArg: window,
	    arguments: ["mike@acme.com"]
	});
```

**Note:** Neither `addUser` nor `removeUser` should register new actions. I recommend wrapping your functions events and logic, for example:

*Logic:*

```javascript
function addUserToCollection (userName, userEmail) {
    collection[userEmail] = {
        name: userName,
        email: userEmail
    };

    return collection;
}
```

*Event:*

```javascript
function addUser (userName, userEmail) {
    clickago.register({
        method: addUserToCollection,
        arguments: [userName, userEmail]
    }, {
        method: removeUserFromCollection,
        arguments: [userEmail]
    });

    addUserToCollection(userName, userEmail);
}
```

"Event" is basically a wrapper function which registers new actions and then calls the application logic.

## Features

I've created a simple [demo](http://www.adampoczatek.com/Clickago.js/) which shows the main features:

* `.undo()` - this method calls the latest registered rollback function.
* `.redo()` - similar as above, but instead of rollback it calls the latest action.
* `.disable` and `.enable()` - useful methods when working with asynchronous functions.

Browse [documentation](https://github.com/adampoczatek/Clickago.js#api) for more details.

## Contributions

Any contributions are welcomed - feel free to add new features or improve existing ones!