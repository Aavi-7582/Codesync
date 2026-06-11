# Contributing to Realtime Code Editor

Thank you for considering contributing to Realtime Code Editor! 🎉

## Code of Conduct

### Our Pledge
We are committed to providing a welcoming and inspiring community for all. Please read and adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md).

## How Can I Contribute?

### 🐛 Reporting Bugs
Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots and animated GIFs if possible**
- **Include your environment details** (OS, Node version, browser, etc.)

### 💡 Suggesting Enhancements
Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and expected behavior**
- **Explain why this enhancement would be useful**

### 🔧 Pull Requests

#### Process
1. Fork the repository and create your branch from `main`
2. If you've added code that should be tested, add tests
3. Ensure the test suite passes
4. Make sure your code follows the style guidelines
5. Write a clear commit message
6. Submit your pull request

#### Guidelines
- Include appropriate commit messages
- Reference related issues in your PR description
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

### 📚 Documentation Improvements
Documentation improvements are always welcome! This includes:

- README updates
- Code examples
- Tutorials
- API documentation
- Clarifications

### 🎨 Style Guidelines

#### Git Commit Messages
- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

Example:
```
Add multi-language support

- Implement language selector dropdown
- Add 7 programming languages
- Update syntax highlighting system

Fixes #123
```

#### JavaScript/React Code Style
- Use ES6+ features
- Use meaningful variable names
- Use arrow functions where appropriate
- Add comments for complex logic
- Keep functions small and focused

```javascript
// Good
const handleLanguageChange = (language) => {
    setLanguage(language)
    // Update syntax highlighting
}

// Avoid
const hlc = (l) => {
    setLanguage(l)
}
```

#### File and Folder Structure
- Use camelCase for files and variables
- Use PascalCase for React components
- Keep related files in the same directory
- Use meaningful folder names

## Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Setup Steps

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/realtime-editor.git
   cd realtime-editor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start development servers**
   ```bash
   # Terminal 1
   npm run server:dev
   
   # Terminal 2
   npm run dev
   ```

5. **Test your changes**
   - Open http://localhost:5173
   - Test functionality
   - Check for console errors

6. **Push to your fork**
   ```bash
   git add .
   git commit -m "Add your feature"
   git push origin feature/your-feature-name
   ```

7. **Submit a Pull Request**

## Testing

Before submitting a PR, please test:

- [ ] Single user functionality
- [ ] Multi-user collaboration
- [ ] Language switching
- [ ] Copy code button
- [ ] Leave/join rooms
- [ ] No console errors
- [ ] No warnings

## Project Structure

```
src/
├── components/          # React components
│   ├── Editor.jsx
│   └── Client.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   └── EditorPage.jsx
├── App.jsx
└── main.jsx

server.js              # Backend server
socket.js              # Socket configuration
Actions.js             # Event constants
```

## Need Help?

- 📖 Read the [README.md](./README.md)
- 💬 Open a [Discussion](https://github.com/YOUR_USERNAME/realtime-editor/discussions)
- 🐛 Check [Issues](https://github.com/YOUR_USERNAME/realtime-editor/issues)
- 📧 Email: your.email@example.com

## Recognition

Contributors will be recognized in:
- README.md contributors section
- GitHub contributor graph
- Release notes for their changes

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for helping make Realtime Code Editor better! 🚀**
