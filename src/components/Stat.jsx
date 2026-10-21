import useCountUp from '../hooks/useCountUp.js'

export default function Stat({ value, suffix, label, className = '' }) {
  const [ref, current] = useCountUp(value)
  return (
    <div className={`stat ${className}`} ref={ref}>
      <span className="stat__value" aria-hidden="true">
        {current}
        {suffix}
      </span>
      <span className="stat__label">
        <span className="visually-hidden">
          {value}
          {suffix}{' '}
        </span>
        {label}
      </span>
    </div>
  )
}
