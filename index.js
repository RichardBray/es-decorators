/**
 * Worlds most simple decorator
 * @param  {class}  target      class that the property is part of
 * @param  {string} name        the name of the property the decorator is modifying
 * @param  {object} descriptor  property descriptor
 * @return {object}
 */
function boomify(target, name, descriptor) {
    const oldValue = descriptor.value();
    descriptor.value = () => {
        return `${oldValue} has been boomified!!!`;
    };
    return descriptor;
}

class People {
    @boomify
    bob() {
        return "Bob";
    }
}

const people = new People();

console.log(people.bob());
