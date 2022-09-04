import type { App } from 'vue'

declare type SFCWithInstall<T> = T & { install(app: App): void }

export type { SFCWithInstall }
