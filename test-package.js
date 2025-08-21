// Test file to verify package exports
import { 
  Button, 
  Card, 
  Input, 
  Badge, 
  Text,
  buttonStyles,
  buildButtonClasses 
} from './dist/index.js';

console.log('✅ Package exports test:');
console.log('Components:', { Button, Card, Input, Badge, Text });
console.log('Styles:', { buttonStyles });
console.log('Helper functions:', { buildButtonClasses });

// Test building classes
const buttonClasses = buildButtonClasses({
  variant: 'primary',
  size: 'md',
  disabled: false
});

console.log('Button classes:', buttonClasses);
console.log('✅ All exports working correctly!');
