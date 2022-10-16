import * as Dialog from '@radix-ui/react-dialog'
import { Form } from './Form'


export function CreateAdModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className='fixed inset-0 bg-black/60'/>

      <Dialog.Content 
        className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] px-10 py-8 rounded-lg 
        shadow-lg shadow-black/25
        text-white bg-[#2A2634]'
      >
        <Dialog.Title className='text-3xl font-black'>
          Publique um anúncio
        </Dialog.Title>

        <Form />
      </Dialog.Content>
    </Dialog.Portal>
  )
}