export type SomeObject<T = any> = Record<string, T>

export type OptionalKeys<T extends SomeObject> = keyof {
    [K in keyof T as undefined extends T[K] ? K : never]: T[K]
}

export type RequiredKeys<T extends SomeObject> = keyof Omit<T, OptionalKeys<T>>

export type OptionalIfUndefined<T extends SomeObject> = {
    [K in keyof T as K extends OptionalKeys<T> ? K : never]?: T[K]
} & {
    [K in keyof T as K extends RequiredKeys<T> ? K : never]: T[K]
}

export type Undefinable<T> = T | undefined

export type NonUndefinableKey<T extends SomeObject, O extends keyof T> = {
    [K in keyof T]: K extends O ? Exclude<T[K], undefined> : T[K]
}

export type Unwrap<T> = T extends object ? { [K in keyof T]: T[K] } : T

export type MakeKeysOptional<T> = T extends SomeObject ? Unwrap<OptionalIfUndefined<T>> : T

export type UniversalValue = string | number | Date | null | { [key: string]: UniversalValue } | UniversalValue[]
