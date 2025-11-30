import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

/**
 * Componente Tag para mostrar etiquetas o badges
 */
export const Tag = ({ pillText, size, ...props }) => {
  return (
    <div
      className={['tag', `tag--${size}`].join(' ')}
      role="status"
      aria-label={`Etiqueta: ${pillText}`}
      {...props}
    >
      <p className="tag__text">{pillText}</p>
    </div>
  );
};

Tag.propTypes = {
  /**
   * Texto a mostrar en el tag
   */
  pillText: PropTypes.string,
  /**
   * Tamaño del tag
   */
  size: PropTypes.oneOf(['small', 'medium']),
};

Tag.defaultProps = {
  pillText: 'Lorem',
  size: 'small',
};

