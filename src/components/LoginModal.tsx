import type { Dispatch, SetStateAction } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog'
import Image from 'next/image'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import { buttonVariants } from './ui/button'

const LoginModal = ({isOpen, setIsOpen,}: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <Dialog onOpenChange={setIsOpen} open={isOpen}>
            <DialogContent className='absolute z-[9999999]'>
                <DialogHeader>
                    <div className='relative mx-auto w-24 h-24 mb-2'>
                        <Image src='/sitelogo.png' alt='лого' className='object-contain rounded-xl' fill />
                    </div>
                    <DialogTitle className='text-3xl text-center font-bold tracking-tight text-gray-900'>
                        Влез, за да продължиш
                    </DialogTitle>
                    <DialogDescription className='text-base text-center py-2'>
                        <span className='font-medium text-zinc-900'>
                            Твоята конфигурация беше запазена!
                        </span>{' '}
                        Моля, влез или създай акаунт, за да завършиш поръчката си.
                    </DialogDescription>
                </DialogHeader>

                <div className='grid grid-cols-2 gap-6 divide-x divide-gray-200'>
                    <LoginLink className={buttonVariants({ variant: 'outline' })}>
                        Вход
                    </LoginLink>
                    <RegisterLink className={buttonVariants({ variant: 'default' })}>
                        Регистрация
                    </RegisterLink>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default LoginModal
