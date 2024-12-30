context // $ExpectType Context
context.devices // $ExpectType Devices
context.devices.get // $ExpectType { <T extends string>(name: T): DeviceType<T>;<T = any>(name: string): T; }
context.devices.has // $ExpectType (name: string) => boolean
context.devices.ids // $ExpectType () => string[]

context.log // $ExpectType LogFunction & Log
context.log.level // $ExpectType LogLevel
context.log.trace // $ExpectType (msg: any) => void
context.log.debug // $ExpectType (msg: any) => void
context.log.info // $ExpectType (msg: any) => void
context.log.warn // $ExpectType (msg: any) => void
context.log.error // $ExpectType (msg: any) => void

context.services // $ExpectType Services
context.services.get // $ExpectType { <T extends keyof ServiceType>(name: T): ServiceType[T];<T = any>(name: string) => T; }
context.services.has // $ExpectType (name: string) => boolean
context.services.ids // $ExpectType () => string[]

context.export // $ExpectType Export
context.export.dispatch // $ExpectType <T = Record<string, any>>(path: string, args?: T | undefined) => void
context.export.update // $ExpectType <T = any>(path: string, value: T, normalized?: number | undefined) => void

const platform = context.services.get("platform")
platform // $ExpectType PlatformService

platform.description // $ExpectType string
platform.devicestate // $ExpectType string
platform.family // $ExpectType string
platform.label // $ExpectType string
platform.location // $ExpectType string
platform.manufacturer // $ExpectType string
platform.model // $ExpectType string
platform.name // $ExpectType string
platform.serialnumber // $ExpectType string
platform.venue // $ExpectType string
platform.version // $ExpectType string

const diagnostic = context.services.get("diagnostic")
diagnostic // $ExpectType DiagnosticService

diagnostic.cpu_info // $ExpectType string
diagnostic.garbage_collection // $ExpectType string
diagnostic.heap_usage // $ExpectType string
diagnostic.os_memory // $ExpectType string

const session = context.services.get("session")
session // $ExpectType SessionService

session.login // $ExpectType (username: string, password: string) => void
session.logout // $ExpectType (username: string) => void
session.onLogin.listen // $ExpectType (callback: (event?: Event<SessionLoginEvent> | undefined) => void) => Listener
session.onLogout.listen // $ExpectType (callback: (event?: Event<SessionLogoutEvent> | undefined) => void) => Listener
session.onLogin.unlisten // $ExpectType (listener: Listener) => void
session.onLogout.unlisten // $ExpectType (listener: Listener) => void

const smtp = context.services.get("smtp")
smtp // $ExpectType SmtpService

smtp.clearConfig // $ExpectType () => void
smtp.getConfig // $ExpectType () => unknown
smtp.setConfig // $ExpectType (domain: string, username: string, password: string, name: string, port: number, tls: boolean) => void
smtp.sendEmail // $ExpectType (address: string, name: string, subject: string, body: string, attachment?: string | undefined, fileName?: string | undefined) => void

const netlinxClient = context.services.get("netlinxClient")
netlinxClient // $ExpectType NetLinxClientService

netlinxClient.command.listen // $ExpectType (callback: (event?: Event<DataEvent> | undefined) => void) => Listener
netlinxClient.command.unlisten // $ExpectType (listener: Listener) => void
netlinxClient.connect // $ExpectType (host: string, device: number, username?: string | undefined, password?: string | undefined) => void
netlinxClient.disconnect // $ExpectType () => void
netlinxClient.offline.listen // $ExpectType (callback: (event?: any) => void) => Listener
netlinxClient.offline.unlisten // $ExpectType (listener: Listener) => void
netlinxClient.online.listen // $ExpectType (callback: (event?: any) => void) => Listener
netlinxClient.online.unlisten // $ExpectType (listener: Listener) => void
netlinxClient.send_command // $ExpectType (data: string) => void
netlinxClient.send_string // $ExpectType (data: string) => void
netlinxClient.string.listen // $ExpectType (callback: (event?: Event<DataEvent> | undefined) => void) => Listener
netlinxClient.string.unlisten // $ExpectType (listener: Listener) => void
