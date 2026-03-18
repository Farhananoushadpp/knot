# ASP Global Marine Trading LLC - Folder Structure

This document outlines the organized folder structure for the ASP Global Marine Trading LLC website project.

## 📁 **Project Structure**

```
asp-global-marine-website/
├── 📄 README.md                    # Project documentation
├── 📄 TECHNOLOGY.md                # Technology stack documentation
├── 📄 package.json                 # Dependencies and scripts
├── 📄 package-lock.json            # Locked dependencies
├── 📄 build/                      # Production build output
│   ├── 📄 static/
│   │   ├── 📄 css/
│   │   ├── 📄 main.[hash].css
│   │   └── 📄 main.[hash].css.map
│   └── 📄 index.html
├── 📄 node_modules/               # npm dependencies
├── 📄 public/                     # Public assets
│   └── 📄 index.html              # HTML template
└── 📂 src/                        # Source code
    ├── 📂 App.jsx                  # Main React component
    ├── 📂 index.jsx                # React entry point
    ├── 📂 styles.css               # Legacy CSS (deprecated)
    ├── 📂 styles/                  # Modular CSS structure
    │   ├── 📂 main.css              # Main CSS import file
    │   ├── 📂 base/                # Base styles
    │   │   ├── 📂 variables.css      # CSS custom properties
    │   │   ├── 📂 reset.css          # CSS reset
    │   │   ├── 📂 typography.css     # Typography rules
    │   │   ├── 📂 layout.css         # Layout utilities
    │   │   └── 📂 utilities.css      # Utility classes
    │   ├── 📂 components/           # Component-specific CSS
    │   │   ├── 📂 Navbar.css
    │   │   ├── 📂 Hero.css
    │   │   ├── 📂 About.css
    │   │   ├── 📂 Products.css
    │   │   ├── 📂 Strengths.css
    │   │   ├── 📂 Certifications.css
    │   │   ├── 📂 Contact.css
    │   │   └── 📂 Footer.css
    │   └── 📂 pages/               # Page-specific CSS
    │       ├── 📂 Home.css
    │       ├── 📂 About.css
    │       ├── 📂 Products.css
    │       └── 📂 Contact.css
    ├── 📂 components/               # React components
    │   ├── 📂 Navbar.jsx           # Navigation component
    │   ├── 📂 Hero.jsx             # Hero section
    │   ├── 📂 About.jsx            # About section
    │   ├── 📂 Strengths.jsx         # Strengths section
    │   ├── 📂 Products.jsx          # Products section
    │   ├── 📂 Certifications.jsx    # Certifications section
    │   ├── 📂 Contact.jsx          # Contact section
    │   └── 📂 Footer.jsx            # Footer component
    └── 📂 pages/                   # React pages
        ├── 📂 Home.jsx            # Home page
        ├── 📂 About.jsx           # About page
        ├── 📂 Products.jsx        # Products page
        └── 📂 Contact.jsx         # Contact page
```

## 📋 **Folder Organization Guidelines**

### **🎯 Root Level**
- **README.md**: Project overview and setup instructions
- **TECHNOLOGY.md**: Detailed technology stack documentation
- **package.json**: Project dependencies and scripts
- **public/**: Static assets and HTML template
- **build/**: Production build output

### **📂 Source Code (src/)**
- **App.jsx**: Main application component with routing
- **index.jsx**: React DOM entry point
- **styles/**: Modular CSS architecture
- **components/**: Reusable React components
- **pages/**: Page-level React components

### **🎨 Styles (src/styles/)**
- **main.css**: Central CSS import file
- **base/**: Foundational styles
  - **variables.css**: CSS custom properties
  - **reset.css**: Browser reset
  - **typography.css**: Text styling
  - **layout.css**: Grid, flexbox, utilities
  - **utilities.css**: Helper classes
- **components/**: Component-specific styling
- **pages/**: Page-specific enhancements

### **🧩 Components (src/components/)**
- Each component has:
  - **Component.jsx**: React component file
  - **Component.css**: Component-specific CSS
- Follows naming convention: PascalCase

### **📄 Pages (src/pages/)**
- Each page has:
  - **Page.jsx**: React page component
  - **Page.css**: Page-specific CSS
- Follows naming convention: PascalCase

## 🔄 **Naming Conventions**

### **Files**
- **React Components**: PascalCase (e.g., `Navbar.jsx`)
- **CSS Files**: PascalCase (e.g., `Navbar.css`)
- **Pages**: PascalCase (e.g., `Home.jsx`)
- **Utilities**: kebab-case (e.g., `flex-center`)

### **CSS Classes**
- **Components**: kebab-case (e.g., `.navbar`)
- **Utilities**: kebab-case (e.g., `.text-center`)
- **States**: kebab-case with modifiers (e.g., `.btn-primary`)

### **React Components**
- **Default Exports**: Named exports
- **File Names**: PascalCase matching component name
- **Props**: camelCase

## 🎯 **Best Practices**

### **📁 File Organization**
- ✅ **Logical Grouping**: Related files grouped together
- ✅ **Consistent Naming**: Follow established conventions
- ✅ **Clear Separation**: Components, pages, styles separated
- ✅ **Documentation**: README files for major sections

### **🎨 CSS Architecture**
- ✅ **Modular Imports**: CSS files imported in main.css
- ✅ **Variable System**: Centralized in variables.css
- ✅ **Component Isolation**: Each component has its own CSS
- ✅ **Page Specifics**: Page styles separated from components

### **🧩 React Structure**
- ✅ **Single Responsibility**: Each component has one purpose
- ✅ **Reusable Design**: Components are modular and reusable
- ✅ **Props Interface**: Clear prop definitions
- ✅ **State Management**: Appropriate use of hooks

## 🚀 **Development Workflow**

### **🔧 Adding New Components**
1. Create component file: `src/components/ComponentName.jsx`
2. Create CSS file: `src/styles/components/ComponentName.css`
3. Import CSS in `src/styles/main.css`
4. Use component in appropriate page

### **📄 Adding New Pages**
1. Create page file: `src/pages/PageName.jsx`
2. Create CSS file: `src/styles/pages/PageName.css`
3. Add route in `src/App.jsx`
4. Import CSS in `src/styles/main.css`

### **🎨 Updating Styles**
- **Global Changes**: Update `src/styles/base/variables.css`
- **Component Changes**: Edit component-specific CSS
- **Page Changes**: Edit page-specific CSS
- **Utilities**: Add to `src/styles/base/utilities.css`

## 📊 **Current Status**

✅ **Well Organized**: Professional folder structure
✅ **Modular CSS**: Clean separation of concerns
✅ **Component Isolation**: Each component self-contained
✅ **Page Separation**: Pages have their own styling
✅ **Documentation**: Clear documentation and guidelines
✅ **Scalable**: Easy to extend and maintain

The folder structure is optimized for maintainability, scalability, and team collaboration following React and CSS best practices.
