export { unknown } from './unknown.ts';
export { object } from './object.ts';
export { array } from './array.ts';
export { string } from './string.ts';
export { number } from './number.ts';
export { boolean } from './boolean.ts';
export { Schema } from './Schema.ts';
export {
    SchemaResolveType,
    SchemaParameters,
    MergeSchemaParameters,
    SchemaReturnType,
    SchemaValidatorFunction,
} from './schema/io.ts';
export { ValidationError, PathError } from './schema/errors.ts';
export { isPromiseLike, ResolvedValue } from './schema/utils.ts';

export type Type<S> = SchemaResolveType<S>;
