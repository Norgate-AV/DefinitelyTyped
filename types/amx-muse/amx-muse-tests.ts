context // $ExpectType Muse.Context
context.devices // $ExpectType Muse.Devices
context.devices.get // $ExpectType <T = any>(name: string) => T
context.devices.has // $ExpectType (name: string) => boolean
context.devices.ids // $ExpectType () => Array<string>

context.log // $ExpectType Muse.LogFunction & Muse.Log
context.log.level // $ExpectType Muse.LogLevel
context.log.trace // $ExpectType Muse.LogFunction
context.log.debug // $ExpectType Muse.LogFunction
context.log.info // $ExpectType Muse.LogFunction
context.log.warn // $ExpectType Muse.LogFunction
context.log.error // $ExpectType Muse.LogFunction

context.services // $ExpectType Muse.Services
context.services.get // $ExpectType <T = any>(name: string) => T

context.export // $ExpectType Muse.Export
context.export.dispatch // $ExpectType <T = Record<string, any>>(path: string, args?: T) => void
context.export.update // $ExpectType <T = any>(path: string, value: T, normalized?: number) => void
