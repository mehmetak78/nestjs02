
- Insall Nest CLI
    - sudo npm install -g @nestjs/cli

- Create a new project
    - Open a new terminal in a desired directory.
    - nest new nestjs02
    - Or: - Install NestJS plugin for Webstorm

- npm install class-validator class-transformer

- Execute Project
    - npm run start:dev

- Creating module with CLI
    - In the root directory in the terminal
        - nest generate module messages

- Creating controller with CLI
    - In the root directory in the terminal
        - nest generate controller messages/messages --flat

- Create service with CLI
    - In the root directory in the terminal
        - nest g service power












****** NOTES ******
- ValidationPipe
    - Create a DTO class
    - Incoming request (JSON) is converted to the DTO class's object by class transformer
    - Then class validator validates the data.

