# gRPC Compiler Website

This repository contains the source code for the gRPC Compiler VSCode Extension's documentation website. The website provides comprehensive information about the extension, installation requirements, and usage instructions.

## Overview

The gRPC Compiler is a Visual Studio Code extension that simplifies the process of compiling Protocol Buffers (.proto) files to gRPC code in multiple programming languages directly from the IDE.

## Features

- Interactive tabs for different language-specific installation instructions
- Code snippets with copy functionality
- Responsive design that works on all device sizes
- Demo section with animated GIF showing how the extension works
- Clear installation steps for supported languages

## Supported Languages

The website provides detailed setup instructions for compiling .proto files to:

- Go
- Python
- Java
- Ruby
- Dart

Each language section includes:
- Required dependencies
- Installation commands
- Configuration details

## Local Development

To run this website locally:

1. Clone the repository
2. Open the directory in your preferred code editor
3. Open `index.html` in your browser

No build steps are required as this is a static website.

## Project Structure

```
/
├── index.html       # Main HTML file
├── styles.css       # CSS styles
├── script.js        # JavaScript functionality
├── public/          # Images and other static assets
└── .gitignore       # Git ignore file
```

## License

This project is part of the gRPC Compiler extension by [devdogukan](https://github.com/devdogukan).

## Links

- [Extension on VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=devdogukan.grpc-compiler)
- [GitHub Repository](https://github.com/devdogukan/grpc-compiler)