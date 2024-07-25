import React from 'react'

const TextInput = React.forwardRef(({type,placeholder,register,name,error},ref) => {
  return (
    <div className='w-full flex flex-col mt-2'>
            <input 
            type={type}
            name={name}
            placeholder={placeholder}
            ref={ref}
            className={`w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#06425f]`}
            {...register}
            aria-invalid={error ? "true" : "false"}/>
        {error && (
            <span className='text-xs text-[#f64949fe] mt-0.5'>{error}</span>
        )}
    </div>
  )
})

export default TextInput