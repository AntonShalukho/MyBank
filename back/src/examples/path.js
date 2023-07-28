const path = require('path')

// basename(string): string
const basePath = "https://first/src/components/second.js"
console.log("basename(): ", path.basename(basePath)) // second

// delimiter: ";" | ":" 
console.log("delimiter: ", path.delimiter) // ;

// dirname(): string
console.log("dirname(): ", path.dirname()) // https://first/src/components

// extname: string
console.log("extname: ", path.extname(__filename)) // .js

// format(obj): string
const obj = { dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' }

console.log("format(obj): ", path.format(obj)); // C:\Users\Refsnes\demo_path.js

//  isAbsolute(string): boolean
console.log("isAbsolute false: ", path.isAbsolute(basePath)) // false
console.log("isAbsolute true: ", path.isAbsolute(path.format(obj))) // true

//  join(string1, string2, ...): string
console.log("join() :", path.join('Users', 'Ref', 'demo_path.js')) // Users\Ref\demo_path.js

//  normalize(string): string
console.log("normalize(string) :", path.normalize('C://Users/Ref/someMore/../Jackson')) // C:\Users\Ref\Jackson

// type ParseType = {
//   root: 'C:/',
//   dir: 'C:/Users/Refsnes',
//   base: 'demo_path.js',
//   ext: '.js',
//   name: 'demo_path'
// }
//  parse(string): ParseType
console.log("parse(): parseType", path.parse("C:/Users/Refsnes/demo_path.js"))
// parseType {root: 'C:/',dir: 'C:/Users/Refsnes',base: 'demo_path.js',ext: '.js',name: 'demo_path'}

console.log("relative: ", path.relative(__dirname, __filename)) // index.js

console.log("resolve: ", path.resolve(__filename)) 
//C:\Users\grinf\OneDrive\Документы\Development\MyBank\back\src\index.js
