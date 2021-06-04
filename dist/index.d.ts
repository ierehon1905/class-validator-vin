import { ValidationOptions } from "class-validator";
/**
 * Is valued a vehicle identification number
 */
export declare function IsVIN(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
