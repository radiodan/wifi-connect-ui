# WiFi Connect UI

This is a replacement web user interface for the [Resin WiFi Connect]() service.

## Why

The Resin UI is bare-bones and intended to be replaced with a product-specific
version. This UI provides a nicely designed interface that you can easily add to
your project. It comes with a standard theme but you can easily customise the
colours and text.

## Installing on a device

To install on the device we recommend using out [installation script]().

If you want to do it manually, just copy all the files from `build` into the
directory specified by the
[`--ui-path` command line argument of `wifi-connect`](https://github.com/resin-io/resin-wifi-connect/tree/master/docs).

## Customising the theme

To customise the colours of the theme, edit the file `config.json` in the
`build` directory. This file is loaded by the browser when it connects to the
access point.

`config.json` has two sections:

### theme

There are 4 main colours used throughout the app. Don't change the names of the
colours, but do change the values if you want to customise the app. We've used
[hsl](http://mothereffinghsl.com/) colours but any valid
[CSS colour value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
will work.

| Color name         | Usage                                                                |
| ------------------ | -------------------------------------------------------------------- |
| primary            | Used as a background colour and for primary buttons                  |
| primaryAlternate   | Slightly lighter shade used for primary hover                        |
| secondary          | Must be legible when used as text on the primary and tertiary colour |
| secondaryAlternate | Slightly lighter shade for hover effects                             |
| tertiary           | Used as a contrast to the primary colour                             |
| tertiaryAlternate  | Lighter shade for hover effects                                      |
| accent             | Contrasting colour used against the primary                          |

### text

This is all the text in the app. Change it here to update what the people using
your app will read. In some places you'll see the special pattern `${ssid}`.
Those special markers get replaced with real data in the app.

## Development

If you want to add new features to the app, then you need to edit the source
files in `src` and make a new build.

This app is build using [Preact](https://preactjs.com/) so you'll need a recent
version of [node.js](https://nodejs.org/en/) to develop locally.

If you just want to change the text, colours or logo then you don't need to do
this, see "Customisating the theme" above.

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve
```

## CLI Commands

For detailed explanation on how things work, checkout the
[CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
