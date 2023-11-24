# Interview Questions:
## 1. Benefits of using TypeScript over JavaScript in a project
There are some benefits of using typescript mentioned below.
* Large Codebase
* It's easy to find bug and easier to testing in typescript
* We can write code for older version browsers as typescript code can be converted into older version of javascript.
* Support older browser
* Typescript provide type safety

## 2. The purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript.
The purpose of the optional chaining is access the nested properties from an object without giving error. It helps to access the property from an object without throwing an error when the value of the property is null or undefined.

#### Example:
```http
  const obj = {
    name: "Uttam Kumar Saha",
    email: "uttamsah@gmail.com",
    house: {
        district: "Pabna",
        houseNo: "14",
        street: "Abul Kalam road"
    }
  }
```
I have wrote an object above. Suppose I want to access street property from the object then I can access it this way with optional chaining: ```const street = obj?.house?.street ```

#### nullish coalescing 
The purpose of nullish coalescing  find undefine value of something. If a value is undefine it can identity it and we can take a decision based on it for the undefine value.
#### Example: 
```http 
const value = undefined;
const result = value ?? "undefined."
```
This is an example of nullish coalescing. 
## 3. Asynchronous operations in TypeScript, advantages of using async and await
We use async and await or promise to handle an asynchronous operation in typescript. It helps to narrow down our code and become easy to understand due to it's readability.
### Advantages of using async and await
* Achieve more readability
* Error handle opportunity using try catch block
* We can use it with promise also with async function

## 4.  TypeScript's enums and their advantages

TypeScript's enums is the  way to define a set of named constant values. It helps to make code achieve more readable and help to prevent mistakes by  predefined values. Enum keyword is used to declare an enum.
#### Advantages
* Readability
* Autocompletion
* Type safety
* Easy to maintenance

#### Example: 
```http
enum Person{
    id: 1,
    name: "uttamsaha",
    age: 23,
}
```
Example of access it: ```let result:Person = Person.name```

## 5. Type guards in typescript and custom type guard.
Type guard helps us to find the type of value within a certain codeblock based on the run time checks. It is used when we need validation about type in runtime.
It check the type of a value using typeof keyword.
### typeof type gurad

```http
const result = 5;
if(typeof result === "number"){
    //then perform action
}
```

This is the example of typeof type gurad. 
### Instanceof type gurad
This type guard check an object is instence of a class or not. 
```http
class Person {

}
const obj = new Person();
if(obj instanceof Person){
    //code
}
```
This is the example of instanceof type gurad

### Example of custom type guard.
```http
function isString(value: any): value is string {
  return typeof value === "string";
}

const value = "aaa";
if (isString(value)) {
  //code
}
```
This is the example of a custom type guard.

## 6. Example of "ReadOnly" property in TypeScript
ReadOnly is a very useful property in typescript for the security purpose. If we make something readOnly then we can only read the value we never can update the value. It helps to protect the secure data. Suppose ```role: admin``` an object property if we assign it as readOnly no one can change the value of role.

### Example of readOnly
```http
type User = {
  readOnly  username: string;
  readOnly password: string;
}
```
This is an example of readOnly. Here User is a type which has two property username and password. I have added readOnly before of the property that is why it is readable now. We cannot change or update the value later on.

## 7. Union type in typescript
Union type allows a variable to have multiple values and a function have multiple type parameter. Union type is define by | this symbol.
### Example: 
```http
let result = string: number
result = "hello"
result = 4;
```
Here  the value of result variable can be multiple type either string type or number type. We also can use it in the function.

```http
const myFunction = (num1: string | number) : number | string => {
//code
}
```
The function mentioned above here num1 parameter can be either string or number also it can return the union of number or string that's mean it can return either string or number.
