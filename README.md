### Project Setup  

in order to spin the project, in the root create .env with these two variables, with your own values

MONGO_URL  
JWT_SECRET

After that run this command

```start
npm install && npm start
```  

**Register User**  
* Validate - name, email, password - with Mongoose  
* Hash Password (with bcryptjs)  
* Save User  
* Generate Token  
* setting up the mongoose middleware as well as the instance methods on schema  
* Send Response With Token 


