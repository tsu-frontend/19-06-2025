
# KISS - Keep It Simple (Stupid)

# Supa base library basic integration

- Form manager class
   - [x] formElement
   - [x] inputElementsList

   - [x] setUpListeners
   - [x] input reader
   - [x] input validator
   - [x] input collector
   - [] submit handler

- FormUtility class
   - [x] email validator
   - [x] password validator
   - [x] repeat password validator

- User Class
   - [] email
   - [] password
   - [] name
   - [] surName


# TODO
- [] updating password after validating repeatPassword should be checked!!!




# START TASK SECTION

==========================================================================================
### TASK 1
------------------------------------------------------------------------------------------
- isSubmitable handler:
   - we need to differentiate between sing in and sign up forms to handle submitable state appropriately
   option 1: let Class instance know which form is being handled
   option 2: try to keep dynamic nature of form Manager class

------------------------------------------------------------------------------------------
# END TASK SECTION