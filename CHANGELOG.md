# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.1] - 2026-06-11

### Added
- 📋 Copy code button with clipboard API
- Toast notifications for user feedback
- Comprehensive deployment guide
- Railway.app deployment guide
- GitHub repository documentation

### Fixed
- SYNC_CODE handler for new user code sync
- SYNC_CODE listener in Editor component
- Leave room button redirect issue

### Documentation
- Added production deployment guides
- Added testing procedures guide
- Added contributing guidelines
- Added code of conduct

## [1.1.0] - 2026-06-11

### Added
- 🌍 Multi-language support (7 languages)
  - JavaScript
  - Python
  - HTML
  - CSS
  - Java
  - C++
  - SQL
- Language selector dropdown in editor header
- Dynamic language extension switching
- Syntax highlighting per language
- Code preservation on language switch

### Changed
- Updated Editor component to support multiple languages
- Enhanced editor styling for language selector

## [1.0.0] - 2026-06-11

### Added
- ✅ Real-time collaborative code editing
- ✅ Multi-user support with WebSocket
- ✅ Room-based session management
- ✅ User presence tracking (connected users list)
- ✅ User avatars with names
- ✅ Live code synchronization
- ✅ Dracula One Dark theme
- ✅ CodeMirror 6 editor integration
- ✅ React Router navigation
- ✅ Express backend with Socket.io
- ✅ Toast notifications
- ✅ Responsive design
- ✅ Project documentation

### Features
- Create/join rooms with UUID
- Real-time code broadcasting
- User connection tracking
- Disconnect notifications
- Clean UI with animations

---

## Unreleased

### Planned
- [ ] User authentication (JWT/OAuth)
- [ ] Code history and version control
- [ ] Chat and comments in editor
- [ ] Code formatting (Prettier integration)
- [ ] Code snippets and templates
- [ ] Dark/Light theme toggle
- [ ] Browser code execution
- [ ] Database persistence
- [ ] Cursor position tracking
- [ ] Collaborative debugging

---

## Version Numbering

We use [Semantic Versioning](https://semver.org/):
- **MAJOR** version for incompatible API changes
- **MINOR** version for new functionality in a backwards compatible manner
- **PATCH** version for backwards compatible bug fixes

Example: `1.1.1`
- `1` = MAJOR (breaking changes)
- `1` = MINOR (new features)
- `1` = PATCH (bug fixes)

---

## Release Process

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Commit changes
4. Tag release: `git tag v1.1.1`
5. Push to GitHub: `git push && git push --tags`
6. Create GitHub Release with notes

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on reporting issues, requesting features, and submitting pull requests.

---

**Last Updated**: 2026-06-11  
**Current Version**: 1.1.1
