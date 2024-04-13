import { useEffect, useState } from 'react'
import {
  american_express,
  chip,
  mastercard_logo,
  mastercard_logo_demo,
  signal,
  visa_logo
} from '../assets/img'
import {
  FuncionFormatMesAño,
  FuncionIdentificarTipoTarjeta,
  FuncionNumeroTarjeta
} from '../helpers/helpers'

export const CreditCard = ({
  numeroTarjeta,
  fechaExpiracion,
  numeroCcv,
  nombreTarjeta,
  isChecked
}) => {
  const [CambioDePosicion, setCambioDePosicion] = useState(false)
  const [numeroTarjetaFormat, setNumeroTarjetaFormat] = useState('')
  const [fechaExpiracionFormat, setFechaExpiracionFormat] = useState('')

  useEffect(() => {
    if (numeroCcv.length > 0) {
      setCambioDePosicion(true)
    } else {
      setCambioDePosicion(false)
    }
  }, [numeroCcv])

  useEffect(() => {
    setCambioDePosicion(false)
  }, [numeroTarjeta, nombreTarjeta, fechaExpiracion, isChecked])

  useEffect(() => {
    setNumeroTarjetaFormat(FuncionNumeroTarjeta(numeroTarjeta))
  }, [numeroTarjeta])

  useEffect(() => {
    setFechaExpiracionFormat(FuncionFormatMesAño(fechaExpiracion))
  }, [fechaExpiracion])

  return (
    <div
      onClick={() => setCambioDePosicion(!CambioDePosicion)}
      className={`w-full max-w-md h-48 md:h-[17.1875rem] font-montserrat cursor-pointer ${
        CambioDePosicion ? 'voltear' : ''
      }`}
    >
      <div className='flip-card-inner h-full text-center'> 
        <div className='front bg-credit_card_background bg-cover'>
          <div className='h-full flex flex-col justify-between px-6 py-5 md:px-9 md:py-8'>
            <div className='flex items-center justify-between h-14'>
              <div className='flex items-center w-20 md:w-28 justify-between gap-3 lg:gap-5'>
                <div>
                  <img src={chip} className='Chip' alt='Chip' />
                </div>
                <div>
                  <img src={signal} className='signal' alt='signal' />
                </div>
              </div>
              <div>
                {FuncionIdentificarTipoTarjeta(numeroTarjeta) === 'Visa' ? (
                  <img className='w-20 md:w-24' src={visa_logo} alt='logo' />
                ) : FuncionIdentificarTipoTarjeta(numeroTarjeta) ===
                  'MasterCard' ? (
                  <img
                    className='w-20 md:w-24'
                    src={mastercard_logo}
                    alt='logo'
                  />
                ) : FuncionIdentificarTipoTarjeta(numeroTarjeta) ===
                  'American Express' ? (
                  <img
                    className='w-20 md:w-24'
                    src={american_express}
                    alt='logo'
                  />
                ) : (
                  <img
                    className='w-20 md:w-24'
                    src={mastercard_logo_demo}
                    alt='logo'
                  />
                )}
              </div>
            </div>
            <div className=''>
              <div className='space-y-5 md:space-y-8'>
                <div className='md:text-3xl font-semibold'>
                  {numeroTarjeta.length > 0 ? (
                    <p>{numeroTarjetaFormat}</p>
                  ) : (
                    <p>0000 0000 0000 0000</p>
                  )}
                </div>
                <div className='flex justify-between gap-5'>
                  <div className='text-sm md:text-base uppercase font-medium'>
                    {nombreTarjeta.length > 0 ? (
                      <p>{nombreTarjeta}</p>
                    ) : (
                      <p>Your Name</p>
                    )}
                  </div>
                  <div className='text-sm md:text-base font-medium'>
                    {fechaExpiracion.length > 0 ? (
                      <p>{fechaExpiracionFormat}</p>
                    ) : (
                      <p>00/00</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='back bg-credit_card_background space-y-5'>
          <div className='strip' />
          <div className='Container-Firma-Ccv'>
            <div className='mstrip'>
              {nombreTarjeta.length > 0 ? (
                <p className='Nombre'>{nombreTarjeta}</p>
              ) : (
                <p className='Nombre'>Your Name</p>
              )}
            </div>
            <div className='ContainerCCV'>
              {numeroCcv.length > 0 ? (
                <p className='ccv'>{numeroCcv}</p>
              ) : (
                <p className='ccv'>---</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
