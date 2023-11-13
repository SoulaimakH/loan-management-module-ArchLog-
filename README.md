# Loan Management Module

We are  asked in lab for a Software architecture course at INSAT to build a loan management module of an existing banking application in order to automate a loan process steps

* The client fills in the application form and uploads the list of required documents.
* The loan application is first processed by the commercial service, whose task is to check the eligibility of the borrower and the repayment terms and period, based on the borrower’s income and financial situation. An initial scoring is established to assess the eligibility of the client to get the loan.
Once done, the client application is then processed by the risk management service in order to make sure that the suggested debt ratio is sufficient enough to maintain a healthy bank account balance for the borrower and that the loan can still be repaid in full as scheduled. This service also has access to the central bank database in order to assess if there are other outstanding commitments with other banks that have not been paid. The output of this service is a final score which dictates if the borrower’s request should be approved or not.
* The client is then notified whether his application for a loan has been approved (in principle) or not. Next, the final step will be established by the credit service that elaborates the credit agreement to be signed and the amortization table. Both documents can be later viewed/downloaded by the client.
* Note that the commercial service and the risk management one should use some OCR capabilities in order to automate the extraction and processing of the needed information within the uploaded documents.

we've adopted a microservices architecture to enhance development efficiency, scalability, and ease of maintenance. 
Each microservice has a specific business capability, enabling a more focused and modular development approach.

## Designed Architecture 
In this architecture , we chose to implement **6 microservices**  :
* Load Manager
* Credit Service
* Risque management Service
* Commercial Service
* Registeration Service
* Mailing Service
  
## Architecture
![image](https://github.com/SoulaimakH/loan-management-module-ArchLog-/assets/73546882/c81f7cc4-bd8d-47fc-9a68-858cf1d25d8a)

## Tech used
  - Redis
  - NestJS 
  - Angular
    
## DEMO
[DEMO](https://clipchamp.com/watch/LAd2Y5ot6pP?utm_source=share&utm_medium=social&utm_campaign=watch)

## Frontend
> **_NOTE:_**  this is the backend of the actual project where you can find the frontend through [this link](https://github.com/SoulaimakH/loan-management-frontend)

