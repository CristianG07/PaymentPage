export const Input = ({className, ...props}) => {
  return (
    <>
      <input className={`block w-full bg-input_background rounded-full py-3 px-4 font-montserrat placeholder:text-dark_blue text-[#011F31] focus:outline focus:outline-2 focus:outline-green_secondary ${className}`} {...props} />
    </>
  )
}