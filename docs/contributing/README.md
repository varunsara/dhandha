# Contributing to Dhandha

Thank you for your interest in contributing to Dhandha! This guide will help you get started with contributing to our land and property marketplace platform.

## 🚀 Quick Start

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Set up the development environment** (see [Setup Guide](../setup/README.md))
4. **Create a feature branch** for your changes
5. **Make your changes** and test thoroughly
6. **Submit a pull request** with a clear description

## 📋 Prerequisites

Before contributing, ensure you have:

- Node.js 18+ and npm 8+
- PostgreSQL 14+
- Git
- Basic knowledge of TypeScript, React, and Node.js
- Familiarity with the Indian real estate market (preferred)

## 🛠️ Development Workflow

### 1. Setting Up Your Environment

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/dhandha.git
cd dhandha

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Start the development environment
npm run dev
```

### 2. Creating a Feature Branch

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/bug-description
```

### 3. Making Changes

Follow these guidelines when making changes:

- **Write tests** for new functionality
- **Update documentation** if needed
- **Follow the existing code style**
- **Use conventional commit messages**

### 4. Testing Your Changes

```bash
# Run all tests
npm run test

# Run type checking
npm run type-check

# Run linting
npm run lint

# Format code
npm run format

# Build the project
npm run build
```

### 5. Committing Changes

We use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

```bash
# Examples
git commit -m "feat: add property search filters"
git commit -m "fix: resolve authentication token expiry issue"
git commit -m "docs: update API documentation"
git commit -m "refactor: improve database query performance"
```

### 6. Submitting a Pull Request

1. **Push your branch** to your fork
2. **Create a pull request** on GitHub
3. **Fill out the PR template** completely
4. **Wait for review** and address feedback

## 📝 Code Standards

### TypeScript Guidelines

- **Use strict TypeScript**: Enable all strict mode options
- **Prefer interfaces over types** for object shapes
- **Use proper typing**: Avoid `any`, use specific types
- **Document complex types**: Add JSDoc comments for complex interfaces

```typescript
// Good
interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isVerified: boolean;
}

// Avoid
const userProfile: any = {...};
```

### React/Next.js Guidelines

- **Use functional components** with hooks
- **Prefer composition over inheritance**
- **Use React Query** for server state management
- **Follow Next.js conventions** for routing and API routes

```tsx
// Good
export function PropertyCard({ property }: { property: Property }) {
  const { data, isLoading } = useQuery(['property', property.id], fetchProperty);
  
  if (isLoading) return <PropertyCardSkeleton />;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{property.title}</CardTitle>
      </CardHeader>
    </Card>
  );
}
```

### NestJS/Backend Guidelines

- **Use DTOs** for request/response validation
- **Implement proper error handling**
- **Use guards** for authentication and authorization
- **Write comprehensive tests**

```typescript
// Good
@Controller('properties')
export class PropertiesController {
  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@Query() query: PropertyQueryDto): Promise<PropertyResponseDto[]> {
    return this.propertiesService.findAll(query);
  }
}
```

### Database Guidelines

- **Use Prisma migrations** for schema changes
- **Write efficient queries** with proper indexing
- **Validate data at the application level**
- **Use transactions** for multi-table operations

```typescript
// Good
async createPropertyWithDocuments(data: CreatePropertyDto) {
  return this.prisma.$transaction(async (tx) => {
    const property = await tx.property.create({
      data: {
        ...data,
        documents: {
          create: data.documents
        }
      }
    });
    return property;
  });
}
```

## 🧪 Testing Guidelines

### Unit Tests

- **Test business logic** thoroughly
- **Mock external dependencies**
- **Use descriptive test names**
- **Follow AAA pattern**: Arrange, Act, Assert

```typescript
describe('PropertyService', () => {
  it('should create a property with valid data', async () => {
    // Arrange
    const propertyData = createValidPropertyData();
    const mockPrisma = createMockPrisma();
    
    // Act
    const result = await propertyService.create(propertyData);
    
    // Assert
    expect(result).toMatchObject(expectedProperty);
    expect(mockPrisma.property.create).toHaveBeenCalledWith(propertyData);
  });
});
```

