import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from '../Tag/Tag';
import './TagsList.css';

/**
 * Componente TagsList para mostrar una lista de etiquetas
 */
export const TagsList = ({ tags, size, ...props }) => {
  return (
    <div
      className={['tags-list', `tags-list--${size}`].join(' ')}
      role="list"
      aria-label="Lista de etiquetas"
      {...props}
    >
      {tags && tags.length > 0 ? (
        tags.map((tagText, index) => (
          <Tag
            key={index}
            pillText={tagText}
            size={size}
          />
        ))
      ) : (
        // Si no hay tags, mostrar tags por defecto
        Array.from({ length: 10 }, (_, index) => (
          <Tag
            key={index}
            pillText="Lorem"
            size={size}
          />
        ))
      )}
    </div>
  );
};

TagsList.propTypes = {
  /**
   * Array de textos para los tags
   */
  tags: PropTypes.arrayOf(PropTypes.string),
  /**
   * Tamaño de los tags
   */
  size: PropTypes.oneOf(['small', 'medium']),
};

TagsList.defaultProps = {
  tags: null,
  size: 'small',
};

