function Input({
  label,
  id,
  as = 'input',
  containerClassName = '',
  className = '',
  inputClassName = '',
  labelClassName = '',
  inputRef,
  hasError = false,
  errorMessage = '',
  helperText = '',
  ...props
}) {
  const baseClassName =
    'w-full rounded-xl border border-white/15 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-400/20'
  const errorClassName = hasError
    ? '!border-error border-2 !bg-error/15 focus:!border-error focus:!ring-error/30'
    : ''
  const mergedInputClassName = `${baseClassName} ${errorClassName} ${className} ${inputClassName}`.trim()

  return (
    <div className={containerClassName}>
      {label ? (
        <label htmlFor={id} className={`mb-2 block text-sm font-medium text-slate-200 ${labelClassName}`.trim()}>
          {label}
        </label>
      ) : null}

      {as === 'textarea' ? (
        <textarea id={id} className={mergedInputClassName} {...props} />
      ) : (
        <input ref={inputRef} id={id} className={mergedInputClassName} {...props} />
      )}

      {hasError && errorMessage ? <p className="mt-1 text-xs text-error">{errorMessage}</p> : null}
      {!hasError && helperText ? <p className="mt-1 text-xs text-slate-400">{helperText}</p> : null}
    </div>
  )
}

export default Input
