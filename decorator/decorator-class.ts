// decorator can effect on class, decorator can not extend
function animal(target: any) {
  target.isAnimal = true
}

// decorator can be combined with closure, and then wrapped to factory mode to use a effect on class
function doge(value: boolean) {
  return function(target: any) {
    target.isDoge = value
  }
}

@animal
@doge(false)
class Cat {}

const cat = new Cat()

// @ts-ignore
console.log(Cat.isAnimal, Cat.isDoge, cat.isAnimal) // true false undefined

@doge(true)
class Dog {}

const dog = new Dog()

// @ts-ignore
console.log(Dog.isDoge, dog.isDoge) // true undefined