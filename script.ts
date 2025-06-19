import { ServiceManager } from "supabase-service-manager";


const supabase =  new ServiceManager({supabase: {url: '', anonKey: ''}});

// console.log(supabase);

// class Test {
//   public name: string;
//   private age: number | undefined;

//   constructor(name: string, age?: number) {`
//     this.name = name;
//     this.age = age;
//   }
// }

// const obj1  = new Test('name', 5)
// const obj2 = new Test('saxeli', 12)
// const obj3  = new Test('52', 52)
// const obj  = new Test('52')