### Integration Tests

- **Test API endpoints** with real database
- **Test authentication flows**
- **Test error scenarios**
- **Use test database** for isolation

### E2E Tests

- **Test critical user journeys**
- **Test cross-browser compatibility**
- **Test responsive design**
- **Use realistic test data**

## 📚 Documentation Guidelines

### Code Documentation

- **Use JSDoc** for functions and classes
- **Document complex algorithms**
- **Explain business logic** with comments
- **Keep comments up to date**

```typescript
/**
 * Calculates property price per square foot based on area unit
 * @param price - Property price in INR
 * @param area - Property area
 * @param areaUnit - Unit of measurement (SQ_FT, ACRE, BIGHA, etc.)
 * @returns Price per square foot in INR
 */
function calculatePricePerSqFt(price: number, area: number, areaUnit: AreaUnit): number {
  const areaInSqFt = convertToSquareFeet(area, areaUnit);
  return price / areaInSqFt;
}
```

### API Documentation

- **Use OpenAPI/Swagger** specifications
- **Document all endpoints**
- **Include request/response examples**
- **Document error responses**

### README Updates

- **Keep README current** with changes
- **Update setup instructions** if needed
- **Document new features**
- **Update dependencies** if changed

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Clear description** of the issue
2. **Steps to reproduce** the bug
3. **Expected vs actual behavior**
4. **Environment details** (OS, Node version, etc.)
5. **Screenshots or logs** if applicable

Use our [bug report template](.github/ISSUE_TEMPLATE/bug_report.yml).

## 💡 Feature Requests

For new features, please:

1. **Check existing issues** to avoid duplicates
2. **Describe the problem** you're trying to solve
3. **Propose a solution** with details
4. **Consider the Indian market context**
5. **Think about implementation complexity**

Use our [feature request template](.github/ISSUE_TEMPLATE/feature_request.yml).

## 🌍 Indian Market Considerations

When contributing, keep in mind:

### Legal and Compliance
- **Property laws** vary by state in India
- **Document requirements** differ by region
- **Tax implications** for property transactions
- **Regulatory compliance** requirements

### Cultural Considerations
- **Language preferences** by region
- **Local customs** in property transactions
- **Regional measurement units**
- **Payment preferences** (UPI, bank transfer, etc.)

### Technical Considerations
- **Internet connectivity** varies across tier 2/3 cities
- **Mobile-first** approach for rural areas
- **Local language support**
- **Offline functionality** where possible

## 🔍 Code Review Process

### For Contributors

1. **Self-review** your code before submitting
2. **Test thoroughly** on different devices/browsers
3. **Check for accessibility** compliance
4. **Ensure mobile responsiveness**
5. **Write clear PR descriptions**

### Review Criteria

We review for:

- **Functionality**: Does it work as expected?
- **Code Quality**: Is it well-written and maintainable?
- **Performance**: Does it impact performance negatively?
- **Security**: Are there any security concerns?
- **Tests**: Are appropriate tests included?
- **Documentation**: Is documentation updated?

## 🏆 Recognition

Contributors will be recognized in:

- **README.md** contributors section
- **Release notes** for significant contributions
- **GitHub discussions** for community recognition
- **Social media** shoutouts for major features

## 📞 Getting Help

If you need help:

1. **Check existing documentation** first
2. **Search existing issues** on GitHub
3. **Join our community discussions**
4. **Ask questions** in GitHub Discussions
5. **Contact maintainers** for urgent issues

## 📄 License

By contributing to Dhandha, you agree that your contributions will be licensed under the [MIT License](../LICENSE).

## 🙏 Thank You

Thank you for contributing to Dhandha! Your efforts help build a better property marketplace platform for millions of users across India. Every contribution, no matter how small, makes a difference.

---

**Happy Coding! 🎉**

For questions or clarifications, feel free to reach out to the maintainers or open a discussion on GitHub.