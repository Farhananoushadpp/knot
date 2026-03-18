# ASP Global Marine Trading LLC - Development Guidelines

This document provides guidelines for developers working on the ASP Global Marine Trading LLC website project.

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 16+ installed
- npm or yarn package manager
- Basic knowledge of React, HTML, CSS

### **Installation**
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📁 **Project Structure Overview**

```
src/
├── components/           # React components
├── pages/               # React pages
├── styles/               # Modular CSS files
├── App.jsx              # Main application
└── index.jsx            # Entry point
```

## 🎨 **Development Workflow**

### **🔧 Adding Components**
1. Create component file: `src/components/ComponentName.jsx`
2. Create CSS file: `src/styles/components/ComponentName.css`
3. Import CSS in `src/styles/main.css`
4. Use component in appropriate page

### **📄 Adding Pages**
1. Create page file: `src/pages/PageName.jsx`
2. Create CSS file: `src/styles/pages/PageName.css`
3. Add route in `src/App.jsx`
4. Import CSS in `src/styles/main.css`

### **🎨 Updating Styles**
- **Global Changes**: Update `src/styles/base/variables.css`
- **Component Changes**: Edit component-specific CSS
- **Page Changes**: Edit page-specific CSS
- **Utilities**: Add to `src/styles/base/utilities.css`

## 🎯 **Coding Standards**

### **React Components**
- ✅ Use functional components with hooks
- ✅ Use PascalCase for file names
- ✅ Export components as default
- ✅ Use JSX for markup
- ✅ Follow React best practices

```jsx
// Example component structure
import React from 'react';

const ComponentName = ({ prop1, prop2 }) => {
  return (
    <div className="component-name">
      <h2>{prop1}</h2>
      <p>{prop2}</p>
    </div>
  );
};

export default ComponentName;
```

### **CSS Architecture**
- ✅ Use CSS custom properties (variables)
- ✅ Modular CSS files
- ✅ BEM methodology for class naming
- ✅ Mobile-first responsive design
- ✅ Use semantic HTML5

```css
/* Example CSS structure */
.component-name {
  background: var(--white-color);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
}

.component-name__element {
  color: var(--text-color);
  font-size: var(--font-size-base);
}
```

### **File Naming**
- **React Components**: PascalCase (`Navbar.jsx`)
- **CSS Files**: PascalCase (`Navbar.css`)
- **Pages**: PascalCase (`Home.jsx`)
- **Utilities**: kebab-case (`flex-center`)
- **Constants**: UPPER_SNAKE_CASE (`PRIMARY_COLOR`)

## 🎨 **CSS Guidelines**

### **Variables**
- Use CSS custom properties for colors, spacing, typography
- Group related variables logically
- Use semantic naming

```css
:root {
  --primary-color: #3BBFA7;
  --secondary-color: #2DA87A;
  --text-color: #0A2E2A;
  --background-color: #F8FFFD;
  --white-color: #FFFFFF;
}
```

### **Responsive Design**
- Mobile-first approach
- Use CSS Grid and Flexbox
- Use media queries appropriately
- Test on multiple screen sizes

```css
@media (max-width: 768px) {
  .component {
    padding: var(--spacing-md);
  }
}
```

### **Performance**
- Avoid !important
- Use efficient selectors
- Minimize reflows
- Optimize images and assets

## 🧪 **Component Development**

### **Props Interface**
- Define clear prop types
- Use TypeScript-style JSDoc comments
- Provide default values where appropriate
- Use destructuring for props

```jsx
/**
 * Component description
 * @param {string} title - Component title
 * @param {string} description - Component description
 * @param {object} props - Additional props
 */
const Component = ({ title, description, ...props }) => {
  return (
    <div className="component">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
```

### **State Management**
- Use useState for local state
- Use useEffect for side effects
- Keep state minimal and relevant
- Lift state up when needed

### **Event Handling**
- Use semantic event handlers
- Use useCallback for performance
- Pass event handlers as props
- Use proper event delegation

## 🔍 **Code Quality**

### **Linting**
- Run `npm run lint` to check code quality
- Fix all ESLint errors before committing
- Use consistent code formatting
- Follow React and CSS best practices

### **Code Reviews**
- Review component logic and structure
- Check CSS for performance issues
- Verify responsive behavior
- Ensure accessibility compliance

### **Testing**
- Test components in isolation
- Test user interactions
- Test responsive layouts
- Test color contrast and accessibility

## 🚀 **Deployment**

### **Build Process**
```bash
# Development build
npm start

# Production build
npm run build

# Preview build
npm run preview
```

### **Build Optimization**
- Build for production with optimizations
- Minimize CSS and JS
- Optimize images and assets
- Enable gzip compression
- Set proper cache headers

## 📚 **Maintenance**

### **Regular Updates**
- Keep dependencies updated
- Review and refactor code regularly
- Update documentation as needed
- Monitor performance metrics

### **Code Cleanup**
- Remove unused code and dependencies
- Consolidate duplicate styles
- Optimize bundle size
- Remove deprecated features

### **Documentation**
- Keep README files up to date
- Document component APIs
- Update style guides
- Maintain folder structure docs

## 🎯 **Version Control**

### **Git Workflow**
- Use semantic commit messages
- Create feature branches
- Use pull requests for changes
- Tag releases appropriately

### **Commit Messages**
```
feat: Add new component feature
fix: Fix responsive issue
docs: Update documentation
refactor: Refactor component structure
style: Update color theme
chore: Update dependencies
```

## 📊 **Resources**

### **Documentation**
- [React Documentation](https://react.dev/)
- [CSS Tricks](https://css-tricks.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)

### **Tools**
- React Developer Tools
- Chrome DevTools
- ESLint for linting
- Stylelint for CSS
- Prettier for formatting

### **Performance**
- Lighthouse for performance audits
- WebPageTest for accessibility
- Bundle analyzer for optimization
- Page speed insights

---

## 📞 **Contact**

For questions about development practices, refer to the project documentation or contact the development team.

**Happy Coding! 🚢**
