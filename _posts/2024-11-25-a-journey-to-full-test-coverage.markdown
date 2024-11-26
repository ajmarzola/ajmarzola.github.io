---
layout: post
title:  "Developing a CRUD API for Products with ASP.NET Core"
subtitle: e-Commerce series
date:   2024-11-25 19:44:22 -0300
background: '/img/bg-post.jpg'
---

# **From 26% to 100%: A Journey to Full Test Coverage**

In the world of software development, test coverage is a critical metric that reflects the effectiveness of your testing strategy. However, as developers, we often find ourselves navigating the nuances of **line coverage** and **branch coverage**, and the gap between them can reveal untold stories about our code.

This article explores how a project with **26% line coverage** and **69% branch coverage** tells a deeper tale, the practical implications of these metrics, and actionable strategies to achieve the coveted **100% coverage**.

---

## **The Starting Point**
Our project began with the following test coverage metrics:
- **Line Coverage:** 26%
- **Branch Coverage:** 69%

These numbers sparked both concern and curiosity. How could we have tested 69% of our logical paths while executing only 26% of our lines of code? Diving into the details, we discovered that our tests focused heavily on **branch logic**—decision points like `if` conditions and `switch` cases—but missed other critical parts of the codebase.

---

## **Understanding the Metrics**

### **1. Line Coverage**
Measures the percentage of lines of code that are executed during testing.
- **Low line coverage (26%)** indicates many parts of the code were never executed, including non-conditional statements.
- This can result in untested initialization code, helper methods, and error handling blocks.

### **2. Branch Coverage**
Focuses on logical paths, ensuring both the **true** and **false** branches of conditional statements are evaluated.
- **High branch coverage (69%)** means a substantial portion of decision logic was tested, but not necessarily the full extent of its execution.

### **Example**
Consider the following code:

```csharp
if (x > 0)
{
    Console.WriteLine("Positive");
}
else
{
    Console.WriteLine("Negative");
}

Console.WriteLine("Done");
```

- A test with `x = 1` and `x = -1` will achieve **100% branch coverage** because both the `if` and `else` branches are executed.
- However, **line coverage** might be lower if `Console.WriteLine("Done");` is never reached during tests.

---

## **The Challenges**

### **1. Gaps in Line Coverage**
Our test suite skipped parts of the code outside conditional logic. For instance:
- Initialization routines were left untested.
- Edge cases, such as exception handling, were ignored.

### **2. Over-reliance on Branch Testing**
While the logical branches were adequately tested, their consequences—like calls to external APIs or database interactions—remained unchecked.

---

## **Action Plan: Achieving 100% Coverage**
Reaching 100% coverage requires addressing both metrics systematically:

### **1. Target Uncovered Lines**
Analyze the coverage report to identify lines missed during tests:
- Add tests to execute helper methods and initialization code.
- Cover all paths that lead to those lines, even in non-critical scenarios.

### **2. Expand Branch Testing**
Ensure all logical branches are **fully explored**:
- Test not only the decision points but also their side effects.
- Cover nested conditions and boundary values comprehensively.

### **3. Test Error Handling**
Write tests that deliberately trigger exceptions:
- Simulate failures such as database connection errors or invalid inputs.
- Ensure `try-catch` blocks and fallback logic are exercised.

### **4. Automate Coverage Monitoring**
Incorporate tools like **ReportGenerator** and CI/CD pipelines to:
- Track coverage metrics continuously.
- Fail builds that drop below the expected threshold.

### **5. Practice Test-Driven Development (TDD)**
By writing tests before the implementation:
- You naturally ensure all lines of the new code are executed.
- TDD forces coverage considerations upfront.

---

## **The Payoff**
By methodically addressing these gaps, our project began to evolve:
1. **Line Coverage** steadily rose as we executed untested parts of the code.
2. **Branch Coverage** improved further as we explored more nuanced conditions.
3. Both metrics converged toward 100%, signaling robust test coverage and fewer hidden bugs.

---

## **Suggestions for Next Steps**
1. **Focus on Maintainability:**
   - As tests grow, ensure they are well-documented and easy to modify.
2. **Prioritize Code Quality:**
   - Coverage should be paired with quality metrics like cyclomatic complexity to avoid over-testing simple paths.
3. **Embrace Mutation Testing:**
   - Tools like **Stryker.NET** can validate that your tests not only run but also catch intentional bugs.

---

## **Conclusion**
Test coverage is more than a number; it’s a narrative of how thoroughly you’ve validated your code. While **26% line coverage** and **69% branch coverage** highlighted gaps in our approach, they also served as a roadmap for improvement. By leveraging tools, expanding tests, and embracing best practices, we can transform these metrics into a testament to software excellence.

With persistence and a clear strategy, the journey from **26% to 100%** becomes an achievable—and immensely rewarding—goal.

-------

<img src="https://avatars.githubusercontent.com/u/8000175?s=400&v=4" alt="Anderson Marzola" width="128" height="128" style="border-radius: 50%;">

**Anderson Marzola**

I'm a developer with over 10 years of experience, an expert in **.NET** and **SQL Server**, passionate about technology, innovation and knowledge sharing. In this blog, I share tips, tutorials and insights from the world of programming to help other developers grow.

💡 Let's connect?
- 💼 [My LinkedIn](https://linkedin.com/in/ajmarzola)
- 💻 [My GitHub](https://github.com/ajmarzola)
- ✉️ [Get in touch](mailto:ajmarzola@gmail.com)