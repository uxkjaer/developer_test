# developer_test


Welcome to the developer test.

For this test I want you to create a UI5 Application based on the [Northwind OData service](https://services.odata.org/Northwind/Northwind.svc/)

The application should contain two main pages.
- Worklist page should contain:
  - A filterbar with the capability to filter on customer and order date
  - A table bound to the Orders entityset, when clicking on a row, you should navigate to the detail page for that respective row.
  - The table should have the following columns:
    - Sales Order ID
    - Customer ID
    - Employee ID
    - RequiredDate
  - When clicking the Employee ID a responsive popover should appear showing the following details:
    - Photo
    - Title
    - First name
    - Last name
    - Home phone

- Detail Page should contain:
  - An object header with the following details:
    - Sales Order
    - Company name
    - Address
    - City
    - Postalcode
    - Country
  - A table with the items of the order (Entityset Order_Details)

Please fork this repository and when you are done, then create a pull request for me to review the code. Your choice of IDE is optional. I would recommend using VSCode with UI5 tooling. 