# KISS - Keep It Simple (Stupid)

# Supa base library basic integration

- Form manager class

  - [x] formElement
  - [x] inputElementsList

  - [x] setUpListeners
  - [x] input reader
  - [x] input validator
  - [x] input collector
  - [x] submit handler

- FormUtility class

  - [x] email validator
  - [x] password validator
  - [x] repeat password validator

- User Class

  - [] email
  - [] password
  - [] name
  - [] surName
  - [] avatar

- Supabase Lib implementation
  - [x] integrate existing Supabase Lib into current project

# TODO

- [] updating password after validating repeatPassword should be checked!!!

# START TASK SECTION

==========================================================================================

### TASK 1

---

- isSubmitable handler:
  - we need to differentiate between sing in and sign up forms to handle submitable state appropriately
    option 1: let Class instance know which form is being handled
    option 2: try to keep dynamic nature of form Manager class
    FAILED!

---

### TASK 2

ამჟამად გვაქვს "ნახევრად გამართული" ფორმის დადასტურების ლოგიკა, ფორმის მონაცემების სერვერზე გასაგზავნათ ვიყენებთ ფუნქციებს:
`singUpSubmitHandler` & `singUpSubmitHandler`
მსგავსი იმპლემენტაცია არ ესადაგება ფორმის მართვისთვის გამოყენებულ მიდგომას,
რომელიც გულისხმობს ჯავასკრიპტის კლასის სტრუქტურის გამოყენებით ფორმასთან სამუშაო ლოგიკის "ინკაფსულაციას"

- გამოიყენეთ "პოლიმორფიზმი"
- 'დააიმპლემენტირეთ' ფორმის Submit Handler - `handleSubmit() {}` OOP პრინციპების შესაბამისად კლასების გამოყენებით

Hint:

1. - კლასები მრავლდებიან
2. - overriding

## FAILED!

### TASK 3

ამჟამად Supabase მომხმარებელთა ბაზასთან კავშირი დამყარებულია.
შექმენით სატესტო პროექტი Supabase-ზე, მოარგეთ ჩვენი პროექტის სტრუქტურას და დაამატეთ რამდენიმე მომხმარებელი.


### TASK 3

ამჟამად მომხმარებლის და Supabase Request მონაცემთა სტრუცტურებბი აღწერილია

დაამატეთ ავატარი

Success criteria - მომხმარებელს შეუძლია ავატარის ატვირთვა, და ავტორიზაციის შემთხვევაში ატვირთული ავატარი უბრუნდება.



# END TASK SECTION
