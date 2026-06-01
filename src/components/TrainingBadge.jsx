import { TRAINING_TYPES } from '../lib/trainingEngine';

/**
 * Badge colorido que representa o tipo de treino.
 */
export default function TrainingBadge({ type, size = 'md' }) {
  const info = TRAINING_TYPES[type];
  if (!info) return null;

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-3 py-1',
    lg: 'text-sm px-4 py-1.5',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold border tracking-wide uppercase ${sizeClasses[size]} training-${type.toLowerCase()}`}
    >
      <span>{info.emoji}</span>
      <span>{info.name}</span>
    </span>
  );
}
