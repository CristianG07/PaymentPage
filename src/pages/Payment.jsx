import { useState } from 'react'
import { american_express, mastercard_logo, visa_logo } from '../assets/img'
import { Input } from '../components/Input'
import { Button_Primary } from '../components/Button_Primary'
import { CreditCard } from '../components/CreditCard'
import { useNavigate } from 'react-router-dom'
import { DialogOtp } from '../components/DialogOtp'

const Payment = () => {
  const navigate = useNavigate()
  const [isOpenDialogOtp, setOpenDialogOtp] = useState(false)
  const [inputError, setInputError] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [numeroTarjeta, setNumeroTarjeta] = useState('')
  const [nombreTarjeta, setNombreTarjeta] = useState('')
  const [fechaExpiracion, setFechaExpiracion] = useState('')
  const [numeroCcv, setNumeroCcv] = useState('')

  const onChangeNumeroTarjeta = (e) => {
    setNumeroTarjeta(e.target.value)
  }

  const onChangeNombreTarjeta = (e) => {
    setNombreTarjeta(e.target.value)
  }

  const onChangeFechaExpiracionTarjeta = (e) => {
    setFechaExpiracion(e.target.value)
  }

  const onChangeCcvTarjeta = (e) => {
    setNumeroCcv(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      numeroTarjeta.length < 0 ||
      !nombreTarjeta ||
      !fechaExpiracion ||
      !numeroCcv
    ) {
      setInputError(true)
      return
    }

    setOpenDialogOtp(true)
    setInputError(false)
  }

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const cards_logos = [
    { name: 'visa-logo', img: visa_logo },
    { name: 'mastercard-logo', img: mastercard_logo },
    { name: 'american-express-logo', img: american_express }
  ]

  return (
    <section className='flex justify-center items-center my-10 lg:my-0 lg:h-screen text-text_color'>
      <div className='grid lg:grid-cols-2 w-[90%] md:w-[85%] max-w-7xl rounded-[2.5rem] overflow-hidden'>
        <form
          onSubmit={handleSubmit}
          className='bg-primary -translate-y-10 lg:translate-y-0 py-6 rounded-[2.5rem] lg:rounded-none lg:py-16 px-5 md:px-28 order-2 lg:order-none'
        >
          <div className='space-y-4 mb-5'>
            <h3 className='text-center text-2xl font-medium'>
              Информация об оплате
            </h3>
            <div className='flex justify-between text-lg font-medium'>
              <span>К оплате </span>
              <span>00,00 $</span>
            </div>
          </div>
          <div className='space-y-5'>
            <div className='flex justify-between gap-3'>
              {cards_logos.map((logo) => (
                <div
                  key={logo.name}
                  className='py-1 px-6 max-w-28 grid items-center bg-input_background rounded-full'
                >
                  <img src={logo.img} alt={logo.name} />
                </div>
              ))}
            </div>
            <Input
              type='text'
              className={`${inputError && numeroTarjeta ? '' : ''}`}
              maxLength={16}
              onChange={onChangeNumeroTarjeta}
              placeholder='Номер карты'
              required
            />
            <Input
              type='text'
              maxLength={20}
              onChange={onChangeNombreTarjeta}
              placeholder='Имя на карте'
              required
            />
            <div className='flex gap-6'>
              <Input
                type='text'
                maxLength={5}
                onChange={onChangeFechaExpiracionTarjeta}
                placeholder='MM/YY'
                required
              />
              <Input
                type='text'
                maxLength={3}
                onChange={onChangeCcvTarjeta}
                placeholder='CVV'
                required
              />
            </div>
          </div>
          <div className='flex items-center gap-1 mt-3 mb-10'>
            <input
              id='default-checkbox'
              className='w-4 h-4 checked:bg-black bg-blue-500 text-blue-600 border-gray-300'
              type='checkbox'
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor='default-checkbox' className='text-sm font-medium'>
              Запомнить эту карту
            </label>
          </div>
          <div className='flex justify-between items-center gap-6'>
            <Button_Primary
              onClick={() => navigate('/')}
              type='button'
              className='w-1/2 py-2.5 bg-transparent hover:bg-secondary hover:text-white border-2 border-secondary text-secondary'
            >
              Назад
            </Button_Primary>
            <Button_Primary className='w-1/2 py-3'>Оплатить</Button_Primary>
          </div>
        </form>
        <div className='grid bg-payment_background bg-cover bg-no-repeat lg:px-4 pb-7 lg:pb-0'>
          <div className='flex bg-circle_background bg-no-repeat w-full bg-contain bg-center px-9 py-[5.2rem] md:py-32 lg:py-36 justify-center items-center my-5'>
            <CreditCard
              numeroTarjeta={numeroTarjeta}
              fechaExpiracion={fechaExpiracion}
              nombreTarjeta={nombreTarjeta}
              numeroCcv={numeroCcv}
              isChecked={isChecked}
            />
          </div>
        </div>
      </div>
      <DialogOtp props={{ isOpenDialogOtp, setOpenDialogOtp }} />
    </section>
  )
}
export default Payment
