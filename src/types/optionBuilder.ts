export interface OptionBuilder<Output> {
    __outputType: Output
}

export type BuilderOutput<T extends OptionBuilder<any>> = T['__outputType']
