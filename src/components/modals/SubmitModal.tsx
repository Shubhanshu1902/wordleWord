import { Modal } from './Modal'

export const SubmitModal : React.FC = () => {
  return (
    <Modal name='submit' title='Submit a Crosswordle' returnTo='share'>
      <p className='mt-3 text-gray-500'>Thanks For Playing:</p>
      
    </Modal>
  )
}
