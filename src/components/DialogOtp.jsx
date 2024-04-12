import { useEffect, useRef } from 'react'
import { close, decoration1, decoration2, decoration3, decoration4 } from '../assets/img'

export const DialogOtp = ({ props }) => {
  const { isOpenDialogOtp, setOpenDialogOtp } = props
  const inputRefs = useRef([])
  const refDialog = useRef(null)

  const handleChange = (index, e) => {
    const inputLength = e.target.value.length
    const maxLength = parseInt(e.target.maxLength, 10)

    if (inputLength === 0 && index > 0) {
      inputRefs.current[index - 1].focus()
      return
    }

    if (inputLength >= maxLength && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide, true)
  }, [])

  const handleClickOutSide = (e) => {
    if (!refDialog.current.contains(e.target)) {
      setOpenDialogOtp(false)
    }
  }

  return (
    <section
      className={`fixed flex left-0 top-0 flex-col md:flex-row gap-6 justify-center items-center w-full h-full bg-[#000000CC] ${
        isOpenDialogOtp ? 'opacity-100 visible' : ' opacity-0 invisible'
      } transition-all duration-500`}
    >
      <div
        ref={refDialog}
        className='relative z-30 bg-primary w-[90%] max-w-xl py-14 px-1 md:px-5 rounded-2xl text-center '
      >
        <div className='px-3 mb-7'>
          <h3 className='text-2xl font-medium'>Введите код подтверждения</h3>
        </div>
        <div className='space-y-10'>
          <div className='flex gap-10 justify-center'>
            {Array.from({ length: 4 }).map((_, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                maxLength={1}
                className='max-w-5 bg-transparent border-b-4 border-white text-center outline-none text-xl font-semibold font-montserrat'
                type='text'
                onChange={(e) => handleChange(index, e)}
                required
              />
            ))}
          </div>
          <div className='flex text-sm md:text-base justify-center text-nowrap gap-2 font-medium font-montserrat'>
            <p>Не пришел код?</p>
            <button className='text-secondary'>Повторно отправить код</button>
          </div>
          <div>
            <a
              href='/'
              className='bg-secondary hover:bg-green-600 duration-500 text-sm rounded-full font-bold text-nowrap px-10 py-3'
            >
              Отправить
            </a>
          </div>
        </div>
        <div className='hidden md:block absolute top-0 left-0 -z-10'>
          <img src={decoration1} alt='decoration1' />
        </div>
        <div className='hidden md:block absolute bottom-0 right-0 -z-10'>
          <img src={decoration2} alt='decoration2' />
        </div>
        <div className='md:hidden absolute top-0 left-0 -z-10'>
          <img src={decoration3} alt='decoration3' />
        </div>
        <div className='md:hidden absolute bottom-0 right-0 -z-10'>
          <img src={decoration4} alt='decoration4' />
        </div>
      </div>
      <button onClick={() => setOpenDialogOtp(false)} className='h-fit md:h-full flex md:max-h-[20.5rem] w-6'>
        <img src={close} alt="close" />
      </button>
    </section>
  )
}
