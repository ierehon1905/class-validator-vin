import{registerDecorator as t}from"class-validator";function a(a){return function(o,r){t({name:"isVIN",target:o.constructor,propertyName:r,constraints:[],options:a,validator:{validate:(t,a)=>/[0123456789ABCDEFGHJKLMNPRSTUVWXYZ]{17}/i.test(t),defaultMessage:t=>"String ($value) is not a valid VIN!"}})}}export{a as IsVIN};
//# sourceMappingURL=foo.modern.js.map
