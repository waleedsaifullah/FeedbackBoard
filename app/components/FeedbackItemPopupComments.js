import React, {useState} from 'react'
import Button from './Button'
import Avatar from './Avatar';

const FeedbackItemPopupComments = () => {
    const [commentText, setCommentText] = useState('');

    return (
        <div className='p-8'>
            <div className='flex gap-4 mb-8'>
                <Avatar/>
                <div>
                    <p className='text-gray-600'>n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    <div className='text-gray-400 mt-2 text-sm'>
                        Anonymous &middot; a few seconds ago
                    </div>
                </div>
            </div>
            <form>
                <textarea 
                    className='border rounded-md w-full p-2' 
                    placeholder='let us know what you think...'
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                />
                <div className='flex justify-end gap-2 mt-2'>
                    <Button>Attach Files</Button>
                    <Button primary disabled={commentText === ''}>Comments</Button>

                </div>
            </form>
        </div>
    )
}

export default FeedbackItemPopupComments