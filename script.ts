import { ServiceManager } from "supabase-service-manager";

const supabase = new ServiceManager({
  supabase: {
    url: "https://dhpewqtvbasnugkfiixs.supabase.co",
    anonKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRocGV3cXR2YmFzbnVna2ZpaXhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NzY1MzMsImV4cCI6MjA2MjQ1MjUzM30.8tYLfww-2KjIRsmJvCTQ1vBd3ghf0c4QNmW6TwPYVTk",
  },
});

console.log(supabase);

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
