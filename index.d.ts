
declare interface AssertionResult {
    at?: string;
    pass: boolean;
    actual: any;
    expected: any;
    message: string;
    operator: "ok" | "deepEqual" | "equal" | "notOk" | "notDeepEqual" | "notEqual" | "throws" | "doesNotThrow" | "fail";
}

declare class Assertion {
    ok(val: boolean | "true" | "false" | 0 | 1, message?: string): AssertionResult;
    deepEqual(actual: any, expected: any, message?: string): AssertionResult;
    equal(actual: any, expected: any, message?: string): AssertionResult;
    notOk(val: boolean | "true" | "false" | 0 | 1, message?: string): AssertionResult;
    notDeepEqual(actual: any, expected: any, message?: string): AssertionResult;
    notEqual(actual: any, expected: any, message?: string): AssertionResult;
    throws(func: Function, expected?: string | RegExp | Function, message?: string): AssertionResult;
    doesNotThrow(func: Function, expected?: string | Function, message?: string): AssertionResult;
    fail(message?: string): AssertionResult;
}

declare interface TestOptions {
    only: boolean;
}

declare class Test {
    run(): Promise<this & {
        executionTime: number;
    }>;
    skip(): Test;
}

declare interface PlanOptions {
    sequence: boolean;
}

declare class Plan {
    readonly length: number;
    [Symbol.iterator](): IterableIterator<Test>;
    test(descriptionOrPlan: string | Plan, spec?: (t: Assertion) => any, opts?: TestOptions): this;
    only(description: string, spec: (t: Assertion) => any): this;
    skip(descriptionOrPlan: string | Plan): this;
    run(sink?: any): Promise<void>;
}

declare function zora(opts?: PlanOptions): Plan;

export = zora;
