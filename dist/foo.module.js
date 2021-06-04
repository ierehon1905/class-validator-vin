import{registerDecorator as t}from"class-validator";function n(n){return function(r,a){t({name:"isVIN",target:r.constructor,propertyName:a,constraints:[],options:n,validator:{validate:function(t,n){return/[0123456789ABCDEFGHJKLMNPRSTUVWXYZ]{17}/i.test(t)},defaultMessage:function(t){return"String ($value) is not a valid VIN!"}}})}}export{n as IsVIN};
//# sourceMappingURL=foo.module.js.map
