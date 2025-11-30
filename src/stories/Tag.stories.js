import { Tag } from '../components/Tag/Tag';

// Más información sobre cómo configurar stories en: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Tag',
  component: Tag,
  parameters: {
    // Parámetro opcional para centrar el componente en el Canvas. Más info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // Este componente tendrá una entrada de Autodocs generada automáticamente: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Más información sobre argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    pillText: {
      control: 'text',
      description: 'Texto a mostrar en el tag',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Tamaño del tag',
    },
  },
};

// Más información sobre escribir stories con args: https://storybook.js.org/docs/writing-stories/args
export const Small = {
  args: {
    pillText: 'Lorem',
    size: 'small',
  },
};

export const Medium = {
  args: {
    pillText: 'Lorem',
    size: 'medium',
  },
};

export const CustomText = {
  args: {
    pillText: 'Etiqueta personalizada',
    size: 'small',
  },
};

