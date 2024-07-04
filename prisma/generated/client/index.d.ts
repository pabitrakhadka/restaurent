
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SuperAdmin
 * 
 */
export type SuperAdmin = $Result.DefaultSelection<Prisma.$SuperAdminPayload>
/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model cart
 * 
 */
export type cart = $Result.DefaultSelection<Prisma.$cartPayload>
/**
 * Model contact
 * 
 */
export type contact = $Result.DefaultSelection<Prisma.$contactPayload>
/**
 * Model order
 * 
 */
export type order = $Result.DefaultSelection<Prisma.$orderPayload>
/**
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model SliderImage
 * 
 */
export type SliderImage = $Result.DefaultSelection<Prisma.$SliderImagePayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SuperAdmins
 * const superAdmins = await prisma.superAdmin.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SuperAdmins
   * const superAdmins = await prisma.superAdmin.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.superAdmin`: Exposes CRUD operations for the **SuperAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuperAdmins
    * const superAdmins = await prisma.superAdmin.findMany()
    * ```
    */
  get superAdmin(): Prisma.SuperAdminDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.cartDelegate<ExtArgs>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.contactDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.orderDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.sliderImage`: Exposes CRUD operations for the **SliderImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SliderImages
    * const sliderImages = await prisma.sliderImage.findMany()
    * ```
    */
  get sliderImage(): Prisma.SliderImageDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.16.1
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    SuperAdmin: 'SuperAdmin',
    admin: 'admin',
    cart: 'cart',
    contact: 'contact',
    order: 'order',
    product: 'product',
    user: 'user',
    SliderImage: 'SliderImage',
    Message: 'Message',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "superAdmin" | "admin" | "cart" | "contact" | "order" | "product" | "user" | "sliderImage" | "message" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SuperAdmin: {
        payload: Prisma.$SuperAdminPayload<ExtArgs>
        fields: Prisma.SuperAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuperAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuperAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          findFirst: {
            args: Prisma.SuperAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuperAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          findMany: {
            args: Prisma.SuperAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>[]
          }
          create: {
            args: Prisma.SuperAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          createMany: {
            args: Prisma.SuperAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SuperAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          update: {
            args: Prisma.SuperAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          deleteMany: {
            args: Prisma.SuperAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuperAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SuperAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminPayload>
          }
          aggregate: {
            args: Prisma.SuperAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuperAdmin>
          }
          groupBy: {
            args: Prisma.SuperAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuperAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuperAdminCountArgs<ExtArgs>
            result: $Utils.Optional<SuperAdminCountAggregateOutputType> | number
          }
        }
      }
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      cart: {
        payload: Prisma.$cartPayload<ExtArgs>
        fields: Prisma.cartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findFirst: {
            args: Prisma.cartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findMany: {
            args: Prisma.cartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          create: {
            args: Prisma.cartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          createMany: {
            args: Prisma.cartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          update: {
            args: Prisma.cartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          deleteMany: {
            args: Prisma.cartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.cartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      contact: {
        payload: Prisma.$contactPayload<ExtArgs>
        fields: Prisma.contactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          findFirst: {
            args: Prisma.contactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          findMany: {
            args: Prisma.contactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>[]
          }
          create: {
            args: Prisma.contactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          createMany: {
            args: Prisma.contactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.contactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          update: {
            args: Prisma.contactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          deleteMany: {
            args: Prisma.contactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.contactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.contactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.contactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      order: {
        payload: Prisma.$orderPayload<ExtArgs>
        fields: Prisma.orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findFirst: {
            args: Prisma.orderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findMany: {
            args: Prisma.orderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          create: {
            args: Prisma.orderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          createMany: {
            args: Prisma.orderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.orderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          update: {
            args: Prisma.orderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          deleteMany: {
            args: Prisma.orderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.orderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.orderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      product: {
        payload: Prisma.$productPayload<ExtArgs>
        fields: Prisma.productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          create: {
            args: Prisma.productCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SliderImage: {
        payload: Prisma.$SliderImagePayload<ExtArgs>
        fields: Prisma.SliderImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SliderImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SliderImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SliderImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SliderImagePayload>
          }
          findFirst: {
            args: Prisma.SliderImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SliderImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SliderImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SliderImagePayload>
          }
          findMany: {
            args: Prisma.SliderImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SliderImagePayload>[]
          }
          create: {
            args: Prisma.SliderImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SliderImagePayload>
          }
          createMany: {
            args: Prisma.SliderImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SliderImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SliderImagePayload>
          }
          update: {
            args: Prisma.SliderImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SliderImagePayload>
          }
          deleteMany: {
            args: Prisma.SliderImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SliderImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SliderImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SliderImagePayload>
          }
          aggregate: {
            args: Prisma.SliderImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSliderImage>
          }
          groupBy: {
            args: Prisma.SliderImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SliderImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SliderImageCountArgs<ExtArgs>
            result: $Utils.Optional<SliderImageCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    messages: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | AdminCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    cart: number
    order: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | ProductCountOutputTypeCountCartArgs
    order?: boolean | ProductCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    carts: number
    orders: number
    payments: number
    Message: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | UserCountOutputTypeCountCartsArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    Message?: boolean | UserCountOutputTypeCountMessageArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SuperAdmin
   */

  export type AggregateSuperAdmin = {
    _count: SuperAdminCountAggregateOutputType | null
    _avg: SuperAdminAvgAggregateOutputType | null
    _sum: SuperAdminSumAggregateOutputType | null
    _min: SuperAdminMinAggregateOutputType | null
    _max: SuperAdminMaxAggregateOutputType | null
  }

  export type SuperAdminAvgAggregateOutputType = {
    id: number | null
  }

  export type SuperAdminSumAggregateOutputType = {
    id: number | null
  }

  export type SuperAdminMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    image: string | null
  }

  export type SuperAdminMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    image: string | null
  }

  export type SuperAdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    created_at: number
    image: number
    _all: number
  }


  export type SuperAdminAvgAggregateInputType = {
    id?: true
  }

  export type SuperAdminSumAggregateInputType = {
    id?: true
  }

  export type SuperAdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    image?: true
  }

  export type SuperAdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    image?: true
  }

  export type SuperAdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    image?: true
    _all?: true
  }

  export type SuperAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperAdmin to aggregate.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuperAdmins
    **/
    _count?: true | SuperAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuperAdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuperAdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuperAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuperAdminMaxAggregateInputType
  }

  export type GetSuperAdminAggregateType<T extends SuperAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateSuperAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuperAdmin[P]>
      : GetScalarType<T[P], AggregateSuperAdmin[P]>
  }




  export type SuperAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuperAdminWhereInput
    orderBy?: SuperAdminOrderByWithAggregationInput | SuperAdminOrderByWithAggregationInput[]
    by: SuperAdminScalarFieldEnum[] | SuperAdminScalarFieldEnum
    having?: SuperAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuperAdminCountAggregateInputType | true
    _avg?: SuperAdminAvgAggregateInputType
    _sum?: SuperAdminSumAggregateInputType
    _min?: SuperAdminMinAggregateInputType
    _max?: SuperAdminMaxAggregateInputType
  }

  export type SuperAdminGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    created_at: Date
    image: string | null
    _count: SuperAdminCountAggregateOutputType | null
    _avg: SuperAdminAvgAggregateOutputType | null
    _sum: SuperAdminSumAggregateOutputType | null
    _min: SuperAdminMinAggregateOutputType | null
    _max: SuperAdminMaxAggregateOutputType | null
  }

  type GetSuperAdminGroupByPayload<T extends SuperAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuperAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuperAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuperAdminGroupByOutputType[P]>
            : GetScalarType<T[P], SuperAdminGroupByOutputType[P]>
        }
      >
    >


  export type SuperAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    image?: boolean
  }, ExtArgs["result"]["superAdmin"]>


  export type SuperAdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    image?: boolean
  }


  export type $SuperAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuperAdmin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      created_at: Date
      image: string | null
    }, ExtArgs["result"]["superAdmin"]>
    composites: {}
  }

  type SuperAdminGetPayload<S extends boolean | null | undefined | SuperAdminDefaultArgs> = $Result.GetResult<Prisma.$SuperAdminPayload, S>

  type SuperAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SuperAdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SuperAdminCountAggregateInputType | true
    }

  export interface SuperAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuperAdmin'], meta: { name: 'SuperAdmin' } }
    /**
     * Find zero or one SuperAdmin that matches the filter.
     * @param {SuperAdminFindUniqueArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuperAdminFindUniqueArgs>(args: SelectSubset<T, SuperAdminFindUniqueArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SuperAdmin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SuperAdminFindUniqueOrThrowArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuperAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, SuperAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SuperAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindFirstArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuperAdminFindFirstArgs>(args?: SelectSubset<T, SuperAdminFindFirstArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SuperAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindFirstOrThrowArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuperAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, SuperAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SuperAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuperAdmins
     * const superAdmins = await prisma.superAdmin.findMany()
     * 
     * // Get first 10 SuperAdmins
     * const superAdmins = await prisma.superAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const superAdminWithIdOnly = await prisma.superAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuperAdminFindManyArgs>(args?: SelectSubset<T, SuperAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SuperAdmin.
     * @param {SuperAdminCreateArgs} args - Arguments to create a SuperAdmin.
     * @example
     * // Create one SuperAdmin
     * const SuperAdmin = await prisma.superAdmin.create({
     *   data: {
     *     // ... data to create a SuperAdmin
     *   }
     * })
     * 
     */
    create<T extends SuperAdminCreateArgs>(args: SelectSubset<T, SuperAdminCreateArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SuperAdmins.
     * @param {SuperAdminCreateManyArgs} args - Arguments to create many SuperAdmins.
     * @example
     * // Create many SuperAdmins
     * const superAdmin = await prisma.superAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuperAdminCreateManyArgs>(args?: SelectSubset<T, SuperAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SuperAdmin.
     * @param {SuperAdminDeleteArgs} args - Arguments to delete one SuperAdmin.
     * @example
     * // Delete one SuperAdmin
     * const SuperAdmin = await prisma.superAdmin.delete({
     *   where: {
     *     // ... filter to delete one SuperAdmin
     *   }
     * })
     * 
     */
    delete<T extends SuperAdminDeleteArgs>(args: SelectSubset<T, SuperAdminDeleteArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SuperAdmin.
     * @param {SuperAdminUpdateArgs} args - Arguments to update one SuperAdmin.
     * @example
     * // Update one SuperAdmin
     * const superAdmin = await prisma.superAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuperAdminUpdateArgs>(args: SelectSubset<T, SuperAdminUpdateArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SuperAdmins.
     * @param {SuperAdminDeleteManyArgs} args - Arguments to filter SuperAdmins to delete.
     * @example
     * // Delete a few SuperAdmins
     * const { count } = await prisma.superAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuperAdminDeleteManyArgs>(args?: SelectSubset<T, SuperAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuperAdmins
     * const superAdmin = await prisma.superAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuperAdminUpdateManyArgs>(args: SelectSubset<T, SuperAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SuperAdmin.
     * @param {SuperAdminUpsertArgs} args - Arguments to update or create a SuperAdmin.
     * @example
     * // Update or create a SuperAdmin
     * const superAdmin = await prisma.superAdmin.upsert({
     *   create: {
     *     // ... data to create a SuperAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuperAdmin we want to update
     *   }
     * })
     */
    upsert<T extends SuperAdminUpsertArgs>(args: SelectSubset<T, SuperAdminUpsertArgs<ExtArgs>>): Prisma__SuperAdminClient<$Result.GetResult<Prisma.$SuperAdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminCountArgs} args - Arguments to filter SuperAdmins to count.
     * @example
     * // Count the number of SuperAdmins
     * const count = await prisma.superAdmin.count({
     *   where: {
     *     // ... the filter for the SuperAdmins we want to count
     *   }
     * })
    **/
    count<T extends SuperAdminCountArgs>(
      args?: Subset<T, SuperAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuperAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuperAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuperAdminAggregateArgs>(args: Subset<T, SuperAdminAggregateArgs>): Prisma.PrismaPromise<GetSuperAdminAggregateType<T>>

    /**
     * Group by SuperAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SuperAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuperAdminGroupByArgs['orderBy'] }
        : { orderBy?: SuperAdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SuperAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuperAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuperAdmin model
   */
  readonly fields: SuperAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuperAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuperAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SuperAdmin model
   */ 
  interface SuperAdminFieldRefs {
    readonly id: FieldRef<"SuperAdmin", 'Int'>
    readonly name: FieldRef<"SuperAdmin", 'String'>
    readonly email: FieldRef<"SuperAdmin", 'String'>
    readonly password: FieldRef<"SuperAdmin", 'String'>
    readonly created_at: FieldRef<"SuperAdmin", 'DateTime'>
    readonly image: FieldRef<"SuperAdmin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SuperAdmin findUnique
   */
  export type SuperAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin findUniqueOrThrow
   */
  export type SuperAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin findFirst
   */
  export type SuperAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperAdmins.
     */
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * SuperAdmin findFirstOrThrow
   */
  export type SuperAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Filter, which SuperAdmin to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperAdmins.
     */
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * SuperAdmin findMany
   */
  export type SuperAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Filter, which SuperAdmins to fetch.
     */
    where?: SuperAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminOrderByWithRelationInput | SuperAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuperAdmins.
     */
    cursor?: SuperAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * SuperAdmin create
   */
  export type SuperAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * The data needed to create a SuperAdmin.
     */
    data: XOR<SuperAdminCreateInput, SuperAdminUncheckedCreateInput>
  }

  /**
   * SuperAdmin createMany
   */
  export type SuperAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuperAdmins.
     */
    data: SuperAdminCreateManyInput | SuperAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuperAdmin update
   */
  export type SuperAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * The data needed to update a SuperAdmin.
     */
    data: XOR<SuperAdminUpdateInput, SuperAdminUncheckedUpdateInput>
    /**
     * Choose, which SuperAdmin to update.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin updateMany
   */
  export type SuperAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuperAdmins.
     */
    data: XOR<SuperAdminUpdateManyMutationInput, SuperAdminUncheckedUpdateManyInput>
    /**
     * Filter which SuperAdmins to update
     */
    where?: SuperAdminWhereInput
  }

  /**
   * SuperAdmin upsert
   */
  export type SuperAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * The filter to search for the SuperAdmin to update in case it exists.
     */
    where: SuperAdminWhereUniqueInput
    /**
     * In case the SuperAdmin found by the `where` argument doesn't exist, create a new SuperAdmin with this data.
     */
    create: XOR<SuperAdminCreateInput, SuperAdminUncheckedCreateInput>
    /**
     * In case the SuperAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuperAdminUpdateInput, SuperAdminUncheckedUpdateInput>
  }

  /**
   * SuperAdmin delete
   */
  export type SuperAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
    /**
     * Filter which SuperAdmin to delete.
     */
    where: SuperAdminWhereUniqueInput
  }

  /**
   * SuperAdmin deleteMany
   */
  export type SuperAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperAdmins to delete
     */
    where?: SuperAdminWhereInput
  }

  /**
   * SuperAdmin without action
   */
  export type SuperAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmin
     */
    select?: SuperAdminSelect<ExtArgs> | null
  }


  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    created_at: Date | null
    token: string | null
    image: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    created_at: Date | null
    token: string | null
    image: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    password: number
    created_at: number
    token: number
    image: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    created_at?: true
    token?: true
    image?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    created_at?: true
    token?: true
    image?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    created_at?: true
    token?: true
    image?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    password: string
    created_at: Date
    token: string | null
    image: string | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    created_at?: boolean
    token?: boolean
    image?: boolean
    messages?: boolean | admin$messagesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>


  export type adminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    created_at?: boolean
    token?: boolean
    image?: boolean
  }

  export type adminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | admin$messagesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      password: string
      created_at: Date
      token: string | null
      image: string | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends admin$messagesArgs<ExtArgs> = {}>(args?: Subset<T, admin$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin model
   */ 
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'Int'>
    readonly name: FieldRef<"admin", 'String'>
    readonly email: FieldRef<"admin", 'String'>
    readonly phone: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
    readonly created_at: FieldRef<"admin", 'DateTime'>
    readonly token: FieldRef<"admin", 'String'>
    readonly image: FieldRef<"admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
  }

  /**
   * admin.messages
   */
  export type admin$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
  }


  /**
   * Model cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    p_id: number | null
    quantity: number | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    p_id: number | null
    quantity: number | null
  }

  export type CartMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    p_id: number | null
    quantity: number | null
  }

  export type CartMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    p_id: number | null
    quantity: number | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    user_id: number
    p_id: number
    quantity: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true
    user_id?: true
    p_id?: true
    quantity?: true
  }

  export type CartSumAggregateInputType = {
    id?: true
    user_id?: true
    p_id?: true
    quantity?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    user_id?: true
    p_id?: true
    quantity?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    user_id?: true
    p_id?: true
    quantity?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    user_id?: true
    p_id?: true
    quantity?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart to aggregate.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type cartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
    orderBy?: cartOrderByWithAggregationInput | cartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: cartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: number
    user_id: number
    p_id: number
    quantity: number
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends cartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type cartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    p_id?: boolean
    quantity?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>


  export type cartSelectScalar = {
    id?: boolean
    user_id?: boolean
    p_id?: boolean
    quantity?: boolean
  }

  export type cartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $cartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cart"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      p_id: number
      quantity: number
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type cartGetPayload<S extends boolean | null | undefined | cartDefaultArgs> = $Result.GetResult<Prisma.$cartPayload, S>

  type cartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cartFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface cartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cart'], meta: { name: 'cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {cartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartFindUniqueArgs>(args: SelectSubset<T, cartFindUniqueArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {cartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartFindUniqueOrThrowArgs>(args: SelectSubset<T, cartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartFindFirstArgs>(args?: SelectSubset<T, cartFindFirstArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartFindFirstOrThrowArgs>(args?: SelectSubset<T, cartFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cartFindManyArgs>(args?: SelectSubset<T, cartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cart.
     * @param {cartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends cartCreateArgs>(args: SelectSubset<T, cartCreateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Carts.
     * @param {cartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartCreateManyArgs>(args?: SelectSubset<T, cartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cart.
     * @param {cartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends cartDeleteArgs>(args: SelectSubset<T, cartDeleteArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cart.
     * @param {cartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartUpdateArgs>(args: SelectSubset<T, cartUpdateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Carts.
     * @param {cartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartDeleteManyArgs>(args?: SelectSubset<T, cartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartUpdateManyArgs>(args: SelectSubset<T, cartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart.
     * @param {cartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends cartUpsertArgs>(args: SelectSubset<T, cartUpsertArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends cartCountArgs>(
      args?: Subset<T, cartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartGroupByArgs['orderBy'] }
        : { orderBy?: cartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cart model
   */
  readonly fields: cartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cart model
   */ 
  interface cartFieldRefs {
    readonly id: FieldRef<"cart", 'Int'>
    readonly user_id: FieldRef<"cart", 'Int'>
    readonly p_id: FieldRef<"cart", 'Int'>
    readonly quantity: FieldRef<"cart", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cart findUnique
   */
  export type cartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findUniqueOrThrow
   */
  export type cartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findFirst
   */
  export type cartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findFirstOrThrow
   */
  export type cartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findMany
   */
  export type cartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart create
   */
  export type cartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The data needed to create a cart.
     */
    data: XOR<cartCreateInput, cartUncheckedCreateInput>
  }

  /**
   * cart createMany
   */
  export type cartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carts.
     */
    data: cartCreateManyInput | cartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cart update
   */
  export type cartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The data needed to update a cart.
     */
    data: XOR<cartUpdateInput, cartUncheckedUpdateInput>
    /**
     * Choose, which cart to update.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart updateMany
   */
  export type cartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carts.
     */
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartWhereInput
  }

  /**
   * cart upsert
   */
  export type cartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The filter to search for the cart to update in case it exists.
     */
    where: cartWhereUniqueInput
    /**
     * In case the cart found by the `where` argument doesn't exist, create a new cart with this data.
     */
    create: XOR<cartCreateInput, cartUncheckedCreateInput>
    /**
     * In case the cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartUpdateInput, cartUncheckedUpdateInput>
  }

  /**
   * cart delete
   */
  export type cartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter which cart to delete.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart deleteMany
   */
  export type cartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to delete
     */
    where?: cartWhereInput
  }

  /**
   * cart without action
   */
  export type cartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
  }


  /**
   * Model contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    name: number
    email: number
    subject: number
    message: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contact to aggregate.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type contactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactWhereInput
    orderBy?: contactOrderByWithAggregationInput | contactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: contactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    name: string
    email: string
    subject: string
    message: string
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends contactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type contactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
  }, ExtArgs["result"]["contact"]>


  export type contactSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
  }


  export type $contactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      subject: string
      message: string
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type contactGetPayload<S extends boolean | null | undefined | contactDefaultArgs> = $Result.GetResult<Prisma.$contactPayload, S>

  type contactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<contactFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface contactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contact'], meta: { name: 'contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {contactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contactFindUniqueArgs>(args: SelectSubset<T, contactFindUniqueArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {contactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contactFindUniqueOrThrowArgs>(args: SelectSubset<T, contactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contactFindFirstArgs>(args?: SelectSubset<T, contactFindFirstArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contactFindFirstOrThrowArgs>(args?: SelectSubset<T, contactFindFirstOrThrowArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contactFindManyArgs>(args?: SelectSubset<T, contactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Contact.
     * @param {contactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends contactCreateArgs>(args: SelectSubset<T, contactCreateArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Contacts.
     * @param {contactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contactCreateManyArgs>(args?: SelectSubset<T, contactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contact.
     * @param {contactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends contactDeleteArgs>(args: SelectSubset<T, contactDeleteArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Contact.
     * @param {contactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contactUpdateArgs>(args: SelectSubset<T, contactUpdateArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Contacts.
     * @param {contactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contactDeleteManyArgs>(args?: SelectSubset<T, contactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contactUpdateManyArgs>(args: SelectSubset<T, contactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact.
     * @param {contactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends contactUpsertArgs>(args: SelectSubset<T, contactUpsertArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends contactCountArgs>(
      args?: Subset<T, contactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends contactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contactGroupByArgs['orderBy'] }
        : { orderBy?: contactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contact model
   */
  readonly fields: contactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the contact model
   */ 
  interface contactFieldRefs {
    readonly id: FieldRef<"contact", 'Int'>
    readonly name: FieldRef<"contact", 'String'>
    readonly email: FieldRef<"contact", 'String'>
    readonly subject: FieldRef<"contact", 'String'>
    readonly message: FieldRef<"contact", 'String'>
  }
    

  // Custom InputTypes
  /**
   * contact findUnique
   */
  export type contactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where: contactWhereUniqueInput
  }

  /**
   * contact findUniqueOrThrow
   */
  export type contactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where: contactWhereUniqueInput
  }

  /**
   * contact findFirst
   */
  export type contactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * contact findFirstOrThrow
   */
  export type contactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * contact findMany
   */
  export type contactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contacts.
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * contact create
   */
  export type contactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * The data needed to create a contact.
     */
    data: XOR<contactCreateInput, contactUncheckedCreateInput>
  }

  /**
   * contact createMany
   */
  export type contactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contacts.
     */
    data: contactCreateManyInput | contactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contact update
   */
  export type contactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * The data needed to update a contact.
     */
    data: XOR<contactUpdateInput, contactUncheckedUpdateInput>
    /**
     * Choose, which contact to update.
     */
    where: contactWhereUniqueInput
  }

  /**
   * contact updateMany
   */
  export type contactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contacts.
     */
    data: XOR<contactUpdateManyMutationInput, contactUncheckedUpdateManyInput>
    /**
     * Filter which contacts to update
     */
    where?: contactWhereInput
  }

  /**
   * contact upsert
   */
  export type contactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * The filter to search for the contact to update in case it exists.
     */
    where: contactWhereUniqueInput
    /**
     * In case the contact found by the `where` argument doesn't exist, create a new contact with this data.
     */
    create: XOR<contactCreateInput, contactUncheckedCreateInput>
    /**
     * In case the contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contactUpdateInput, contactUncheckedUpdateInput>
  }

  /**
   * contact delete
   */
  export type contactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Filter which contact to delete.
     */
    where: contactWhereUniqueInput
  }

  /**
   * contact deleteMany
   */
  export type contactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contacts to delete
     */
    where?: contactWhereInput
  }

  /**
   * contact without action
   */
  export type contactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
  }


  /**
   * Model order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    menu_id: number | null
    user_id: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    menu_id: number | null
    user_id: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    menu_id: number | null
    user_id: number | null
    price: string | null
    quantity: string | null
    status: string | null
    token_num: string | null
    date: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    menu_id: number | null
    user_id: number | null
    price: string | null
    quantity: string | null
    status: string | null
    token_num: string | null
    date: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    menu_id: number
    user_id: number
    price: number
    quantity: number
    status: number
    token_num: number
    date: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    menu_id?: true
    user_id?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    menu_id?: true
    user_id?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    menu_id?: true
    user_id?: true
    price?: true
    quantity?: true
    status?: true
    token_num?: true
    date?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    menu_id?: true
    user_id?: true
    price?: true
    quantity?: true
    status?: true
    token_num?: true
    date?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    menu_id?: true
    user_id?: true
    price?: true
    quantity?: true
    status?: true
    token_num?: true
    date?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order to aggregate.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
    orderBy?: orderOrderByWithAggregationInput | orderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    menu_id: number
    user_id: number
    price: string
    quantity: string
    status: string
    token_num: string
    date: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menu_id?: boolean
    user_id?: boolean
    price?: boolean
    quantity?: boolean
    status?: boolean
    token_num?: boolean
    date?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>


  export type orderSelectScalar = {
    id?: boolean
    menu_id?: boolean
    user_id?: boolean
    price?: boolean
    quantity?: boolean
    status?: boolean
    token_num?: boolean
    date?: boolean
  }

  export type orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order"
    objects: {
      product: Prisma.$productPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      menu_id: number
      user_id: number
      price: string
      quantity: string
      status: string
      token_num: string
      date: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type orderGetPayload<S extends boolean | null | undefined | orderDefaultArgs> = $Result.GetResult<Prisma.$orderPayload, S>

  type orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<orderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order'], meta: { name: 'order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {orderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderFindUniqueArgs>(args: SelectSubset<T, orderFindUniqueArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {orderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderFindUniqueOrThrowArgs>(args: SelectSubset<T, orderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderFindFirstArgs>(args?: SelectSubset<T, orderFindFirstArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderFindFirstOrThrowArgs>(args?: SelectSubset<T, orderFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends orderFindManyArgs>(args?: SelectSubset<T, orderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {orderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends orderCreateArgs>(args: SelectSubset<T, orderCreateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {orderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderCreateManyArgs>(args?: SelectSubset<T, orderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {orderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends orderDeleteArgs>(args: SelectSubset<T, orderDeleteArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {orderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderUpdateArgs>(args: SelectSubset<T, orderUpdateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {orderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderDeleteManyArgs>(args?: SelectSubset<T, orderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderUpdateManyArgs>(args: SelectSubset<T, orderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {orderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends orderUpsertArgs>(args: SelectSubset<T, orderUpsertArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends orderCountArgs>(
      args?: Subset<T, orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderGroupByArgs['orderBy'] }
        : { orderBy?: orderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order model
   */
  readonly fields: orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order model
   */ 
  interface orderFieldRefs {
    readonly id: FieldRef<"order", 'Int'>
    readonly menu_id: FieldRef<"order", 'Int'>
    readonly user_id: FieldRef<"order", 'Int'>
    readonly price: FieldRef<"order", 'String'>
    readonly quantity: FieldRef<"order", 'String'>
    readonly status: FieldRef<"order", 'String'>
    readonly token_num: FieldRef<"order", 'String'>
    readonly date: FieldRef<"order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order findUnique
   */
  export type orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findUniqueOrThrow
   */
  export type orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findFirst
   */
  export type orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findFirstOrThrow
   */
  export type orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findMany
   */
  export type orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order create
   */
  export type orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to create a order.
     */
    data: XOR<orderCreateInput, orderUncheckedCreateInput>
  }

  /**
   * order createMany
   */
  export type orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order update
   */
  export type orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to update a order.
     */
    data: XOR<orderUpdateInput, orderUncheckedUpdateInput>
    /**
     * Choose, which order to update.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order updateMany
   */
  export type orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
  }

  /**
   * order upsert
   */
  export type orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The filter to search for the order to update in case it exists.
     */
    where: orderWhereUniqueInput
    /**
     * In case the order found by the `where` argument doesn't exist, create a new order with this data.
     */
    create: XOR<orderCreateInput, orderUncheckedCreateInput>
    /**
     * In case the order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderUpdateInput, orderUncheckedUpdateInput>
  }

  /**
   * order delete
   */
  export type orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter which order to delete.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order deleteMany
   */
  export type orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: orderWhereInput
  }

  /**
   * order without action
   */
  export type orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
  }


  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    description: string | null
    image: string | null
    category: string | null
    special: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    description: string | null
    image: string | null
    category: string | null
    special: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    price: number
    description: number
    image: number
    category: number
    special: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    image?: true
    category?: true
    special?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    image?: true
    category?: true
    special?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    image?: true
    category?: true
    special?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    price: number
    description: string
    image: string
    category: string
    special: string
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    image?: boolean
    category?: boolean
    special?: boolean
    cart?: boolean | product$cartArgs<ExtArgs>
    order?: boolean | product$orderArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>


  export type productSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    image?: boolean
    category?: boolean
    special?: boolean
  }

  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | product$cartArgs<ExtArgs>
    order?: boolean | product$orderArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {
      cart: Prisma.$cartPayload<ExtArgs>[]
      order: Prisma.$orderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      description: string
      image: string
      category: string
      special: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<Prisma.$productPayload, S>

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<productFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product'], meta: { name: 'product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productFindUniqueArgs>(args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs>(args: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productFindFirstArgs>(args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productFindFirstOrThrowArgs>(args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productFindManyArgs>(args?: SelectSubset<T, productFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends productCreateArgs>(args: SelectSubset<T, productCreateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {productCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productCreateManyArgs>(args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends productDeleteArgs>(args: SelectSubset<T, productDeleteArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productUpdateArgs>(args: SelectSubset<T, productUpdateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productDeleteManyArgs>(args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productUpdateManyArgs>(args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends productUpsertArgs>(args: SelectSubset<T, productUpsertArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product model
   */
  readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends product$cartArgs<ExtArgs> = {}>(args?: Subset<T, product$cartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany"> | Null>
    order<T extends product$orderArgs<ExtArgs> = {}>(args?: Subset<T, product$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product model
   */ 
  interface productFieldRefs {
    readonly id: FieldRef<"product", 'Int'>
    readonly name: FieldRef<"product", 'String'>
    readonly price: FieldRef<"product", 'Int'>
    readonly description: FieldRef<"product", 'String'>
    readonly image: FieldRef<"product", 'String'>
    readonly category: FieldRef<"product", 'String'>
    readonly special: FieldRef<"product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>
  }

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput
  }

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
  }

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput
  }

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput
  }

  /**
   * product.cart
   */
  export type product$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    where?: cartWhereInput
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    cursor?: cartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * product.order
   */
  export type product$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    where?: orderWhereInput
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    cursor?: orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    user_name: string | null
    user_phone: string | null
    user_address: string | null
    user_email: string | null
    user_password: string | null
    location: string | null
    user_token: string | null
    user_otp: string | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    user_name: string | null
    user_phone: string | null
    user_address: string | null
    user_email: string | null
    user_password: string | null
    location: string | null
    user_token: string | null
    user_otp: string | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    user_name: number
    user_phone: number
    user_address: number
    user_email: number
    user_password: number
    location: number
    user_token: number
    user_otp: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    user_name?: true
    user_phone?: true
    user_address?: true
    user_email?: true
    user_password?: true
    location?: true
    user_token?: true
    user_otp?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    user_name?: true
    user_phone?: true
    user_address?: true
    user_email?: true
    user_password?: true
    location?: true
    user_token?: true
    user_otp?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    user_name?: true
    user_phone?: true
    user_address?: true
    user_email?: true
    user_password?: true
    location?: true
    user_token?: true
    user_otp?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    user_name: string | null
    user_phone: string | null
    user_address: string | null
    user_email: string | null
    user_password: string | null
    location: string | null
    user_token: string | null
    user_otp: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_name?: boolean
    user_phone?: boolean
    user_address?: boolean
    user_email?: boolean
    user_password?: boolean
    location?: boolean
    user_token?: boolean
    user_otp?: boolean
    carts?: boolean | user$cartsArgs<ExtArgs>
    orders?: boolean | user$ordersArgs<ExtArgs>
    payments?: boolean | user$paymentsArgs<ExtArgs>
    Message?: boolean | user$MessageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type userSelectScalar = {
    user_id?: boolean
    user_name?: boolean
    user_phone?: boolean
    user_address?: boolean
    user_email?: boolean
    user_password?: boolean
    location?: boolean
    user_token?: boolean
    user_otp?: boolean
  }

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | user$cartsArgs<ExtArgs>
    orders?: boolean | user$ordersArgs<ExtArgs>
    payments?: boolean | user$paymentsArgs<ExtArgs>
    Message?: boolean | user$MessageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      carts: Prisma.$cartPayload<ExtArgs>[]
      orders: Prisma.$orderPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      Message: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      user_name: string | null
      user_phone: string | null
      user_address: string | null
      user_email: string | null
      user_password: string | null
      location: string | null
      user_token: string | null
      user_otp: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carts<T extends user$cartsArgs<ExtArgs> = {}>(args?: Subset<T, user$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany"> | Null>
    orders<T extends user$ordersArgs<ExtArgs> = {}>(args?: Subset<T, user$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany"> | Null>
    payments<T extends user$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, user$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    Message<T extends user$MessageArgs<ExtArgs> = {}>(args?: Subset<T, user$MessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly user_id: FieldRef<"user", 'Int'>
    readonly user_name: FieldRef<"user", 'String'>
    readonly user_phone: FieldRef<"user", 'String'>
    readonly user_address: FieldRef<"user", 'String'>
    readonly user_email: FieldRef<"user", 'String'>
    readonly user_password: FieldRef<"user", 'String'>
    readonly location: FieldRef<"user", 'String'>
    readonly user_token: FieldRef<"user", 'String'>
    readonly user_otp: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data?: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }

  /**
   * user.carts
   */
  export type user$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    where?: cartWhereInput
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    cursor?: cartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * user.orders
   */
  export type user$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    where?: orderWhereInput
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    cursor?: orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * user.payments
   */
  export type user$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * user.Message
   */
  export type user$MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model SliderImage
   */

  export type AggregateSliderImage = {
    _count: SliderImageCountAggregateOutputType | null
    _avg: SliderImageAvgAggregateOutputType | null
    _sum: SliderImageSumAggregateOutputType | null
    _min: SliderImageMinAggregateOutputType | null
    _max: SliderImageMaxAggregateOutputType | null
  }

  export type SliderImageAvgAggregateOutputType = {
    id: number | null
  }

  export type SliderImageSumAggregateOutputType = {
    id: number | null
  }

  export type SliderImageMinAggregateOutputType = {
    id: number | null
    image: string | null
  }

  export type SliderImageMaxAggregateOutputType = {
    id: number | null
    image: string | null
  }

  export type SliderImageCountAggregateOutputType = {
    id: number
    image: number
    _all: number
  }


  export type SliderImageAvgAggregateInputType = {
    id?: true
  }

  export type SliderImageSumAggregateInputType = {
    id?: true
  }

  export type SliderImageMinAggregateInputType = {
    id?: true
    image?: true
  }

  export type SliderImageMaxAggregateInputType = {
    id?: true
    image?: true
  }

  export type SliderImageCountAggregateInputType = {
    id?: true
    image?: true
    _all?: true
  }

  export type SliderImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SliderImage to aggregate.
     */
    where?: SliderImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SliderImages to fetch.
     */
    orderBy?: SliderImageOrderByWithRelationInput | SliderImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SliderImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SliderImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SliderImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SliderImages
    **/
    _count?: true | SliderImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SliderImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SliderImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SliderImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SliderImageMaxAggregateInputType
  }

  export type GetSliderImageAggregateType<T extends SliderImageAggregateArgs> = {
        [P in keyof T & keyof AggregateSliderImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSliderImage[P]>
      : GetScalarType<T[P], AggregateSliderImage[P]>
  }




  export type SliderImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SliderImageWhereInput
    orderBy?: SliderImageOrderByWithAggregationInput | SliderImageOrderByWithAggregationInput[]
    by: SliderImageScalarFieldEnum[] | SliderImageScalarFieldEnum
    having?: SliderImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SliderImageCountAggregateInputType | true
    _avg?: SliderImageAvgAggregateInputType
    _sum?: SliderImageSumAggregateInputType
    _min?: SliderImageMinAggregateInputType
    _max?: SliderImageMaxAggregateInputType
  }

  export type SliderImageGroupByOutputType = {
    id: number
    image: string
    _count: SliderImageCountAggregateOutputType | null
    _avg: SliderImageAvgAggregateOutputType | null
    _sum: SliderImageSumAggregateOutputType | null
    _min: SliderImageMinAggregateOutputType | null
    _max: SliderImageMaxAggregateOutputType | null
  }

  type GetSliderImageGroupByPayload<T extends SliderImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SliderImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SliderImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SliderImageGroupByOutputType[P]>
            : GetScalarType<T[P], SliderImageGroupByOutputType[P]>
        }
      >
    >


  export type SliderImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
  }, ExtArgs["result"]["sliderImage"]>


  export type SliderImageSelectScalar = {
    id?: boolean
    image?: boolean
  }


  export type $SliderImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SliderImage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
    }, ExtArgs["result"]["sliderImage"]>
    composites: {}
  }

  type SliderImageGetPayload<S extends boolean | null | undefined | SliderImageDefaultArgs> = $Result.GetResult<Prisma.$SliderImagePayload, S>

  type SliderImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SliderImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SliderImageCountAggregateInputType | true
    }

  export interface SliderImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SliderImage'], meta: { name: 'SliderImage' } }
    /**
     * Find zero or one SliderImage that matches the filter.
     * @param {SliderImageFindUniqueArgs} args - Arguments to find a SliderImage
     * @example
     * // Get one SliderImage
     * const sliderImage = await prisma.sliderImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SliderImageFindUniqueArgs>(args: SelectSubset<T, SliderImageFindUniqueArgs<ExtArgs>>): Prisma__SliderImageClient<$Result.GetResult<Prisma.$SliderImagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SliderImage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SliderImageFindUniqueOrThrowArgs} args - Arguments to find a SliderImage
     * @example
     * // Get one SliderImage
     * const sliderImage = await prisma.sliderImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SliderImageFindUniqueOrThrowArgs>(args: SelectSubset<T, SliderImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SliderImageClient<$Result.GetResult<Prisma.$SliderImagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SliderImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SliderImageFindFirstArgs} args - Arguments to find a SliderImage
     * @example
     * // Get one SliderImage
     * const sliderImage = await prisma.sliderImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SliderImageFindFirstArgs>(args?: SelectSubset<T, SliderImageFindFirstArgs<ExtArgs>>): Prisma__SliderImageClient<$Result.GetResult<Prisma.$SliderImagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SliderImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SliderImageFindFirstOrThrowArgs} args - Arguments to find a SliderImage
     * @example
     * // Get one SliderImage
     * const sliderImage = await prisma.sliderImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SliderImageFindFirstOrThrowArgs>(args?: SelectSubset<T, SliderImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SliderImageClient<$Result.GetResult<Prisma.$SliderImagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SliderImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SliderImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SliderImages
     * const sliderImages = await prisma.sliderImage.findMany()
     * 
     * // Get first 10 SliderImages
     * const sliderImages = await prisma.sliderImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sliderImageWithIdOnly = await prisma.sliderImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SliderImageFindManyArgs>(args?: SelectSubset<T, SliderImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SliderImagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SliderImage.
     * @param {SliderImageCreateArgs} args - Arguments to create a SliderImage.
     * @example
     * // Create one SliderImage
     * const SliderImage = await prisma.sliderImage.create({
     *   data: {
     *     // ... data to create a SliderImage
     *   }
     * })
     * 
     */
    create<T extends SliderImageCreateArgs>(args: SelectSubset<T, SliderImageCreateArgs<ExtArgs>>): Prisma__SliderImageClient<$Result.GetResult<Prisma.$SliderImagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SliderImages.
     * @param {SliderImageCreateManyArgs} args - Arguments to create many SliderImages.
     * @example
     * // Create many SliderImages
     * const sliderImage = await prisma.sliderImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SliderImageCreateManyArgs>(args?: SelectSubset<T, SliderImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SliderImage.
     * @param {SliderImageDeleteArgs} args - Arguments to delete one SliderImage.
     * @example
     * // Delete one SliderImage
     * const SliderImage = await prisma.sliderImage.delete({
     *   where: {
     *     // ... filter to delete one SliderImage
     *   }
     * })
     * 
     */
    delete<T extends SliderImageDeleteArgs>(args: SelectSubset<T, SliderImageDeleteArgs<ExtArgs>>): Prisma__SliderImageClient<$Result.GetResult<Prisma.$SliderImagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SliderImage.
     * @param {SliderImageUpdateArgs} args - Arguments to update one SliderImage.
     * @example
     * // Update one SliderImage
     * const sliderImage = await prisma.sliderImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SliderImageUpdateArgs>(args: SelectSubset<T, SliderImageUpdateArgs<ExtArgs>>): Prisma__SliderImageClient<$Result.GetResult<Prisma.$SliderImagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SliderImages.
     * @param {SliderImageDeleteManyArgs} args - Arguments to filter SliderImages to delete.
     * @example
     * // Delete a few SliderImages
     * const { count } = await prisma.sliderImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SliderImageDeleteManyArgs>(args?: SelectSubset<T, SliderImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SliderImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SliderImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SliderImages
     * const sliderImage = await prisma.sliderImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SliderImageUpdateManyArgs>(args: SelectSubset<T, SliderImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SliderImage.
     * @param {SliderImageUpsertArgs} args - Arguments to update or create a SliderImage.
     * @example
     * // Update or create a SliderImage
     * const sliderImage = await prisma.sliderImage.upsert({
     *   create: {
     *     // ... data to create a SliderImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SliderImage we want to update
     *   }
     * })
     */
    upsert<T extends SliderImageUpsertArgs>(args: SelectSubset<T, SliderImageUpsertArgs<ExtArgs>>): Prisma__SliderImageClient<$Result.GetResult<Prisma.$SliderImagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SliderImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SliderImageCountArgs} args - Arguments to filter SliderImages to count.
     * @example
     * // Count the number of SliderImages
     * const count = await prisma.sliderImage.count({
     *   where: {
     *     // ... the filter for the SliderImages we want to count
     *   }
     * })
    **/
    count<T extends SliderImageCountArgs>(
      args?: Subset<T, SliderImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SliderImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SliderImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SliderImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SliderImageAggregateArgs>(args: Subset<T, SliderImageAggregateArgs>): Prisma.PrismaPromise<GetSliderImageAggregateType<T>>

    /**
     * Group by SliderImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SliderImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SliderImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SliderImageGroupByArgs['orderBy'] }
        : { orderBy?: SliderImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SliderImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSliderImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SliderImage model
   */
  readonly fields: SliderImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SliderImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SliderImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SliderImage model
   */ 
  interface SliderImageFieldRefs {
    readonly id: FieldRef<"SliderImage", 'Int'>
    readonly image: FieldRef<"SliderImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SliderImage findUnique
   */
  export type SliderImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderImage
     */
    select?: SliderImageSelect<ExtArgs> | null
    /**
     * Filter, which SliderImage to fetch.
     */
    where: SliderImageWhereUniqueInput
  }

  /**
   * SliderImage findUniqueOrThrow
   */
  export type SliderImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderImage
     */
    select?: SliderImageSelect<ExtArgs> | null
    /**
     * Filter, which SliderImage to fetch.
     */
    where: SliderImageWhereUniqueInput
  }

  /**
   * SliderImage findFirst
   */
  export type SliderImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderImage
     */
    select?: SliderImageSelect<ExtArgs> | null
    /**
     * Filter, which SliderImage to fetch.
     */
    where?: SliderImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SliderImages to fetch.
     */
    orderBy?: SliderImageOrderByWithRelationInput | SliderImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SliderImages.
     */
    cursor?: SliderImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SliderImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SliderImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SliderImages.
     */
    distinct?: SliderImageScalarFieldEnum | SliderImageScalarFieldEnum[]
  }

  /**
   * SliderImage findFirstOrThrow
   */
  export type SliderImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderImage
     */
    select?: SliderImageSelect<ExtArgs> | null
    /**
     * Filter, which SliderImage to fetch.
     */
    where?: SliderImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SliderImages to fetch.
     */
    orderBy?: SliderImageOrderByWithRelationInput | SliderImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SliderImages.
     */
    cursor?: SliderImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SliderImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SliderImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SliderImages.
     */
    distinct?: SliderImageScalarFieldEnum | SliderImageScalarFieldEnum[]
  }

  /**
   * SliderImage findMany
   */
  export type SliderImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderImage
     */
    select?: SliderImageSelect<ExtArgs> | null
    /**
     * Filter, which SliderImages to fetch.
     */
    where?: SliderImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SliderImages to fetch.
     */
    orderBy?: SliderImageOrderByWithRelationInput | SliderImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SliderImages.
     */
    cursor?: SliderImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SliderImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SliderImages.
     */
    skip?: number
    distinct?: SliderImageScalarFieldEnum | SliderImageScalarFieldEnum[]
  }

  /**
   * SliderImage create
   */
  export type SliderImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderImage
     */
    select?: SliderImageSelect<ExtArgs> | null
    /**
     * The data needed to create a SliderImage.
     */
    data: XOR<SliderImageCreateInput, SliderImageUncheckedCreateInput>
  }

  /**
   * SliderImage createMany
   */
  export type SliderImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SliderImages.
     */
    data: SliderImageCreateManyInput | SliderImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SliderImage update
   */
  export type SliderImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderImage
     */
    select?: SliderImageSelect<ExtArgs> | null
    /**
     * The data needed to update a SliderImage.
     */
    data: XOR<SliderImageUpdateInput, SliderImageUncheckedUpdateInput>
    /**
     * Choose, which SliderImage to update.
     */
    where: SliderImageWhereUniqueInput
  }

  /**
   * SliderImage updateMany
   */
  export type SliderImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SliderImages.
     */
    data: XOR<SliderImageUpdateManyMutationInput, SliderImageUncheckedUpdateManyInput>
    /**
     * Filter which SliderImages to update
     */
    where?: SliderImageWhereInput
  }

  /**
   * SliderImage upsert
   */
  export type SliderImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderImage
     */
    select?: SliderImageSelect<ExtArgs> | null
    /**
     * The filter to search for the SliderImage to update in case it exists.
     */
    where: SliderImageWhereUniqueInput
    /**
     * In case the SliderImage found by the `where` argument doesn't exist, create a new SliderImage with this data.
     */
    create: XOR<SliderImageCreateInput, SliderImageUncheckedCreateInput>
    /**
     * In case the SliderImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SliderImageUpdateInput, SliderImageUncheckedUpdateInput>
  }

  /**
   * SliderImage delete
   */
  export type SliderImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderImage
     */
    select?: SliderImageSelect<ExtArgs> | null
    /**
     * Filter which SliderImage to delete.
     */
    where: SliderImageWhereUniqueInput
  }

  /**
   * SliderImage deleteMany
   */
  export type SliderImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SliderImages to delete
     */
    where?: SliderImageWhereInput
  }

  /**
   * SliderImage without action
   */
  export type SliderImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SliderImage
     */
    select?: SliderImageSelect<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    adminId: number | null
    userid: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    adminId: number | null
    userid: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    message: string | null
    senderId: number | null
    receiverId: number | null
    createdAt: Date | null
    adminId: number | null
    userid: number | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    message: string | null
    senderId: number | null
    receiverId: number | null
    createdAt: Date | null
    adminId: number | null
    userid: number | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    message: number
    senderId: number
    receiverId: number
    createdAt: number
    adminId: number
    userid: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    adminId?: true
    userid?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    adminId?: true
    userid?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    message?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
    adminId?: true
    userid?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    message?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
    adminId?: true
    userid?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    message?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
    adminId?: true
    userid?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    message: string
    senderId: number
    receiverId: number
    createdAt: Date
    adminId: number
    userid: number
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    adminId?: boolean
    userid?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    admin?: boolean | adminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>


  export type MessageSelectScalar = {
    id?: boolean
    message?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    adminId?: boolean
    userid?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    admin?: boolean | adminDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      admin: Prisma.$adminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message: string
      senderId: number
      receiverId: number
      createdAt: Date
      adminId: number
      userid: number
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    admin<T extends adminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, adminDefaultArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly message: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'Int'>
    readonly receiverId: FieldRef<"Message", 'Int'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly adminId: FieldRef<"Message", 'Int'>
    readonly userid: FieldRef<"Message", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    userid: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    userid: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    userid: number | null
    medius: string | null
    price: string | null
    createat: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    userid: number | null
    medius: string | null
    price: string | null
    createat: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userid: number
    medius: number
    price: number
    createat: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    userid?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    userid?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userid?: true
    medius?: true
    price?: true
    createat?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userid?: true
    medius?: true
    price?: true
    createat?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userid?: true
    medius?: true
    price?: true
    createat?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    userid: number
    medius: string
    price: string
    createat: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    medius?: boolean
    price?: boolean
    createat?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>


  export type PaymentSelectScalar = {
    id?: boolean
    userid?: boolean
    medius?: boolean
    price?: boolean
    createat?: boolean
  }

  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userid: number
      medius: string
      price: string
      createat: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly userid: FieldRef<"Payment", 'Int'>
    readonly medius: FieldRef<"Payment", 'String'>
    readonly price: FieldRef<"Payment", 'String'>
    readonly createat: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SuperAdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    image: 'image'
  };

  export type SuperAdminScalarFieldEnum = (typeof SuperAdminScalarFieldEnum)[keyof typeof SuperAdminScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    created_at: 'created_at',
    token: 'token',
    image: 'image'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    p_id: 'p_id',
    quantity: 'quantity'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    subject: 'subject',
    message: 'message'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    menu_id: 'menu_id',
    user_id: 'user_id',
    price: 'price',
    quantity: 'quantity',
    status: 'status',
    token_num: 'token_num',
    date: 'date'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    description: 'description',
    image: 'image',
    category: 'category',
    special: 'special'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    user_name: 'user_name',
    user_phone: 'user_phone',
    user_address: 'user_address',
    user_email: 'user_email',
    user_password: 'user_password',
    location: 'location',
    user_token: 'user_token',
    user_otp: 'user_otp'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SliderImageScalarFieldEnum: {
    id: 'id',
    image: 'image'
  };

  export type SliderImageScalarFieldEnum = (typeof SliderImageScalarFieldEnum)[keyof typeof SliderImageScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    message: 'message',
    senderId: 'senderId',
    receiverId: 'receiverId',
    createdAt: 'createdAt',
    adminId: 'adminId',
    userid: 'userid'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    medius: 'medius',
    price: 'price',
    createat: 'createat'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SuperAdminWhereInput = {
    AND?: SuperAdminWhereInput | SuperAdminWhereInput[]
    OR?: SuperAdminWhereInput[]
    NOT?: SuperAdminWhereInput | SuperAdminWhereInput[]
    id?: IntFilter<"SuperAdmin"> | number
    name?: StringFilter<"SuperAdmin"> | string
    email?: StringFilter<"SuperAdmin"> | string
    password?: StringFilter<"SuperAdmin"> | string
    created_at?: DateTimeFilter<"SuperAdmin"> | Date | string
    image?: StringNullableFilter<"SuperAdmin"> | string | null
  }

  export type SuperAdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    image?: SortOrderInput | SortOrder
  }

  export type SuperAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: SuperAdminWhereInput | SuperAdminWhereInput[]
    OR?: SuperAdminWhereInput[]
    NOT?: SuperAdminWhereInput | SuperAdminWhereInput[]
    name?: StringFilter<"SuperAdmin"> | string
    password?: StringFilter<"SuperAdmin"> | string
    created_at?: DateTimeFilter<"SuperAdmin"> | Date | string
    image?: StringNullableFilter<"SuperAdmin"> | string | null
  }, "id" | "email">

  export type SuperAdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: SuperAdminCountOrderByAggregateInput
    _avg?: SuperAdminAvgOrderByAggregateInput
    _max?: SuperAdminMaxOrderByAggregateInput
    _min?: SuperAdminMinOrderByAggregateInput
    _sum?: SuperAdminSumOrderByAggregateInput
  }

  export type SuperAdminScalarWhereWithAggregatesInput = {
    AND?: SuperAdminScalarWhereWithAggregatesInput | SuperAdminScalarWhereWithAggregatesInput[]
    OR?: SuperAdminScalarWhereWithAggregatesInput[]
    NOT?: SuperAdminScalarWhereWithAggregatesInput | SuperAdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SuperAdmin"> | number
    name?: StringWithAggregatesFilter<"SuperAdmin"> | string
    email?: StringWithAggregatesFilter<"SuperAdmin"> | string
    password?: StringWithAggregatesFilter<"SuperAdmin"> | string
    created_at?: DateTimeWithAggregatesFilter<"SuperAdmin"> | Date | string
    image?: StringNullableWithAggregatesFilter<"SuperAdmin"> | string | null
  }

  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: IntFilter<"admin"> | number
    name?: StringFilter<"admin"> | string
    email?: StringFilter<"admin"> | string
    phone?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    created_at?: DateTimeFilter<"admin"> | Date | string
    token?: StringNullableFilter<"admin"> | string | null
    image?: StringNullableFilter<"admin"> | string | null
    messages?: MessageListRelationFilter
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    token?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    messages?: MessageOrderByRelationAggregateInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    name?: StringFilter<"admin"> | string
    phone?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    created_at?: DateTimeFilter<"admin"> | Date | string
    token?: StringNullableFilter<"admin"> | string | null
    image?: StringNullableFilter<"admin"> | string | null
    messages?: MessageListRelationFilter
  }, "id" | "email">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    token?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin"> | number
    name?: StringWithAggregatesFilter<"admin"> | string
    email?: StringWithAggregatesFilter<"admin"> | string
    phone?: StringWithAggregatesFilter<"admin"> | string
    password?: StringWithAggregatesFilter<"admin"> | string
    created_at?: DateTimeWithAggregatesFilter<"admin"> | Date | string
    token?: StringNullableWithAggregatesFilter<"admin"> | string | null
    image?: StringNullableWithAggregatesFilter<"admin"> | string | null
  }

  export type cartWhereInput = {
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    id?: IntFilter<"cart"> | number
    user_id?: IntFilter<"cart"> | number
    p_id?: IntFilter<"cart"> | number
    quantity?: IntFilter<"cart"> | number
    product?: XOR<ProductRelationFilter, productWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type cartOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    p_id?: SortOrder
    quantity?: SortOrder
    product?: productOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type cartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    user_id?: IntFilter<"cart"> | number
    p_id?: IntFilter<"cart"> | number
    quantity?: IntFilter<"cart"> | number
    product?: XOR<ProductRelationFilter, productWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "id">

  export type cartOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    p_id?: SortOrder
    quantity?: SortOrder
    _count?: cartCountOrderByAggregateInput
    _avg?: cartAvgOrderByAggregateInput
    _max?: cartMaxOrderByAggregateInput
    _min?: cartMinOrderByAggregateInput
    _sum?: cartSumOrderByAggregateInput
  }

  export type cartScalarWhereWithAggregatesInput = {
    AND?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    OR?: cartScalarWhereWithAggregatesInput[]
    NOT?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cart"> | number
    user_id?: IntWithAggregatesFilter<"cart"> | number
    p_id?: IntWithAggregatesFilter<"cart"> | number
    quantity?: IntWithAggregatesFilter<"cart"> | number
  }

  export type contactWhereInput = {
    AND?: contactWhereInput | contactWhereInput[]
    OR?: contactWhereInput[]
    NOT?: contactWhereInput | contactWhereInput[]
    id?: IntFilter<"contact"> | number
    name?: StringFilter<"contact"> | string
    email?: StringFilter<"contact"> | string
    subject?: StringFilter<"contact"> | string
    message?: StringFilter<"contact"> | string
  }

  export type contactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
  }

  export type contactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: contactWhereInput | contactWhereInput[]
    OR?: contactWhereInput[]
    NOT?: contactWhereInput | contactWhereInput[]
    name?: StringFilter<"contact"> | string
    email?: StringFilter<"contact"> | string
    subject?: StringFilter<"contact"> | string
    message?: StringFilter<"contact"> | string
  }, "id">

  export type contactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    _count?: contactCountOrderByAggregateInput
    _avg?: contactAvgOrderByAggregateInput
    _max?: contactMaxOrderByAggregateInput
    _min?: contactMinOrderByAggregateInput
    _sum?: contactSumOrderByAggregateInput
  }

  export type contactScalarWhereWithAggregatesInput = {
    AND?: contactScalarWhereWithAggregatesInput | contactScalarWhereWithAggregatesInput[]
    OR?: contactScalarWhereWithAggregatesInput[]
    NOT?: contactScalarWhereWithAggregatesInput | contactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"contact"> | number
    name?: StringWithAggregatesFilter<"contact"> | string
    email?: StringWithAggregatesFilter<"contact"> | string
    subject?: StringWithAggregatesFilter<"contact"> | string
    message?: StringWithAggregatesFilter<"contact"> | string
  }

  export type orderWhereInput = {
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    id?: IntFilter<"order"> | number
    menu_id?: IntFilter<"order"> | number
    user_id?: IntFilter<"order"> | number
    price?: StringFilter<"order"> | string
    quantity?: StringFilter<"order"> | string
    status?: StringFilter<"order"> | string
    token_num?: StringFilter<"order"> | string
    date?: DateTimeFilter<"order"> | Date | string
    product?: XOR<ProductRelationFilter, productWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type orderOrderByWithRelationInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    token_num?: SortOrder
    date?: SortOrder
    product?: productOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type orderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    menu_id?: IntFilter<"order"> | number
    user_id?: IntFilter<"order"> | number
    price?: StringFilter<"order"> | string
    quantity?: StringFilter<"order"> | string
    status?: StringFilter<"order"> | string
    token_num?: StringFilter<"order"> | string
    date?: DateTimeFilter<"order"> | Date | string
    product?: XOR<ProductRelationFilter, productWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "id">

  export type orderOrderByWithAggregationInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    token_num?: SortOrder
    date?: SortOrder
    _count?: orderCountOrderByAggregateInput
    _avg?: orderAvgOrderByAggregateInput
    _max?: orderMaxOrderByAggregateInput
    _min?: orderMinOrderByAggregateInput
    _sum?: orderSumOrderByAggregateInput
  }

  export type orderScalarWhereWithAggregatesInput = {
    AND?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    OR?: orderScalarWhereWithAggregatesInput[]
    NOT?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order"> | number
    menu_id?: IntWithAggregatesFilter<"order"> | number
    user_id?: IntWithAggregatesFilter<"order"> | number
    price?: StringWithAggregatesFilter<"order"> | string
    quantity?: StringWithAggregatesFilter<"order"> | string
    status?: StringWithAggregatesFilter<"order"> | string
    token_num?: StringWithAggregatesFilter<"order"> | string
    date?: DateTimeWithAggregatesFilter<"order"> | Date | string
  }

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    id?: IntFilter<"product"> | number
    name?: StringFilter<"product"> | string
    price?: IntFilter<"product"> | number
    description?: StringFilter<"product"> | string
    image?: StringFilter<"product"> | string
    category?: StringFilter<"product"> | string
    special?: StringFilter<"product"> | string
    cart?: CartListRelationFilter
    order?: OrderListRelationFilter
  }

  export type productOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    image?: SortOrder
    category?: SortOrder
    special?: SortOrder
    cart?: cartOrderByRelationAggregateInput
    order?: orderOrderByRelationAggregateInput
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    name?: StringFilter<"product"> | string
    price?: IntFilter<"product"> | number
    description?: StringFilter<"product"> | string
    image?: StringFilter<"product"> | string
    category?: StringFilter<"product"> | string
    special?: StringFilter<"product"> | string
    cart?: CartListRelationFilter
    order?: OrderListRelationFilter
  }, "id">

  export type productOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    image?: SortOrder
    category?: SortOrder
    special?: SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product"> | number
    name?: StringWithAggregatesFilter<"product"> | string
    price?: IntWithAggregatesFilter<"product"> | number
    description?: StringWithAggregatesFilter<"product"> | string
    image?: StringWithAggregatesFilter<"product"> | string
    category?: StringWithAggregatesFilter<"product"> | string
    special?: StringWithAggregatesFilter<"product"> | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    user_id?: IntFilter<"user"> | number
    user_name?: StringNullableFilter<"user"> | string | null
    user_phone?: StringNullableFilter<"user"> | string | null
    user_address?: StringNullableFilter<"user"> | string | null
    user_email?: StringNullableFilter<"user"> | string | null
    user_password?: StringNullableFilter<"user"> | string | null
    location?: StringNullableFilter<"user"> | string | null
    user_token?: StringNullableFilter<"user"> | string | null
    user_otp?: StringNullableFilter<"user"> | string | null
    carts?: CartListRelationFilter
    orders?: OrderListRelationFilter
    payments?: PaymentListRelationFilter
    Message?: MessageListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    user_id?: SortOrder
    user_name?: SortOrderInput | SortOrder
    user_phone?: SortOrderInput | SortOrder
    user_address?: SortOrderInput | SortOrder
    user_email?: SortOrderInput | SortOrder
    user_password?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    user_token?: SortOrderInput | SortOrder
    user_otp?: SortOrderInput | SortOrder
    carts?: cartOrderByRelationAggregateInput
    orders?: orderOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    Message?: MessageOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    user_email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    user_name?: StringNullableFilter<"user"> | string | null
    user_phone?: StringNullableFilter<"user"> | string | null
    user_address?: StringNullableFilter<"user"> | string | null
    user_password?: StringNullableFilter<"user"> | string | null
    location?: StringNullableFilter<"user"> | string | null
    user_token?: StringNullableFilter<"user"> | string | null
    user_otp?: StringNullableFilter<"user"> | string | null
    carts?: CartListRelationFilter
    orders?: OrderListRelationFilter
    payments?: PaymentListRelationFilter
    Message?: MessageListRelationFilter
  }, "user_id" | "user_email">

  export type userOrderByWithAggregationInput = {
    user_id?: SortOrder
    user_name?: SortOrderInput | SortOrder
    user_phone?: SortOrderInput | SortOrder
    user_address?: SortOrderInput | SortOrder
    user_email?: SortOrderInput | SortOrder
    user_password?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    user_token?: SortOrderInput | SortOrder
    user_otp?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"user"> | number
    user_name?: StringNullableWithAggregatesFilter<"user"> | string | null
    user_phone?: StringNullableWithAggregatesFilter<"user"> | string | null
    user_address?: StringNullableWithAggregatesFilter<"user"> | string | null
    user_email?: StringNullableWithAggregatesFilter<"user"> | string | null
    user_password?: StringNullableWithAggregatesFilter<"user"> | string | null
    location?: StringNullableWithAggregatesFilter<"user"> | string | null
    user_token?: StringNullableWithAggregatesFilter<"user"> | string | null
    user_otp?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type SliderImageWhereInput = {
    AND?: SliderImageWhereInput | SliderImageWhereInput[]
    OR?: SliderImageWhereInput[]
    NOT?: SliderImageWhereInput | SliderImageWhereInput[]
    id?: IntFilter<"SliderImage"> | number
    image?: StringFilter<"SliderImage"> | string
  }

  export type SliderImageOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
  }

  export type SliderImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SliderImageWhereInput | SliderImageWhereInput[]
    OR?: SliderImageWhereInput[]
    NOT?: SliderImageWhereInput | SliderImageWhereInput[]
    image?: StringFilter<"SliderImage"> | string
  }, "id">

  export type SliderImageOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    _count?: SliderImageCountOrderByAggregateInput
    _avg?: SliderImageAvgOrderByAggregateInput
    _max?: SliderImageMaxOrderByAggregateInput
    _min?: SliderImageMinOrderByAggregateInput
    _sum?: SliderImageSumOrderByAggregateInput
  }

  export type SliderImageScalarWhereWithAggregatesInput = {
    AND?: SliderImageScalarWhereWithAggregatesInput | SliderImageScalarWhereWithAggregatesInput[]
    OR?: SliderImageScalarWhereWithAggregatesInput[]
    NOT?: SliderImageScalarWhereWithAggregatesInput | SliderImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SliderImage"> | number
    image?: StringWithAggregatesFilter<"SliderImage"> | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    message?: StringFilter<"Message"> | string
    senderId?: IntFilter<"Message"> | number
    receiverId?: IntFilter<"Message"> | number
    createdAt?: DateTimeFilter<"Message"> | Date | string
    adminId?: IntFilter<"Message"> | number
    userid?: IntFilter<"Message"> | number
    user?: XOR<UserRelationFilter, userWhereInput>
    admin?: XOR<AdminRelationFilter, adminWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
    userid?: SortOrder
    user?: userOrderByWithRelationInput
    admin?: adminOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    message?: StringFilter<"Message"> | string
    senderId?: IntFilter<"Message"> | number
    receiverId?: IntFilter<"Message"> | number
    createdAt?: DateTimeFilter<"Message"> | Date | string
    adminId?: IntFilter<"Message"> | number
    userid?: IntFilter<"Message"> | number
    user?: XOR<UserRelationFilter, userWhereInput>
    admin?: XOR<AdminRelationFilter, adminWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
    userid?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    message?: StringWithAggregatesFilter<"Message"> | string
    senderId?: IntWithAggregatesFilter<"Message"> | number
    receiverId?: IntWithAggregatesFilter<"Message"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    adminId?: IntWithAggregatesFilter<"Message"> | number
    userid?: IntWithAggregatesFilter<"Message"> | number
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    userid?: IntFilter<"Payment"> | number
    medius?: StringFilter<"Payment"> | string
    price?: StringFilter<"Payment"> | string
    createat?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    medius?: SortOrder
    price?: SortOrder
    createat?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userid?: IntFilter<"Payment"> | number
    medius?: StringFilter<"Payment"> | string
    price?: StringFilter<"Payment"> | string
    createat?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    medius?: SortOrder
    price?: SortOrder
    createat?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    userid?: IntWithAggregatesFilter<"Payment"> | number
    medius?: StringWithAggregatesFilter<"Payment"> | string
    price?: StringWithAggregatesFilter<"Payment"> | string
    createat?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type SuperAdminCreateInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string
    image?: string | null
  }

  export type SuperAdminUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string
    image?: string | null
  }

  export type SuperAdminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SuperAdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SuperAdminCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string
    image?: string | null
  }

  export type SuperAdminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SuperAdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type adminCreateInput = {
    name: string
    email: string
    phone: string
    password: string
    created_at?: Date | string
    token?: string | null
    image?: string | null
    messages?: MessageCreateNestedManyWithoutAdminInput
  }

  export type adminUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    created_at?: Date | string
    token?: string | null
    image?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutAdminInput
  }

  export type adminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUpdateManyWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type adminCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    created_at?: Date | string
    token?: string | null
    image?: string | null
  }

  export type adminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cartCreateInput = {
    quantity?: number
    product: productCreateNestedOneWithoutCartInput
    user: userCreateNestedOneWithoutCartsInput
  }

  export type cartUncheckedCreateInput = {
    id?: number
    user_id: number
    p_id: number
    quantity?: number
  }

  export type cartUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product?: productUpdateOneRequiredWithoutCartNestedInput
    user?: userUpdateOneRequiredWithoutCartsNestedInput
  }

  export type cartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    p_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type cartCreateManyInput = {
    id?: number
    user_id: number
    p_id: number
    quantity?: number
  }

  export type cartUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type cartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    p_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type contactCreateInput = {
    name: string
    email: string
    subject: string
    message: string
  }

  export type contactUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    subject: string
    message: string
  }

  export type contactUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type contactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type contactCreateManyInput = {
    id?: number
    name: string
    email: string
    subject: string
    message: string
  }

  export type contactUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type contactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type orderCreateInput = {
    price: string
    quantity: string
    status: string
    token_num: string
    date?: Date | string
    product: productCreateNestedOneWithoutOrderInput
    user: userCreateNestedOneWithoutOrdersInput
  }

  export type orderUncheckedCreateInput = {
    id?: number
    menu_id: number
    user_id: number
    price: string
    quantity: string
    status: string
    token_num: string
    date?: Date | string
  }

  export type orderUpdateInput = {
    price?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token_num?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUpdateOneRequiredWithoutOrderNestedInput
    user?: userUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type orderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token_num?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderCreateManyInput = {
    id?: number
    menu_id: number
    user_id: number
    price: string
    quantity: string
    status: string
    token_num: string
    date?: Date | string
  }

  export type orderUpdateManyMutationInput = {
    price?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token_num?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token_num?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productCreateInput = {
    name: string
    price: number
    description: string
    image: string
    category: string
    special: string
    cart?: cartCreateNestedManyWithoutProductInput
    order?: orderCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    description: string
    image: string
    category: string
    special: string
    cart?: cartUncheckedCreateNestedManyWithoutProductInput
    order?: orderUncheckedCreateNestedManyWithoutProductInput
  }

  export type productUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    special?: StringFieldUpdateOperationsInput | string
    cart?: cartUpdateManyWithoutProductNestedInput
    order?: orderUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    special?: StringFieldUpdateOperationsInput | string
    cart?: cartUncheckedUpdateManyWithoutProductNestedInput
    order?: orderUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateManyInput = {
    id?: number
    name: string
    price: number
    description: string
    image: string
    category: string
    special: string
  }

  export type productUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    special?: StringFieldUpdateOperationsInput | string
  }

  export type productUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    special?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateInput = {
    user_name?: string | null
    user_phone?: string | null
    user_address?: string | null
    user_email?: string | null
    user_password?: string | null
    location?: string | null
    user_token?: string | null
    user_otp?: string | null
    carts?: cartCreateNestedManyWithoutUserInput
    orders?: orderCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    user_id?: number
    user_name?: string | null
    user_phone?: string | null
    user_address?: string | null
    user_email?: string | null
    user_password?: string | null
    location?: string | null
    user_token?: string | null
    user_otp?: string | null
    carts?: cartUncheckedCreateNestedManyWithoutUserInput
    orders?: orderUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_password?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_otp?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartUpdateManyWithoutUserNestedInput
    orders?: orderUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_password?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_otp?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartUncheckedUpdateManyWithoutUserNestedInput
    orders?: orderUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    user_id?: number
    user_name?: string | null
    user_phone?: string | null
    user_address?: string | null
    user_email?: string | null
    user_password?: string | null
    location?: string | null
    user_token?: string | null
    user_otp?: string | null
  }

  export type userUpdateManyMutationInput = {
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_password?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_otp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_password?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_otp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SliderImageCreateInput = {
    image: string
  }

  export type SliderImageUncheckedCreateInput = {
    id?: number
    image: string
  }

  export type SliderImageUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
  }

  export type SliderImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type SliderImageCreateManyInput = {
    id?: number
    image: string
  }

  export type SliderImageUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
  }

  export type SliderImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    message: string
    senderId: number
    receiverId: number
    createdAt?: Date | string
    user: userCreateNestedOneWithoutMessageInput
    admin: adminCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    message: string
    senderId: number
    receiverId: number
    createdAt?: Date | string
    adminId: number
    userid: number
  }

  export type MessageUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutMessageNestedInput
    admin?: adminUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateManyInput = {
    id?: number
    message: string
    senderId: number
    receiverId: number
    createdAt?: Date | string
    adminId: number
    userid: number
  }

  export type MessageUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateInput = {
    medius: string
    price: string
    createat?: Date | string
    user: userCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    userid: number
    medius: string
    price: string
    createat?: Date | string
  }

  export type PaymentUpdateInput = {
    medius?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    createat?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    medius?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    createat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: number
    userid: number
    medius: string
    price: string
    createat?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    medius?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    createat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    medius?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    createat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SuperAdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    image?: SortOrder
  }

  export type SuperAdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SuperAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    image?: SortOrder
  }

  export type SuperAdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    image?: SortOrder
  }

  export type SuperAdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    token?: SortOrder
    image?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    token?: SortOrder
    image?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    token?: SortOrder
    image?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductRelationFilter = {
    is?: productWhereInput
    isNot?: productWhereInput
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type cartCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    p_id?: SortOrder
    quantity?: SortOrder
  }

  export type cartAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    p_id?: SortOrder
    quantity?: SortOrder
  }

  export type cartMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    p_id?: SortOrder
    quantity?: SortOrder
  }

  export type cartMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    p_id?: SortOrder
    quantity?: SortOrder
  }

  export type cartSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    p_id?: SortOrder
    quantity?: SortOrder
  }

  export type contactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
  }

  export type contactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type contactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
  }

  export type contactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
  }

  export type contactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type orderCountOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    token_num?: SortOrder
    date?: SortOrder
  }

  export type orderAvgOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
  }

  export type orderMaxOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    token_num?: SortOrder
    date?: SortOrder
  }

  export type orderMinOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    status?: SortOrder
    token_num?: SortOrder
    date?: SortOrder
  }

  export type orderSumOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    user_id?: SortOrder
  }

  export type CartListRelationFilter = {
    every?: cartWhereInput
    some?: cartWhereInput
    none?: cartWhereInput
  }

  export type OrderListRelationFilter = {
    every?: orderWhereInput
    some?: orderWhereInput
    none?: orderWhereInput
  }

  export type cartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    image?: SortOrder
    category?: SortOrder
    special?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    image?: SortOrder
    category?: SortOrder
    special?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    image?: SortOrder
    category?: SortOrder
    special?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_phone?: SortOrder
    user_address?: SortOrder
    user_email?: SortOrder
    user_password?: SortOrder
    location?: SortOrder
    user_token?: SortOrder
    user_otp?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_phone?: SortOrder
    user_address?: SortOrder
    user_email?: SortOrder
    user_password?: SortOrder
    location?: SortOrder
    user_token?: SortOrder
    user_otp?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_phone?: SortOrder
    user_address?: SortOrder
    user_email?: SortOrder
    user_password?: SortOrder
    location?: SortOrder
    user_token?: SortOrder
    user_otp?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type SliderImageCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
  }

  export type SliderImageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SliderImageMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
  }

  export type SliderImageMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
  }

  export type SliderImageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminRelationFilter = {
    is?: adminWhereInput
    isNot?: adminWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
    userid?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    adminId?: SortOrder
    userid?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
    userid?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
    userid?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    adminId?: SortOrder
    userid?: SortOrder
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    medius?: SortOrder
    price?: SortOrder
    createat?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    medius?: SortOrder
    price?: SortOrder
    createat?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    medius?: SortOrder
    price?: SortOrder
    createat?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MessageCreateNestedManyWithoutAdminInput = {
    create?: XOR<MessageCreateWithoutAdminInput, MessageUncheckedCreateWithoutAdminInput> | MessageCreateWithoutAdminInput[] | MessageUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAdminInput | MessageCreateOrConnectWithoutAdminInput[]
    createMany?: MessageCreateManyAdminInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<MessageCreateWithoutAdminInput, MessageUncheckedCreateWithoutAdminInput> | MessageCreateWithoutAdminInput[] | MessageUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAdminInput | MessageCreateOrConnectWithoutAdminInput[]
    createMany?: MessageCreateManyAdminInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUpdateManyWithoutAdminNestedInput = {
    create?: XOR<MessageCreateWithoutAdminInput, MessageUncheckedCreateWithoutAdminInput> | MessageCreateWithoutAdminInput[] | MessageUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAdminInput | MessageCreateOrConnectWithoutAdminInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutAdminInput | MessageUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: MessageCreateManyAdminInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutAdminInput | MessageUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutAdminInput | MessageUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<MessageCreateWithoutAdminInput, MessageUncheckedCreateWithoutAdminInput> | MessageCreateWithoutAdminInput[] | MessageUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAdminInput | MessageCreateOrConnectWithoutAdminInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutAdminInput | MessageUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: MessageCreateManyAdminInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutAdminInput | MessageUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutAdminInput | MessageUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type productCreateNestedOneWithoutCartInput = {
    create?: XOR<productCreateWithoutCartInput, productUncheckedCreateWithoutCartInput>
    connectOrCreate?: productCreateOrConnectWithoutCartInput
    connect?: productWhereUniqueInput
  }

  export type userCreateNestedOneWithoutCartsInput = {
    create?: XOR<userCreateWithoutCartsInput, userUncheckedCreateWithoutCartsInput>
    connectOrCreate?: userCreateOrConnectWithoutCartsInput
    connect?: userWhereUniqueInput
  }

  export type productUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<productCreateWithoutCartInput, productUncheckedCreateWithoutCartInput>
    connectOrCreate?: productCreateOrConnectWithoutCartInput
    upsert?: productUpsertWithoutCartInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutCartInput, productUpdateWithoutCartInput>, productUncheckedUpdateWithoutCartInput>
  }

  export type userUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<userCreateWithoutCartsInput, userUncheckedCreateWithoutCartsInput>
    connectOrCreate?: userCreateOrConnectWithoutCartsInput
    upsert?: userUpsertWithoutCartsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCartsInput, userUpdateWithoutCartsInput>, userUncheckedUpdateWithoutCartsInput>
  }

  export type productCreateNestedOneWithoutOrderInput = {
    create?: XOR<productCreateWithoutOrderInput, productUncheckedCreateWithoutOrderInput>
    connectOrCreate?: productCreateOrConnectWithoutOrderInput
    connect?: productWhereUniqueInput
  }

  export type userCreateNestedOneWithoutOrdersInput = {
    create?: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: userCreateOrConnectWithoutOrdersInput
    connect?: userWhereUniqueInput
  }

  export type productUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<productCreateWithoutOrderInput, productUncheckedCreateWithoutOrderInput>
    connectOrCreate?: productCreateOrConnectWithoutOrderInput
    upsert?: productUpsertWithoutOrderInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutOrderInput, productUpdateWithoutOrderInput>, productUncheckedUpdateWithoutOrderInput>
  }

  export type userUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: userCreateOrConnectWithoutOrdersInput
    upsert?: userUpsertWithoutOrdersInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutOrdersInput, userUpdateWithoutOrdersInput>, userUncheckedUpdateWithoutOrdersInput>
  }

  export type cartCreateNestedManyWithoutProductInput = {
    create?: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput> | cartCreateWithoutProductInput[] | cartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartCreateOrConnectWithoutProductInput | cartCreateOrConnectWithoutProductInput[]
    createMany?: cartCreateManyProductInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type orderCreateNestedManyWithoutProductInput = {
    create?: XOR<orderCreateWithoutProductInput, orderUncheckedCreateWithoutProductInput> | orderCreateWithoutProductInput[] | orderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderCreateOrConnectWithoutProductInput | orderCreateOrConnectWithoutProductInput[]
    createMany?: orderCreateManyProductInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type cartUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput> | cartCreateWithoutProductInput[] | cartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartCreateOrConnectWithoutProductInput | cartCreateOrConnectWithoutProductInput[]
    createMany?: cartCreateManyProductInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type orderUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<orderCreateWithoutProductInput, orderUncheckedCreateWithoutProductInput> | orderCreateWithoutProductInput[] | orderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderCreateOrConnectWithoutProductInput | orderCreateOrConnectWithoutProductInput[]
    createMany?: orderCreateManyProductInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type cartUpdateManyWithoutProductNestedInput = {
    create?: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput> | cartCreateWithoutProductInput[] | cartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartCreateOrConnectWithoutProductInput | cartCreateOrConnectWithoutProductInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutProductInput | cartUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: cartCreateManyProductInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutProductInput | cartUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: cartUpdateManyWithWhereWithoutProductInput | cartUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type orderUpdateManyWithoutProductNestedInput = {
    create?: XOR<orderCreateWithoutProductInput, orderUncheckedCreateWithoutProductInput> | orderCreateWithoutProductInput[] | orderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderCreateOrConnectWithoutProductInput | orderCreateOrConnectWithoutProductInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutProductInput | orderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: orderCreateManyProductInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutProductInput | orderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: orderUpdateManyWithWhereWithoutProductInput | orderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type cartUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput> | cartCreateWithoutProductInput[] | cartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartCreateOrConnectWithoutProductInput | cartCreateOrConnectWithoutProductInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutProductInput | cartUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: cartCreateManyProductInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutProductInput | cartUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: cartUpdateManyWithWhereWithoutProductInput | cartUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type orderUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<orderCreateWithoutProductInput, orderUncheckedCreateWithoutProductInput> | orderCreateWithoutProductInput[] | orderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderCreateOrConnectWithoutProductInput | orderCreateOrConnectWithoutProductInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutProductInput | orderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: orderCreateManyProductInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutProductInput | orderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: orderUpdateManyWithWhereWithoutProductInput | orderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type cartCreateNestedManyWithoutUserInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type orderCreateNestedManyWithoutUserInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type cartUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type orderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type cartUpdateManyWithoutUserNestedInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutUserInput | cartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutUserInput | cartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cartUpdateManyWithWhereWithoutUserInput | cartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type orderUpdateManyWithoutUserNestedInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type cartUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutUserInput | cartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutUserInput | cartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cartUpdateManyWithWhereWithoutUserInput | cartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type orderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutMessageInput = {
    create?: XOR<userCreateWithoutMessageInput, userUncheckedCreateWithoutMessageInput>
    connectOrCreate?: userCreateOrConnectWithoutMessageInput
    connect?: userWhereUniqueInput
  }

  export type adminCreateNestedOneWithoutMessagesInput = {
    create?: XOR<adminCreateWithoutMessagesInput, adminUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: adminCreateOrConnectWithoutMessagesInput
    connect?: adminWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutMessageNestedInput = {
    create?: XOR<userCreateWithoutMessageInput, userUncheckedCreateWithoutMessageInput>
    connectOrCreate?: userCreateOrConnectWithoutMessageInput
    upsert?: userUpsertWithoutMessageInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMessageInput, userUpdateWithoutMessageInput>, userUncheckedUpdateWithoutMessageInput>
  }

  export type adminUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<adminCreateWithoutMessagesInput, adminUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: adminCreateOrConnectWithoutMessagesInput
    upsert?: adminUpsertWithoutMessagesInput
    connect?: adminWhereUniqueInput
    update?: XOR<XOR<adminUpdateToOneWithWhereWithoutMessagesInput, adminUpdateWithoutMessagesInput>, adminUncheckedUpdateWithoutMessagesInput>
  }

  export type userCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<userCreateWithoutPaymentsInput, userUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: userCreateOrConnectWithoutPaymentsInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<userCreateWithoutPaymentsInput, userUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: userCreateOrConnectWithoutPaymentsInput
    upsert?: userUpsertWithoutPaymentsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPaymentsInput, userUpdateWithoutPaymentsInput>, userUncheckedUpdateWithoutPaymentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MessageCreateWithoutAdminInput = {
    message: string
    senderId: number
    receiverId: number
    createdAt?: Date | string
    user: userCreateNestedOneWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutAdminInput = {
    id?: number
    message: string
    senderId: number
    receiverId: number
    createdAt?: Date | string
    userid: number
  }

  export type MessageCreateOrConnectWithoutAdminInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutAdminInput, MessageUncheckedCreateWithoutAdminInput>
  }

  export type MessageCreateManyAdminInputEnvelope = {
    data: MessageCreateManyAdminInput | MessageCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutAdminInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutAdminInput, MessageUncheckedUpdateWithoutAdminInput>
    create: XOR<MessageCreateWithoutAdminInput, MessageUncheckedCreateWithoutAdminInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutAdminInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutAdminInput, MessageUncheckedUpdateWithoutAdminInput>
  }

  export type MessageUpdateManyWithWhereWithoutAdminInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutAdminInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    message?: StringFilter<"Message"> | string
    senderId?: IntFilter<"Message"> | number
    receiverId?: IntFilter<"Message"> | number
    createdAt?: DateTimeFilter<"Message"> | Date | string
    adminId?: IntFilter<"Message"> | number
    userid?: IntFilter<"Message"> | number
  }

  export type productCreateWithoutCartInput = {
    name: string
    price: number
    description: string
    image: string
    category: string
    special: string
    order?: orderCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutCartInput = {
    id?: number
    name: string
    price: number
    description: string
    image: string
    category: string
    special: string
    order?: orderUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutCartInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutCartInput, productUncheckedCreateWithoutCartInput>
  }

  export type userCreateWithoutCartsInput = {
    user_name?: string | null
    user_phone?: string | null
    user_address?: string | null
    user_email?: string | null
    user_password?: string | null
    location?: string | null
    user_token?: string | null
    user_otp?: string | null
    orders?: orderCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutCartsInput = {
    user_id?: number
    user_name?: string | null
    user_phone?: string | null
    user_address?: string | null
    user_email?: string | null
    user_password?: string | null
    location?: string | null
    user_token?: string | null
    user_otp?: string | null
    orders?: orderUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutCartsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCartsInput, userUncheckedCreateWithoutCartsInput>
  }

  export type productUpsertWithoutCartInput = {
    update: XOR<productUpdateWithoutCartInput, productUncheckedUpdateWithoutCartInput>
    create: XOR<productCreateWithoutCartInput, productUncheckedCreateWithoutCartInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutCartInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutCartInput, productUncheckedUpdateWithoutCartInput>
  }

  export type productUpdateWithoutCartInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    special?: StringFieldUpdateOperationsInput | string
    order?: orderUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    special?: StringFieldUpdateOperationsInput | string
    order?: orderUncheckedUpdateManyWithoutProductNestedInput
  }

  export type userUpsertWithoutCartsInput = {
    update: XOR<userUpdateWithoutCartsInput, userUncheckedUpdateWithoutCartsInput>
    create: XOR<userCreateWithoutCartsInput, userUncheckedCreateWithoutCartsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCartsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCartsInput, userUncheckedUpdateWithoutCartsInput>
  }

  export type userUpdateWithoutCartsInput = {
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_password?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_otp?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: orderUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCartsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_password?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_otp?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: orderUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type productCreateWithoutOrderInput = {
    name: string
    price: number
    description: string
    image: string
    category: string
    special: string
    cart?: cartCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutOrderInput = {
    id?: number
    name: string
    price: number
    description: string
    image: string
    category: string
    special: string
    cart?: cartUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutOrderInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutOrderInput, productUncheckedCreateWithoutOrderInput>
  }

  export type userCreateWithoutOrdersInput = {
    user_name?: string | null
    user_phone?: string | null
    user_address?: string | null
    user_email?: string | null
    user_password?: string | null
    location?: string | null
    user_token?: string | null
    user_otp?: string | null
    carts?: cartCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutOrdersInput = {
    user_id?: number
    user_name?: string | null
    user_phone?: string | null
    user_address?: string | null
    user_email?: string | null
    user_password?: string | null
    location?: string | null
    user_token?: string | null
    user_otp?: string | null
    carts?: cartUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutOrdersInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
  }

  export type productUpsertWithoutOrderInput = {
    update: XOR<productUpdateWithoutOrderInput, productUncheckedUpdateWithoutOrderInput>
    create: XOR<productCreateWithoutOrderInput, productUncheckedCreateWithoutOrderInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutOrderInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutOrderInput, productUncheckedUpdateWithoutOrderInput>
  }

  export type productUpdateWithoutOrderInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    special?: StringFieldUpdateOperationsInput | string
    cart?: cartUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    special?: StringFieldUpdateOperationsInput | string
    cart?: cartUncheckedUpdateManyWithoutProductNestedInput
  }

  export type userUpsertWithoutOrdersInput = {
    update: XOR<userUpdateWithoutOrdersInput, userUncheckedUpdateWithoutOrdersInput>
    create: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutOrdersInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutOrdersInput, userUncheckedUpdateWithoutOrdersInput>
  }

  export type userUpdateWithoutOrdersInput = {
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_password?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_otp?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutOrdersInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_password?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_otp?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type cartCreateWithoutProductInput = {
    quantity?: number
    user: userCreateNestedOneWithoutCartsInput
  }

  export type cartUncheckedCreateWithoutProductInput = {
    id?: number
    user_id: number
    quantity?: number
  }

  export type cartCreateOrConnectWithoutProductInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput>
  }

  export type cartCreateManyProductInputEnvelope = {
    data: cartCreateManyProductInput | cartCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type orderCreateWithoutProductInput = {
    price: string
    quantity: string
    status: string
    token_num: string
    date?: Date | string
    user: userCreateNestedOneWithoutOrdersInput
  }

  export type orderUncheckedCreateWithoutProductInput = {
    id?: number
    user_id: number
    price: string
    quantity: string
    status: string
    token_num: string
    date?: Date | string
  }

  export type orderCreateOrConnectWithoutProductInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutProductInput, orderUncheckedCreateWithoutProductInput>
  }

  export type orderCreateManyProductInputEnvelope = {
    data: orderCreateManyProductInput | orderCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type cartUpsertWithWhereUniqueWithoutProductInput = {
    where: cartWhereUniqueInput
    update: XOR<cartUpdateWithoutProductInput, cartUncheckedUpdateWithoutProductInput>
    create: XOR<cartCreateWithoutProductInput, cartUncheckedCreateWithoutProductInput>
  }

  export type cartUpdateWithWhereUniqueWithoutProductInput = {
    where: cartWhereUniqueInput
    data: XOR<cartUpdateWithoutProductInput, cartUncheckedUpdateWithoutProductInput>
  }

  export type cartUpdateManyWithWhereWithoutProductInput = {
    where: cartScalarWhereInput
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyWithoutProductInput>
  }

  export type cartScalarWhereInput = {
    AND?: cartScalarWhereInput | cartScalarWhereInput[]
    OR?: cartScalarWhereInput[]
    NOT?: cartScalarWhereInput | cartScalarWhereInput[]
    id?: IntFilter<"cart"> | number
    user_id?: IntFilter<"cart"> | number
    p_id?: IntFilter<"cart"> | number
    quantity?: IntFilter<"cart"> | number
  }

  export type orderUpsertWithWhereUniqueWithoutProductInput = {
    where: orderWhereUniqueInput
    update: XOR<orderUpdateWithoutProductInput, orderUncheckedUpdateWithoutProductInput>
    create: XOR<orderCreateWithoutProductInput, orderUncheckedCreateWithoutProductInput>
  }

  export type orderUpdateWithWhereUniqueWithoutProductInput = {
    where: orderWhereUniqueInput
    data: XOR<orderUpdateWithoutProductInput, orderUncheckedUpdateWithoutProductInput>
  }

  export type orderUpdateManyWithWhereWithoutProductInput = {
    where: orderScalarWhereInput
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutProductInput>
  }

  export type orderScalarWhereInput = {
    AND?: orderScalarWhereInput | orderScalarWhereInput[]
    OR?: orderScalarWhereInput[]
    NOT?: orderScalarWhereInput | orderScalarWhereInput[]
    id?: IntFilter<"order"> | number
    menu_id?: IntFilter<"order"> | number
    user_id?: IntFilter<"order"> | number
    price?: StringFilter<"order"> | string
    quantity?: StringFilter<"order"> | string
    status?: StringFilter<"order"> | string
    token_num?: StringFilter<"order"> | string
    date?: DateTimeFilter<"order"> | Date | string
  }

  export type cartCreateWithoutUserInput = {
    quantity?: number
    product: productCreateNestedOneWithoutCartInput
  }

  export type cartUncheckedCreateWithoutUserInput = {
    id?: number
    p_id: number
    quantity?: number
  }

  export type cartCreateOrConnectWithoutUserInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput>
  }

  export type cartCreateManyUserInputEnvelope = {
    data: cartCreateManyUserInput | cartCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type orderCreateWithoutUserInput = {
    price: string
    quantity: string
    status: string
    token_num: string
    date?: Date | string
    product: productCreateNestedOneWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutUserInput = {
    id?: number
    menu_id: number
    price: string
    quantity: string
    status: string
    token_num: string
    date?: Date | string
  }

  export type orderCreateOrConnectWithoutUserInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
  }

  export type orderCreateManyUserInputEnvelope = {
    data: orderCreateManyUserInput | orderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    medius: string
    price: string
    createat?: Date | string
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: number
    medius: string
    price: string
    createat?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutUserInput = {
    message: string
    senderId: number
    receiverId: number
    createdAt?: Date | string
    admin: adminCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    senderId: number
    receiverId: number
    createdAt?: Date | string
    adminId: number
  }

  export type MessageCreateOrConnectWithoutUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateManyUserInputEnvelope = {
    data: MessageCreateManyUserInput | MessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type cartUpsertWithWhereUniqueWithoutUserInput = {
    where: cartWhereUniqueInput
    update: XOR<cartUpdateWithoutUserInput, cartUncheckedUpdateWithoutUserInput>
    create: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput>
  }

  export type cartUpdateWithWhereUniqueWithoutUserInput = {
    where: cartWhereUniqueInput
    data: XOR<cartUpdateWithoutUserInput, cartUncheckedUpdateWithoutUserInput>
  }

  export type cartUpdateManyWithWhereWithoutUserInput = {
    where: cartScalarWhereInput
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyWithoutUserInput>
  }

  export type orderUpsertWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput
    update: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
  }

  export type orderUpdateWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput
    data: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>
  }

  export type orderUpdateManyWithWhereWithoutUserInput = {
    where: orderScalarWhereInput
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    userid?: IntFilter<"Payment"> | number
    medius?: StringFilter<"Payment"> | string
    price?: StringFilter<"Payment"> | string
    createat?: DateTimeFilter<"Payment"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutUserInput>
  }

  export type userCreateWithoutMessageInput = {
    user_name?: string | null
    user_phone?: string | null
    user_address?: string | null
    user_email?: string | null
    user_password?: string | null
    location?: string | null
    user_token?: string | null
    user_otp?: string | null
    carts?: cartCreateNestedManyWithoutUserInput
    orders?: orderCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutMessageInput = {
    user_id?: number
    user_name?: string | null
    user_phone?: string | null
    user_address?: string | null
    user_email?: string | null
    user_password?: string | null
    location?: string | null
    user_token?: string | null
    user_otp?: string | null
    carts?: cartUncheckedCreateNestedManyWithoutUserInput
    orders?: orderUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutMessageInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMessageInput, userUncheckedCreateWithoutMessageInput>
  }

  export type adminCreateWithoutMessagesInput = {
    name: string
    email: string
    phone: string
    password: string
    created_at?: Date | string
    token?: string | null
    image?: string | null
  }

  export type adminUncheckedCreateWithoutMessagesInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    created_at?: Date | string
    token?: string | null
    image?: string | null
  }

  export type adminCreateOrConnectWithoutMessagesInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutMessagesInput, adminUncheckedCreateWithoutMessagesInput>
  }

  export type userUpsertWithoutMessageInput = {
    update: XOR<userUpdateWithoutMessageInput, userUncheckedUpdateWithoutMessageInput>
    create: XOR<userCreateWithoutMessageInput, userUncheckedCreateWithoutMessageInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMessageInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMessageInput, userUncheckedUpdateWithoutMessageInput>
  }

  export type userUpdateWithoutMessageInput = {
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_password?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_otp?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartUpdateManyWithoutUserNestedInput
    orders?: orderUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutMessageInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_password?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_otp?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartUncheckedUpdateManyWithoutUserNestedInput
    orders?: orderUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type adminUpsertWithoutMessagesInput = {
    update: XOR<adminUpdateWithoutMessagesInput, adminUncheckedUpdateWithoutMessagesInput>
    create: XOR<adminCreateWithoutMessagesInput, adminUncheckedCreateWithoutMessagesInput>
    where?: adminWhereInput
  }

  export type adminUpdateToOneWithWhereWithoutMessagesInput = {
    where?: adminWhereInput
    data: XOR<adminUpdateWithoutMessagesInput, adminUncheckedUpdateWithoutMessagesInput>
  }

  export type adminUpdateWithoutMessagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type adminUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateWithoutPaymentsInput = {
    user_name?: string | null
    user_phone?: string | null
    user_address?: string | null
    user_email?: string | null
    user_password?: string | null
    location?: string | null
    user_token?: string | null
    user_otp?: string | null
    carts?: cartCreateNestedManyWithoutUserInput
    orders?: orderCreateNestedManyWithoutUserInput
    Message?: MessageCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPaymentsInput = {
    user_id?: number
    user_name?: string | null
    user_phone?: string | null
    user_address?: string | null
    user_email?: string | null
    user_password?: string | null
    location?: string | null
    user_token?: string | null
    user_otp?: string | null
    carts?: cartUncheckedCreateNestedManyWithoutUserInput
    orders?: orderUncheckedCreateNestedManyWithoutUserInput
    Message?: MessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPaymentsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPaymentsInput, userUncheckedCreateWithoutPaymentsInput>
  }

  export type userUpsertWithoutPaymentsInput = {
    update: XOR<userUpdateWithoutPaymentsInput, userUncheckedUpdateWithoutPaymentsInput>
    create: XOR<userCreateWithoutPaymentsInput, userUncheckedCreateWithoutPaymentsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPaymentsInput, userUncheckedUpdateWithoutPaymentsInput>
  }

  export type userUpdateWithoutPaymentsInput = {
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_password?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_otp?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartUpdateManyWithoutUserNestedInput
    orders?: orderUpdateManyWithoutUserNestedInput
    Message?: MessageUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPaymentsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_password?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user_token?: NullableStringFieldUpdateOperationsInput | string | null
    user_otp?: NullableStringFieldUpdateOperationsInput | string | null
    carts?: cartUncheckedUpdateManyWithoutUserNestedInput
    orders?: orderUncheckedUpdateManyWithoutUserNestedInput
    Message?: MessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageCreateManyAdminInput = {
    id?: number
    message: string
    senderId: number
    receiverId: number
    createdAt?: Date | string
    userid: number
  }

  export type MessageUpdateWithoutAdminInput = {
    message?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type cartCreateManyProductInput = {
    id?: number
    user_id: number
    quantity?: number
  }

  export type orderCreateManyProductInput = {
    id?: number
    user_id: number
    price: string
    quantity: string
    status: string
    token_num: string
    date?: Date | string
  }

  export type cartUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutCartsNestedInput
  }

  export type cartUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type cartUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type orderUpdateWithoutProductInput = {
    price?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token_num?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type orderUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token_num?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token_num?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cartCreateManyUserInput = {
    id?: number
    p_id: number
    quantity?: number
  }

  export type orderCreateManyUserInput = {
    id?: number
    menu_id: number
    price: string
    quantity: string
    status: string
    token_num: string
    date?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: number
    medius: string
    price: string
    createat?: Date | string
  }

  export type MessageCreateManyUserInput = {
    id?: number
    message: string
    senderId: number
    receiverId: number
    createdAt?: Date | string
    adminId: number
  }

  export type cartUpdateWithoutUserInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product?: productUpdateOneRequiredWithoutCartNestedInput
  }

  export type cartUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    p_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type cartUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    p_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type orderUpdateWithoutUserInput = {
    price?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token_num?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUpdateOneRequiredWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_id?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token_num?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_id?: IntFieldUpdateOperationsInput | number
    price?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    token_num?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    medius?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    createat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    medius?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    createat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    medius?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    createat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: adminUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AdminCountOutputTypeDefaultArgs instead
     */
    export type AdminCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SuperAdminDefaultArgs instead
     */
    export type SuperAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SuperAdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use adminDefaultArgs instead
     */
    export type adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = adminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cartDefaultArgs instead
     */
    export type cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cartDefaultArgs<ExtArgs>
    /**
     * @deprecated Use contactDefaultArgs instead
     */
    export type contactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = contactDefaultArgs<ExtArgs>
    /**
     * @deprecated Use orderDefaultArgs instead
     */
    export type orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = orderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use productDefaultArgs instead
     */
    export type productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = productDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userDefaultArgs instead
     */
    export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SliderImageDefaultArgs instead
     */
    export type SliderImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SliderImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageDefaultArgs instead
     */
    export type MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDefaultArgs instead
     */
    export type PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}