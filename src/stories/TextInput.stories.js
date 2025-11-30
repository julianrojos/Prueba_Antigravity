import React from 'react';
import { TextInput } from '../components/TextInput/TextInput';

// Más información sobre cómo configurar stories en: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/TextInput',
  component: TextInput,
  parameters: {
    // Parámetro opcional para centrar el componente en el Canvas. Más info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // Este componente tendrá una entrada de Autodocs generada automáticamente: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Más información sobre argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: {
      control: 'text',
      description: 'Etiqueta del campo',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder del input',
    },
    message: {
      control: 'text',
      description: 'Mensaje de ayuda o error',
    },
    type: {
      control: 'select',
      options: ['default', 'active', 'success', 'error'],
      description: 'Tipo de estado del input',
    },
    showLabel: {
      control: 'boolean',
      description: 'Mostrar la etiqueta',
    },
    showIcon: {
      control: 'boolean',
      description: 'Mostrar el icono',
    },
    showMessage: {
      control: 'boolean',
      description: 'Mostrar el mensaje',
    },
    value: {
      control: 'text',
      description: 'Valor del input',
    },
  },
};

// Más información sobre escribir stories con args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    message: 'Message',
    type: 'default',
    showLabel: true,
    showIcon: true,
    showMessage: true,
  },
};

export const Active = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    message: 'Message',
    type: 'active',
    value: 'Texto ingresado',
    showLabel: true,
    showIcon: true,
    showMessage: true,
  },
};

export const Success = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    message: 'Campo válido',
    type: 'success',
    value: 'Texto válido',
    showLabel: true,
    showIcon: true,
    showMessage: true,
  },
};

export const Error = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    message: 'Este campo es requerido',
    type: 'error',
    value: 'Texto inválido',
    showLabel: true,
    showIcon: true,
    showMessage: true,
  },
};

export const WithoutLabel = {
  args: {
    placeholder: 'Placeholder',
    message: 'Message',
    type: 'default',
    showLabel: false,
    showIcon: true,
    showMessage: true,
  },
};

export const WithoutIcon = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    message: 'Message',
    type: 'default',
    showLabel: true,
    showIcon: false,
    showMessage: true,
  },
};

export const WithoutMessage = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'default',
    showLabel: true,
    showIcon: true,
    showMessage: false,
  },
};

// Story interactiva comentada temporalmente para evitar errores de sintaxis
// export const Interactive = {
//   render: () => {
//     const [value, setValue] = useState('');
//     const [type, setType] = useState('default');
//     
//     const handleChange = (e) => {
//       const newValue = e.target.value;
//       setValue(newValue);
//       
//       if (newValue.length === 0) {
//         setType('default');
//       } else if (newValue.length < 3) {
//         setType('error');
//       } else if (newValue.length >= 3 && newValue.length < 6) {
//         setType('active');
//       } else {
//         setType('success');
//       }
//     };
//     
//     return (
//       <TextInput
//         label="Email"
//         placeholder="Ingresa tu email"
//         message={
//           type === 'error' 
//             ? 'El email debe tener al menos 3 caracteres'
//             : type === 'success'
//             ? 'Email válido'
//             : 'Ingresa tu dirección de email'
//         }
//         type={type}
//         value={value}
//         onChange={handleChange}
//         id="interactive-input"
//       />
//     );
//   },
// };

