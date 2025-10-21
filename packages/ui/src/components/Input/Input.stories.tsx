import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Input } from './Input'

/**
 * Icon components for examples
 */
const IconMail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-full h-full"
  >
    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
  </svg>
)

const IconSearch = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-full h-full"
  >
    <path
      fillRule="evenodd"
      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
      clipRule="evenodd"
    />
  </svg>
)

const IconLock = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-full h-full"
  >
    <path
      fillRule="evenodd"
      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
      clipRule="evenodd"
    />
  </svg>
)

const IconUser = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-full h-full"
  >
    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
  </svg>
)

const IconPhone = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-full h-full"
  >
    <path
      fillRule="evenodd"
      d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
      clipRule="evenodd"
    />
  </svg>
)

const IconCheck = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-full h-full"
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
  </svg>
)

const IconGlobe = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-full h-full"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
      clipRule="evenodd"
    />
  </svg>
)

/**
 * Controlled Input Wrapper for interactive stories
 */
const ControlledInput = (props: any) => {
  const [value, setValue] = useState(props.value || '')

  return (
    <Input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue('')}
    />
  )
}

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible input component with multiple types, states, and features. Supports labels, helper text, error messages, prefix/suffix icons, and clearable functionality. Fully accessible with WCAG AA compliance.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'The type of input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'The visual state of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text for the input',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the input',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message displayed below the input (overrides helperText)',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    clearable: {
      control: 'boolean',
      description: 'Whether to show a clear button when the input has a value',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input should take full width of its container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Change handler',
    },
    onFocus: {
      action: 'focused',
      description: 'Focus handler',
    },
    onBlur: {
      action: 'blurred',
      description: 'Blur handler',
    },
    onClear: {
      action: 'cleared',
      description: 'Clear handler',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default input with text type
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

/**
 * Input with label
 */
export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    type: 'email',
  },
}

/**
 * Input with helper text
 */
export const WithHelperText: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    helperText: "We'll never share your email with anyone else.",
  },
}

/**
 * All input types
 */
export const Types: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input label="Text" type="text" placeholder="Enter text" />
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Input label="Password" type="password" placeholder="Enter password" />
      <Input label="Number" type="number" placeholder="42" />
      <Input label="Telephone" type="tel" placeholder="+1 (555) 123-4567" />
      <Input label="URL" type="url" placeholder="https://example.com" />
    </div>
  ),
}

/**
 * All input states
 */
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input
        label="Default State"
        placeholder="Default"
        state="default"
        helperText="This is a default input"
      />
      <Input
        label="Success State"
        placeholder="Success"
        state="success"
        value="Valid input"
        helperText="This input is valid"
        onChange={() => {}}
      />
      <Input
        label="Error State"
        placeholder="Error"
        state="error"
        errorMessage="This field is required"
      />
      <Input
        label="Disabled State"
        placeholder="Disabled"
        disabled
        helperText="This input is disabled"
      />
    </div>
  ),
}

/**
 * Error state with error message
 */
export const Error: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    errorMessage: 'Please enter a valid email address',
  },
}

/**
 * Success state
 */
export const Success: Story = {
  args: {
    label: 'Email',
    type: 'email',
    value: 'user@example.com',
    state: 'success',
    helperText: 'Email is valid',
  },
}

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    disabled: true,
    helperText: 'This field is disabled',
  },
}

/**
 * Required field
 */
export const Required: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    required: true,
    helperText: 'This field is required',
  },
}

/**
 * Full width input
 */
export const FullWidth: Story = {
  render: () => (
    <div className="w-96">
      <Input
        label="Full Width Input"
        placeholder="This input takes full width"
        fullWidth
      />
    </div>
  ),
}

/**
 * Input with prefix icon
 */
export const WithPrefixIcon: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    prefixIcon: <IconMail />,
  },
}

/**
 * Input with suffix icon
 */
export const WithSuffixIcon: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    suffixIcon: <IconLock />,
  },
}

/**
 * Clearable input
 */
export const Clearable: Story = {
  render: () => <ControlledInput label="Search" placeholder="Type to search..." clearable />,
}

/**
 * Clearable input with prefix icon
 */
export const ClearableWithIcon: Story = {
  render: () => (
    <ControlledInput
      label="Search"
      placeholder="Search..."
      prefixIcon={<IconSearch />}
      clearable
    />
  ),
}

/**
 * Form inputs showcase
 */
