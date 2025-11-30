import { TagsList } from '../components/TagsList/TagsList';

// Más información sobre cómo configurar stories en: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/TagsList',
  component: TagsList,
  parameters: {
    // Parámetro opcional para centrar el componente en el Canvas. Más info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // Este componente tendrá una entrada de Autodocs generada automáticamente: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Más información sobre argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    tags: {
      control: 'object',
      description: 'Array de textos para los tags',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Tamaño de los tags',
    },
  },
};

// Más información sobre escribir stories con args: https://storybook.js.org/docs/writing-stories/args
export const Small = {
  args: {
    size: 'small',
  },
};

export const Medium = {
  args: {
    size: 'medium',
  },
};

export const WithCustomTags = {
  args: {
    tags: ['React', 'Vue', 'Angular', 'Svelte', 'Next.js'],
    size: 'small',
  },
};

export const ManyTags = {
  args: {
    tags: [
      'Tag 1',
      'Tag 2',
      'Tag 3',
      'Tag 4',
      'Tag 5',
      'Tag 6',
      'Tag 7',
      'Tag 8',
      'Tag 9',
      'Tag 10',
    ],
    size: 'small',
  },
};

