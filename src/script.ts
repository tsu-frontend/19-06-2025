import { ServiceManager } from "supabase-service-manager";

const supabase = new ServiceManager({
  supabase: {
    url: "https://dhpewqtvbasnugkfiixs.supabase.co",
    anonKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRocGV3cXR2YmFzbnVna2ZpaXhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NzY1MzMsImV4cCI6MjA2MjQ1MjUzM30.8tYLfww-2KjIRsmJvCTQ1vBd3ghf0c4QNmW6TwPYVTk",
  },
});

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

// კონსტრუქციის გეგმა
class User {
  public name: string;
  public email: string;
  public color: string | null;
  public floorCount: number;
  public userDetails: string;

  private termalIsolation: string;
  private test: string;

  // მშენებელ-ინჟინერი + კონსტრუქტორი + არქიტექტორი
  constructor(name: string, email: string, color: string | null = null, floorCount?: number) {
    this.name = name;
    this.email = email;

    this.userDetails = `name: ${this.name}; email: ${this.email}`;

    this.test = "test";

    // User.color
    this.color = color;
    this.floorCount = floorCount ?? 0;
    this.termalIsolation = "good";

    this.layingFoundation();
  }

  getThisContext() {
    return this;
  }

  layingBlocks() {
    console.log("work put a block");
  }

  layingFoundation() {
      this.screamOutName(this.name)
      console.log("dig");
      console.log("dig deeper");
      console.log("pour cement");
      console.log("good job!");
      console.log("====================");
  }

  screamOutName(name: string) {
    console.log(name);
  }
}

// კონსტრუქტციის შენების ფაზა
const currentUser = new User("firstName", "aleksandre.imnaishvili@tsu.ge", "green", 42);
const currentUserNew = new User("lastName", "aleksandre.imnaishvili@tsu.ge");

// private property
currentUser.name;
// currentUser.test;
// ============

// this keyword, attached to 'new' context
// console.log(currentUser.getThisContext());
// console.log(currentUserNew.getThisContext());
