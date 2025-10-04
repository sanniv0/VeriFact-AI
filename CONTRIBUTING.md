# Contributing to VeriFact AI

We welcome contributions to VeriFact AI! By participating in this project.

## How to Contribute

There are many ways to contribute, from writing code to reporting bugs and suggesting new features. We appreciate all forms of contribution.

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for everyone.

## Reporting Bugs

If you find a bug, please open an issue on our [GitHub Issues page](https://github.com/sanniv0/VeriFact-AI/issues). When reporting a bug, please include:

*   A clear and concise description of the bug.
*   Steps to reproduce the behavior.
*   Expected behavior.
*   Screenshots or error messages, if applicable.
*   Your operating system and browser.

## Suggesting Enhancements

We love new ideas! If you have a suggestion for an enhancement or a new feature, please open an issue on our [GitHub Issues page](https://github.com/sanniv0/VeriFact-AI/issues). Please include:

*   A clear and concise description of the proposed enhancement.
*   Why you think this enhancement would be valuable.
*   Any mockups or examples, if possible.

## Pull Request Process

1.  **Fork the repository** and clone it to your local machine.
2.  **Create a new branch** for your feature or bug fix:
    ```bash
    git checkout -b feature/your-feature-name
    # or
    git checkout -b bugfix/your-bug-fix-name
    ```
3.  **Make your changes** and ensure they adhere to the project's coding style.
4.  **Test your changes** thoroughly.
5.  **Commit your changes** with a clear and descriptive commit message (see [Commit Message Guidelines](#commit-message-guidelines)).
6.  **Push your branch** to your forked repository.
7.  **Open a Pull Request** to the `main` branch of the original repository. Please provide:
    *   A clear title and description of your changes.
    *   Reference any related issues.
    *   Screenshots or GIFs for UI changes.

## Development Setup

Refer to the [README.md](README.md) file for instructions on how to set up your local development environment.

## Commit Message Guidelines

We follow a set of guidelines for commit messages to ensure a clear and readable history. Please use the following format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

*   **type**: Must be one of the following:
    *   `feat`: A new feature
    *   `fix`: A bug fix
    *   `docs`: Documentation only changes
    *   `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc.)
    *   `refactor`: A code change that neither fixes a bug nor adds a feature
    *   `perf`: A code change that improves performance
    *   `test`: Adding missing tests or correcting existing tests
    *   `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
    *   `ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
    *   `chore`: Other changes that don't modify src or test files
    *   `revert`: Reverts a previous commit
*   **scope**: Optional, describes the part of the codebase affected.
*   **subject**: A very brief description of the change.
*   **body**: Optional, a more detailed explanation of the change.
*   **footer**: Optional, can contain references to issues (e.g., `Closes #123`).