# Contributing to MJ MarkGen App

Thank you for your interest in contributing to the MJ MarkGen mobile app! This document provides guidelines for contributing to this project.

## 🤝 How to Contribute

### Reporting Issues

1. **Check existing issues** first to avoid duplicates
2. **Use the issue template** when creating new issues
3. **Provide detailed information** including:
   - Device and Android version
   - Steps to reproduce the issue
   - Expected vs actual behavior
   - Screenshots if applicable

### Suggesting Features

1. **Open a feature request** using the GitHub Issues tab
2. **Describe the feature** in detail
3. **Explain the use case** and why it would be valuable
4. **Consider the scope** - keep features focused and manageable

### Code Contributions

#### Getting Started

1. **Fork the repository** to your GitHub account
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/mjmarkgen-app.git
   cd mjmarkgen-app
   ```
3. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

#### Development Setup

1. **Install dependencies**:
   ```bash
   npm install
   npm install -g cordova
   ```

2. **Test the app**:
   ```bash
   cordova serve
   ```

3. **Build and test**:
   ```bash
   ./build.sh
   ```

#### Code Guidelines

- **Follow existing code style** and structure
- **Use meaningful variable and function names**
- **Add comments** for complex logic
- **Keep functions small and focused**
- **Test your changes** thoroughly on different devices/screen sizes
- **Ensure the app works offline**

#### File Structure Guidelines

- **HTML**: Keep `www/index.html` clean and semantic
- **CSS**: Use `www/css/index.css` for all styling
- **JavaScript**: Keep logic in `www/js/index.js`
- **Resources**: Place icons and splash screens in appropriate `res/` folders

#### Commit Guidelines

- **Use clear commit messages** that describe what was changed
- **Keep commits focused** - one feature/fix per commit
- **Use present tense** ("Add feature" not "Added feature")

Example commit messages:
```
Add grade calculation functionality
Fix responsive design on small screens
Update splash screen design
Improve form validation messages
```

#### Pull Request Process

1. **Ensure your code works** and doesn't break existing functionality
2. **Update documentation** if needed
3. **Create a pull request** with:
   - Clear title and description
   - Reference to related issues
   - Screenshots of UI changes (if applicable)
4. **Be responsive** to feedback and requested changes

### Testing Guidelines

#### Manual Testing

Before submitting a PR, please test:

1. **Form functionality**:
   - All input fields work correctly
   - Validation messages appear appropriately
   - Calculations are accurate

2. **Marksheet generation**:
   - Generated marksheets display correctly
   - All student information appears
   - Marks and calculations are accurate
   - Print functionality works

3. **Responsive design**:
   - App works on different screen sizes
   - UI elements are properly aligned
   - Text is readable on all devices

4. **Performance**:
   - App loads quickly
   - No lag when entering data
   - Smooth scrolling and interactions

#### Device Testing

Test on various devices if possible:
- Different Android versions
- Different screen sizes (phone/tablet)
- Different orientations (portrait/landscape)

## 🎨 Design Guidelines

### UI/UX Principles

- **Keep it simple**: The app should be easy to use for all users
- **Mobile-first**: Design for mobile devices primarily
- **Accessibility**: Ensure the app is usable by everyone
- **Hindi language support**: Maintain proper Hindi text rendering

### Visual Design

- **Consistent colors**: Use the existing blue-purple gradient theme
- **Readable fonts**: Ensure text is clear and appropriately sized
- **Proper spacing**: Maintain consistent margins and padding
- **Touch-friendly**: Make buttons and inputs large enough for touch

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Device information**:
   - Android version
   - Device model
   - Screen size/resolution

2. **Steps to reproduce**:
   - Detailed step-by-step instructions
   - What you expected to happen
   - What actually happened

3. **Additional context**:
   - Screenshots or videos
   - Error messages (if any)
   - Frequency of the issue

## 💡 Feature Requests

Good feature requests include:

1. **Clear description** of the proposed feature
2. **Use case explanation** - why is this needed?
3. **Implementation ideas** (if you have any)
4. **Consideration of scope** - how complex would this be?

## 📝 Documentation

Help improve documentation by:

- **Fixing typos** and grammar errors
- **Adding missing information**
- **Improving clarity** of instructions
- **Adding examples** where helpful
- **Updating outdated information**

## 🔄 Release Process

Releases are handled by maintainers:

1. **Version bumping** in `config.xml` and `package.json`
2. **Tag creation** with version number
3. **GitHub Actions** automatically builds and releases APKs
4. **Release notes** are generated with changelog

## 🙋‍♀️ Getting Help

If you need help with contributing:

1. **Check existing issues** and discussions
2. **Create a new issue** with the "question" label
3. **Be specific** about what you need help with
4. **Be patient** - maintainers will respond when available

## 📋 Code of Conduct

### Our Standards

- **Be respectful** and inclusive
- **Be constructive** in feedback
- **Focus on the code**, not the person
- **Help others learn** and grow
- **Be patient** with newcomers

### Unacceptable Behavior

- Harassment or discrimination
- Offensive language or imagery
- Personal attacks
- Spam or off-topic discussions

## 🏆 Recognition

Contributors will be recognized:

- **In the README** contributors section
- **In release notes** for significant contributions
- **Through GitHub** contributor statistics

## 📞 Contact

For questions about contributing:

- **Open an issue** for public discussion
- **Tag maintainers** in relevant issues
- **Be patient** for responses

---

Thank you for contributing to MJ MarkGen App! Your efforts help make education tools more accessible to everyone. 🎓

