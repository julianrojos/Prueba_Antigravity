import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

/**
 * Icono de información simple
 */
const InfoIcon = ({ color = 'var(--text-fields-label-color, #483f3f)' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill="none" />
    <text
      x="12"
      y="17"
      textAnchor="middle"
      fontSize="12"
      fill={color}
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
      dominantBaseline="middle"
    >
      i
    </text>
  </svg>
);

InfoIcon.propTypes = {
  color: PropTypes.string,
};

/**
 * Componente TextInput para campos de texto con diferentes estados
 */
export const TextInput = ({
  label,
  placeholder,
  message,
  type = 'default',
  showLabel = true,
  showIcon = true,
  showMessage = true,
  value,
  onChange,
  ...props
}) => {
  const getTextColor = () => {
    if (type === 'active' && value) {
      return 'var(--text-fields-text-color-filled, #483f3f)';
    }
    return 'var(--text-fields-text-color-empty, #716666)';
  };

  const getMessageColor = () => {
    switch (type) {
      case 'success':
        return 'var(--text-fields-success, #3cb371)';
      case 'error':
        return 'var(--text-fields-error, #b22222)';
      default:
        return 'var(--text-fields-message-color-default, #483f3f)';
    }
  };

  const getIconColor = () => {
    switch (type) {
      case 'success':
        return 'var(--text-fields-success, #3cb371)';
      case 'error':
        return 'var(--text-fields-error, #b22222)';
      default:
        return 'var(--text-fields-label-color, #483f3f)';
    }
  };

  return (
    <div className="text-input" {...props}>
      {showLabel && label && (
        <label className="text-input__label" htmlFor={props.id}>
          {label}
        </label>
      )}
      <div
        className={['text-input__field', `text-input__field--${type}`].join(' ')}
      >
        <input
          type="text"
          id={props.id}
          className="text-input__input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{ color: getTextColor() }}
          aria-label={label || placeholder}
          aria-invalid={type === 'error' ? 'true' : 'false'}
          aria-describedby={message && showMessage ? `${props.id}-message` : undefined}
        />
        {showIcon && (
          <span className="text-input__icon" aria-hidden="true">
            <InfoIcon color={getIconColor()} />
          </span>
        )}
      </div>
      {showMessage && message && (
        <p
          className="text-input__message"
          id={props.id ? `${props.id}-message` : undefined}
          style={{ color: getMessageColor() }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

TextInput.propTypes = {
  /**
   * Etiqueta del campo
   */
  label: PropTypes.string,
  /**
   * Placeholder del input
   */
  placeholder: PropTypes.string,
  /**
   * Mensaje de ayuda o error
   */
  message: PropTypes.string,
  /**
   * Tipo de estado del input
   */
  type: PropTypes.oneOf(['default', 'active', 'success', 'error']),
  /**
   * Mostrar la etiqueta
   */
  showLabel: PropTypes.bool,
  /**
   * Mostrar el icono
   */
  showIcon: PropTypes.bool,
  /**
   * Mostrar el mensaje
   */
  showMessage: PropTypes.bool,
  /**
   * Valor del input
   */
  value: PropTypes.string,
  /**
   * Handler para cambios
   */
  onChange: PropTypes.func,
  /**
   * ID del input
   */
  id: PropTypes.string,
};

TextInput.defaultProps = {
  label: 'Label',
  placeholder: 'Placeholder',
  message: 'Message',
  type: 'default',
  showLabel: true,
  showIcon: true,
  showMessage: true,
  value: '',
  onChange: undefined,
  id: undefined,
};

