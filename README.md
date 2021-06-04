# VIN Validator

Validator decorator for class-validator.

## Usage

```typescript
import { IsVIN } from "class-validator-vin";

export class VehicleData {
  @IsVIN()
  VIN: string;
}
```
