export const displayThis = (condition, display = 'block') => (condition ? display : 'none');
export const displayStyle = (condition, display) => ({ display: displayThis(condition, display) });
