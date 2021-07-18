var t=require("class-validator");exports.IsVIN=function(r){return function(e,a){t.registerDecorator({name:"isVIN",target:e.constructor,propertyName:a,constraints:[],options:r,validator:{validate:function(t,r){return/^[0123456789ABCDEFGHJKLMNPRSTUVWXYZ]{17}$/i.test(t)},defaultMessage:function(t){return"String ($value) is not a valid VIN!"}}})}};
//# sourceMappingURL=foo.js.map
