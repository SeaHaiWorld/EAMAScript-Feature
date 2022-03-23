// ES6 decorator, effect on class method
// notice here `target` is `Cat.prototype`
function readonly(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  descriptor.writable = false
  return descriptor
}

// class Cat {
//   bark() {
//     return 'miao!miao!'
//   }
// }

class Cat {
  @readonly
  bark() {
    return 'miao!miao!'
  }
}

let cat = new Cat()
try {
  cat.bark = function () {
    console.log('wang!wang!')
    return 'wang!wang!'
  }
} catch (e) {
	console.log(e);
	// here e, TypeError: Cannot assign to read only property 'bark' of object '#<Cat>'
}