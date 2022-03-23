// use prototype to explain the decorator effect on method
// step 1
function Cat() {}

// without decorator, step 2
Object.defineProperty(Cat.prototype, 'bark', {
  value: function () {
    return 'miao!miao!'
  },
  enumerable: false,
  configurable: true,
  writable: true,
})

// with decorator, step2
let descriptor: PropertyDescriptor = {
  value: function () {
    return 'miao!miao!'
  },
  enumerable: false,
  configurable: true,
  writable: true,
}

function readonly(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  descriptor.writable = false
  return descriptor
}

// The params received by decorator are the same as Object.defineProperty
descriptor = readonly(Cat.prototype, 'bark', descriptor) || descriptor
Object.defineProperty(Cat.prototype, 'bark', descriptor)

// try modify bark
// @ts-ignore
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
