---
layout: post
title:  "Developing a CRUD API for Products with ASP.NET Core"
subtitle: e-Commerce series
date:   2024-11-24 08:30:57 -0300
background: '/img/bg-post.jpg'
---
#Developing a CRUD API for Products with ASP.NET Core: Lessons Learned, Common Errors, and Solutions

Building a CRUD API for managing products is a fundamental exercise in ASP.NET Core development. While it may seem straightforward, this process reveals technical challenges that test our ability to handle real-world development cycles. In this article, we will review the API development process, highlight common errors and their solutions, and provide suggestions for future improvements.

---

## **Project Overview**

We developed an API to manage a product catalog. The API supports CRUD (Create, Read, Update, Delete) operations and was implemented with the following technologies:

- **ASP.NET Core 8.0** for API development.
- **Entity Framework Core** for database interaction.
- **MS SQL Server** as the relational database.
- **Docker and Docker Compose** to containerize and manage infrastructure.
- **xUnit** for automated testing.
- **Swagger** for API documentation and interaction.

The application was configured to run both locally and inside Docker containers, ensuring flexibility.

---

## **Common Errors and Their Solutions**

### **1. Error: `The instance of entity type 'Product' cannot be tracked`**

**Problem:**
During updates with EF Core, this error occurred because two instances of the same object were being tracked in the same context.

**Solution:**  
We used the `AsNoTracking()` method for queries where tracking was unnecessary. For updates, we ensured only one instance of the entity was used:

```csharp
var existingProduct = await _dbContext.Products.AsNoTracking().FirstOrDefaultAsync(p => p.Id == id);
if (existingProduct != null)
{
    _dbContext.Entry(product).State = EntityState.Modified;
    await _dbContext.SaveChangesAsync();
}```

---

### **2. Docker Container for MS SQL Server Stops Unexpectedly**

**Problem:**
The catalogdb container stopped running and showed an "exited" status shortly after starting.

**Solution:**  
We checked the container logs using docker logs <container_id> to identify the root cause.
We fixed the issue by adding the MSSQL_PID=Express environment variable in the docker-compose.yml file to specify the license type:

```yaml
db:
  image: mcr.microsoft.com/mssql/server:2019-latest
  environment:
    SA_PASSWORD: "masterkey"
    ACCEPT_EULA: "Y"
    MSSQL_PID: "Express"
```

---

### **3. Error Mapping the sa User to the Database**

**Problem:**
The error Cannot use the special principal 'sa' occurred while mapping the sa user to the CatalogDb database.

**Solution:**
We configured SQL Server to allow SQL authentication logins.
We created a new login and mapped it to the database with appropriate permissions:

```sql
CREATE LOGIN cataloguser WITH PASSWORD = 'securePassword';
USE CatalogDb;
CREATE USER cataloguser FOR LOGIN cataloguser;
EXEC sp_addrolemember 'db_owner', 'cataloguser';
```

---

### **4. Failing Test: Assert.NotEmpty()**

**Problem:**
A test checking if the containers were "running" returned an empty result.

**Solution:**
We ensured the containers were correctly configured and running.
We updated the tests to use the Docker.DotNet library and validated container logs for additional insights.

---

## **Technologies Well Employed**

**1. ASP.NET Core and EF Core:**
EF Core simplified database interactions, and ASP.NET Core provided a robust framework for API development.

**2. Docker:**
Containerizing the application and database ensured a consistent environment for development and testing.

**3. Swagger:**
Automatically documented the API, making it accessible for developers and integrators.

**4. xUnit and Automated Tests:**
Tests ensured code quality and helped detect regressions.

---

## **Suggestions for Future Versions**

**1. Authentication and Authorization:**
Implement JWT-based authentication to secure the endpoints.

**2. Monitoring:**
Integrate tools like Application Insights or Prometheus/Grafana for performance monitoring.

**3. Data Validation:**
Enhance input validation using the FluentValidation library.

**4. Integration Testing:**
Expand tests to cover complex scenarios and interactions with the database inside containers.

**5. CI/CD:**
Set up a continuous integration and deployment pipeline with GitHub Actions or Azure DevOps.

---

## **Conclusion**

Developing the CRUD API for products was a valuable learning opportunity. Despite the challenges, we overcame obstacles through systematic debugging and the right tools. These lessons have prepared us for future projects that require greater robustness and scalability.

If you’re starting a similar project, remember to document technical decisions, create tests for each feature, and use containers to isolate environments. This approach will ensure success and agility in your development process.

Ready to build your API? Good luck! 🎯

-------

<img src="https://avatars.githubusercontent.com/u/8000175?s=400&v=4" alt="Anderson Marzola" width="128" height="128" style="border-radius: 50%;">

**Anderson Marzola**

I'm a developer with over 10 years of experience, an expert in **.NET** and **SQL Server**, passionate about technology, innovation and knowledge sharing. In this blog, I share tips, tutorials and insights from the world of programming to help other developers grow.

💡 Let's connect?
- 💼 [My LinkedIn](https://linkedin.com/in/ajmarzola)
- 💻 [My GitHub](https://github.com/ajmarzola)
- ✉️ [Get in touch](mailto:ajmarzola@gmail.com)