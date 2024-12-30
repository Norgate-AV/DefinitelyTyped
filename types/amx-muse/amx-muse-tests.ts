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

const timeline = context.services.get("timeline")
timeline // $ExpectType TimelineService

timeline.start // $ExpectType (intervals: number[], relative?: boolean | undefined, repeat?: number | undefined) => void
timeline.stop // $ExpectType () => void
timeline.pause // $ExpectType () => void
timeline.restart // $ExpectType () => void
timeline.expired.listen // $ExpectType (callback: TimelineEventCallback) => Listener
timeline.expired.unlisten // $ExpectType (listener: Listener) => void

const ids = ["AMX-10001", "AMX-10002", "AMX-10003", "AMX-6001", "AMX-7002"]

for (const id of ids) {
    const device = context.devices.get<Muse.ICSP.Driver>(id)
    device // $ExpectType Driver

    device.configuration // $ExpectType Configuration
    device.configuration.device // $ExpectType Device
    device.configuration.device.classname // $ExpectType string
    device.configuration.device.container // $ExpectType string
    device.configuration.device.description // $ExpectType string
    device.configuration.device.devicestate // $ExpectType string
    device.configuration.device.family // $ExpectType string
    device.configuration.device.guid // $ExpectType string
    device.configuration.device.location // $ExpectType string
    device.configuration.device.manufacturer // $ExpectType string
    device.configuration.device.model // $ExpectType string
    device.configuration.device.name // $ExpectType string
    device.configuration.device.protocolversion // $ExpectType string
    device.configuration.device.serialnumber // $ExpectType string
    device.configuration.device.softwareversion // $ExpectType string
    device.configuration.device.venue // $ExpectType string
    device.configuration.device.version // $ExpectType string

    device.isOffline // $ExpectType () => boolean
    device.isOnline // $ExpectType () => boolean

    device.offline // $ExpectType (callback: OnlineOfflineCallback) => void
    device.online // $ExpectType (callback: OnlineOfflineCallback) => void

    device.port // $ExpectType Port[]

    for (const port of device.port) {
        port // $ExpectType Port

        port.button // $ExpectType Readonly<Button>[]
        for (const button of port.button) {
            button // $ExpectType Readonly<Button>

            button.watch // $ExpectType (callback: ParameterUpdateCallback<boolean>) => Watcher
            button.unwatch // $ExpectType (watcher: Watcher) => void
        }

        port.channel // $ExpectType (boolean & Channel)[]
        for (const channel of port.channel) {
            channel // $ExpectType boolean & Channel

            channel.watch // $ExpectType (callback: ParameterUpdateCallback<boolean>) => Watcher
            channel.unwatch // $ExpectType (watcher: Watcher) => void
        }

        port.command // $ExpectType (callback: EventCallback) => void
        port.custom // $ExpectType (callback: CustomEventCallback) => void

        port.level // $ExpectType (number & Level)[]
        for (const level of port.level) {
            level // $ExpectType number & Level

            level.watch // $ExpectType (callback: ParameterUpdateCallback<number>) => Watcher
            level.unwatch // $ExpectType (watcher: Watcher) => void
        }

        port.send_command // $ExpectType (data: string) => void
        port.send_string // $ExpectType (data: string) => void
        port.string // $ExpectType (callback: EventCallback) => void
    }
}

const idevice = context.devices.get("idevice")
idevice // $ExpectType IDevice

idevice.io // $ExpectType IOPort[] | undefined
for (const io of idevice.io as Muse.IDevice.IOPort[]) {
    io // $ExpectType IOPort

    io.digitalInput.value // $ExpectType boolean
    io.digitalInput.watch // $ExpectType (callback: DigitalEventCallback) => Watcher
    io.digitalInput.unwatch // $ExpectType (watcher: Watcher) => void

    io.digitalOutput.value // $ExpectType boolean
    io.digitalOutput.watch // $ExpectType (callback: DigitalEventCallback) => Watcher
    io.digitalOutput.unwatch // $ExpectType (watcher: Watcher) => void
}

idevice.ir // $ExpectType IRPort[] | undefined
for (const ir of idevice.ir as Muse.IDevice.IRPort[]) {
    ir // $ExpectType IRPort

    ir.clearAndSendIr // $ExpectType (code: number) => void
}

idevice.relay // $ExpectType RelayPort[] | undefined
for (const relay of idevice.relay as Muse.IDevice.RelayPort[]) {
    relay // $ExpectType RelayPort

    relay.state.value // $ExpectType boolean
    relay.state.watch // $ExpectType (callback: RelayEventCallback) => Watcher
    relay.state.unwatch // $ExpectType (watcher: Watcher) => void
}

idevice.serial // $ExpectType SerialPort[] | undefined
for (const serial of idevice.serial as Muse.IDevice.SerialPort[]) {
    serial // $ExpectType SerialPort

    serial.parity // $ExpectType Readonly<Parameter<any>>
    serial.parity.defaultValue // $ExpectType any
    serial.parity.enums // $ExpectType string[]
    serial.parity.max // $ExpectType any
    serial.parity.min // $ExpectType any
    serial.parity.normalized // $ExpectType number
    serial.parity.type // $ExpectType number
    serial.parity.value // $ExpectType string

    serial.receive.listen // $ExpectType (callback: SerialEventCallback) => Listener
    serial.receive.unlisten // $ExpectType (listener: Listener) => void

    serial.send // $ExpectType (data: string) => void

    serial.setComParams // $ExpectType (baud: SerialBaudRate, databits?: SerialDataBits | undefined, stopbits?: SerialStopBits | undefined, parity?: SerialParity | undefined, mode?: SerialMode | undefined) => void
}

const led = context.devices.get("led")
led // $ExpectType LED

// Device ID's that conform to known patterns will return the correct type
/**
 * /^AMX-\d+$/ : Muse.ICSP.Driver
 * /^idevice$/ : Muse.IDevice
 * /^led$/ : Muse.LED
 */
const tp1 = context.devices.get("AMX-10001")
const tp2 = context.devices.get("AMX-10010")
const tp3 = context.devices.get("AMX-10020")
const exb1 = context.devices.get("AMX-6001")
const exb2 = context.devices.get("AMX-6002")
const exb3 = context.devices.get("AMX-7003")

tp1 // $ExpectType Driver
tp2 // $ExpectType Driver
tp3 // $ExpectType Driver
exb1 // $ExpectType Driver
exb2 // $ExpectType Driver
exb3 // $ExpectType Driver

// Device ID's that do not conform to a known pattern will return an `any` type
const anyDevice = context.devices.get("any")
anyDevice // $ExpectType any

// Device ID's that are explicitly typed will return the correct type
// This will need to be used if devices are being defined in web interface where they can be assigned any name
const explicitlyTypedDevice = context.devices.get<Muse.ICSP.Driver>("dvTP")
explicitlyTypedDevice // $ExpectType Driver

// Service ID's that do not conform to a known pattern will return an `any` type
const anyService = context.services.get("any")
anyService // $ExpectType any

// Service ID's that are explicitly typed will return the correct type
// This will be useful for new services that are not yet included in the types
const explicitlyTypedService = context.services.get<Muse.LegacyNetLinxClientService>("legacyNetLinxClient")
explicitlyTypedService // $ExpectType NetLinxClientService
