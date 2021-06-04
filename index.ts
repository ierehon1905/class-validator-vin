/**
 * Is valued a vehicle identification number
 */
export function IsVIN(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isVIN",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const VinPattern = /[0123456789ABCDEFGHJKLMNPRSTUVWXYZ]{17}/i;
          return VinPattern.test(value);
        },
        defaultMessage(validationArguments?: ValidationArguments) {
          return "String ($value) is not a valid VIN!";
        },
      },
    });
  };
}
