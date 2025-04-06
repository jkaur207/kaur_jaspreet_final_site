import React from "react";

const DeveloperSetup = () => (
  <div>
    <h2>Developer Setup</h2>
    <p>
      As a developer, having the right tools and setup is crucial for productivity and efficiency. Below is the setup I use to ensure my workflow is smooth, efficient, and comfortable. Feel free to explore these tools and consider incorporating them into your own setup.
    </p>

    <section className="setup-tools">
      <h3>Essential Tools & IDE Setup</h3>
      <ul>
        <li><strong>VS Code with ESLint and Prettier:</strong> I use Visual Studio Code as my main code editor. I have ESLint for linting and Prettier for code formatting, ensuring consistency in my codebase.</li>
        <li><strong>Font: Fira Code:</strong> Fira Code is a monospaced font with programming ligatures, making code more readable and visually appealing.</li>
        <li><strong>Custom Terminal Theme:</strong> I use a custom theme in my terminal to improve visibility and organization. This includes a high-contrast color scheme that’s easy on the eyes for long coding sessions.</li>
        <li><strong>Git:</strong> Git is essential for version control. I use Git for managing my projects and collaborating with teams. It helps me keep track of changes and streamline collaboration.</li>
        <li><strong>GitHub:</strong> I host all my projects on GitHub, where I manage my repositories and collaborate with other developers. I also use GitHub Actions for continuous integration (CI/CD).</li>
      </ul>

      <h3>Workflow Enhancements</h3>
      <ul>
        <li><strong>Docker:</strong> Docker allows me to containerize my applications, ensuring that they work seamlessly across different environments without any issues.</li>
        <li><strong>Postman:</strong> Postman is my go-to tool for testing APIs. It helps me make requests, view responses, and debug my API calls.</li>
        <li><strong>Live Share (VS Code Extension):</strong> This extension lets me share my code editor with teammates in real-time, making pair programming and code reviews much easier.</li>
        <li><strong>Jest & Mocha:</strong> I use Jest for unit testing my JavaScript applications and Mocha for testing Node.js backend services. Ensuring code quality through testing is an essential part of my development workflow.</li>
      </ul>

      <h3>Productivity Enhancements</h3>
      <ul>
        <li><strong>Notion:</strong> I use Notion for project management, documentation, and taking notes. It’s a powerful tool for organizing my work and staying on top of tasks.</li>
        <li><strong>Slack:</strong> Slack is my communication tool of choice. It allows me to collaborate and communicate with teams, ask questions, and keep track of ongoing discussions.</li>
        <li><strong>Figma:</strong> Figma is used for UI/UX design and collaboration. It allows me to work alongside designers to create visually appealing user interfaces for my applications.</li>
      </ul>
    </section>

    <section className="setup-recommendations">
      <h3>Additional Recommendations</h3>
      <p>
        Aside from the tools mentioned above, I recommend the following practices to enhance your developer setup:
      </p>
      <ul>
        <li><strong>Keyboard Shortcuts:</strong> Learn the keyboard shortcuts for your editor and tools to speed up your workflow. These shortcuts save time and make coding much more efficient.</li>
        <li><strong>Multiple Monitors:</strong> If possible, use a dual-monitor setup. This allows you to have documentation, code, and the terminal open side by side, making multitasking much easier.</li>
        <li><strong>Dark Mode:</strong> Use dark mode for your code editor and terminal. It’s easier on the eyes during long coding sessions, and it reduces eye strain.</li>
        <li><strong>Automation:</strong> Automate repetitive tasks such as linting, testing, and deployments. I use Git hooks with Husky for pre-commit and pre-push tasks.</li>
        <li><strong>Focus Mode:</strong> Minimize distractions by using focus mode or a similar feature in your editor. It can help you concentrate on writing code without unnecessary interruptions.</li>
      </ul>
    </section>

    <section className="setup-optimization">
      <h3>Optimizing System Performance</h3>
      <p>
        Having a fast and reliable system is key to maintaining productivity. Below are some of the optimizations I use to ensure my system runs smoothly:
      </p>
      <ul>
        <li><strong>Solid-State Drive (SSD):</strong> Using an SSD instead of an HDD significantly improves system speed, load times, and responsiveness, especially for larger projects.</li>
        <li><strong>RAM Upgrade:</strong> I recommend at least 16GB of RAM for a smooth experience while running multiple apps, virtual machines, or containers simultaneously.</li>
        <li><strong>System Tweaks:</strong> I’ve optimized my system settings for performance by disabling unnecessary startup programs, keeping the system clean from junk files, and updating drivers regularly.</li>
      </ul>
    </section>
  </div>
);

export default DeveloperSetup;
