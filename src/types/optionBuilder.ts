export interface OptionBuilder<Output> {
    __outputType: Output
}

export type OptionBuilderOutput<T extends OptionBuilder<any>> = T['__outputType']