export const FormInputs: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input
        label="Username"
        type="text"
        placeholder="johndoe"
        prefixIcon={<IconUser />}
        required
      />
      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
        prefixIcon={<IconMail />}
        required
        helperText="We'll never share your email"
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        prefixIcon={<IconLock />}
        required
        helperText="Must be at least 8 characters"
      />
      <Input
        label="Phone"
        type="tel"
        placeholder="+1 (555) 123-4567"
        prefixIcon={<IconPhone />}
      />
      <Input
        label="Website"
        type="url"
        placeholder="https://example.com"
        prefixIcon={<IconGlobe />}
      />
    </div>
  ),
}

/**
 * Search input with clearable
 */
export const SearchInput: Story = {
  render: () => (
    <div className="w-96">
      <ControlledInput
        placeholder="Search..."
        prefixIcon={<IconSearch />}
        clearable
        fullWidth
      />
    </div>
  ),
}

/**
 * Email input with validation
 */
export const EmailValidation: Story = {
  render: () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const validateEmail = (value: string) => {
      if (!value) {
        setError('Email is required')
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        setError('Please enter a valid email address')
      } else {
        setError('')
      }
    }

    return (
      <div className="w-80">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            validateEmail(e.target.value)
          }}
          onBlur={(e) => validateEmail(e.target.value)}
          placeholder="you@example.com"
          prefixIcon={<IconMail />}
          errorMessage={error}
          required
        />
      </div>
    )
  },
}

/**
 * Password input with strength indicator
 */
export const PasswordInput: Story = {
  render: () => {
    const [password, setPassword] = useState('')
    const getStrength = (pwd: string) => {
      if (!pwd) return ''
      if (pwd.length < 6) return 'Weak password'
      if (pwd.length < 10) return 'Medium password'
      return 'Strong password'
    }

    const getState = (pwd: string) => {
      if (!pwd) return 'default'
      if (pwd.length < 6) return 'error'
      if (pwd.length < 10) return 'default'
      return 'success'
    }

    return (
      <div className="w-80">
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          prefixIcon={<IconLock />}
          state={getState(password) as any}
          helperText={getStrength(password) || 'Must be at least 6 characters'}
          required
        />
      </div>
    )
  },
}

/**
 * Input states comparison
 */
export const StatesComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input
        label="Default"
        placeholder="Default state"
        helperText="This is a default input"
      />
      <Input
        label="Success"
        value="Success value"
        state="success"
        helperText="This input is valid"
        suffixIcon={<IconCheck />}
        onChange={() => {}}
      />
      <Input
        label="Error"
        value="Error value"
        errorMessage="This field has an error"
        onChange={() => {}}
      />
      <Input
        label="Disabled"
        placeholder="Disabled state"
        disabled
        helperText="This input is disabled"
      />
    </div>
  ),
}

/**
 * Icon variations
 */
export const IconVariations: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input
        label="Email"
        placeholder="you@example.com"
        prefixIcon={<IconMail />}
      />
      <Input
        label="Search"
        placeholder="Search..."
        prefixIcon={<IconSearch />}
      />
      <Input
        label="Verified"
        value="verified@example.com"
        prefixIcon={<IconMail />}
        suffixIcon={<IconCheck />}
        state="success"
        onChange={() => {}}
      />
      <ControlledInput
        label="Clearable Search"
        placeholder="Search..."
        prefixIcon={<IconSearch />}
        clearable
      />
    </div>
  ),
}

/**
 * Dark mode example
 */
export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-8 rounded-lg">
      <div className="flex flex-col gap-4 w-80">
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          prefixIcon={<IconMail />}
          helperText="We'll never share your email"
        />
        <Input
          label="Success"
          value="Success value"
          state="success"
          helperText="This input is valid"
          onChange={() => {}}
        />
        <Input
          label="Error"
          value="Error value"
          errorMessage="This field has an error"
          onChange={() => {}}
        />
        <ControlledInput
          label="Search"
          placeholder="Search..."
          prefixIcon={<IconSearch />}
          clearable
        />
      </div>
    </div>
  ),
}

/**
 * Playground for interactive testing
 */
export const Playground: Story = {
  args: {
    label: 'Label',
    type: 'text',
    placeholder: 'Enter text...',
    helperText: 'This is helper text',
    state: 'default',
    disabled: false,
    required: false,
    clearable: false,
    fullWidth: false,
  },
}
