import {
  app
} from 'electron'

export default function () {
  app
    .commandLine
    .appendSwitch(
      'try-supported-channel-layouts'
    )

  app
    .commandLine
    .appendSwitch(
      'disable-http-cache'
    )
}
