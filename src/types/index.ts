export type OptionalKeys<T extends object> = keyof {
    [K in keyof T as undefined extends T[K] ? K : never]: T[K]
}

export type RequiredKeys<T extends object> = keyof Omit<T, OptionalKeys<T>>

export type PartialIfUndefined<T extends object> = {
    [K in keyof T as K extends OptionalKeys<T> ? K : never]?: T[K]
} & {
    [K in keyof T as K extends RequiredKeys<T> ? K : never]: T[K]
}

export type NonUndefinableKey<T extends Record<string, unknown>, O extends keyof T> = {
    [K in keyof T]: K extends O ? Exclude<T[K], undefined> : T[K]
}
