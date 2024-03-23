import React, {useState} from 'react'
import Button from './Button'
import Popup from './Popup'
const FeedbackFormPopup = ({ setShow }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function handleCreatePostButtonClick(){
        
    };

    return (
        <Popup setShow={setShow} title={'Make a Suggestion'}>
            <form className='p-8'>
                <label className='block mt-4 mb-1 text-slate-700'>Title</label>
                <input 
                    className='w-full border p-2 rounded-md' 
                    type='text' 
                    placeholder='A short, descriptive title'
                    value={title}
                    onChange={ev => setTitle(ev.target.value)} 
                />

                <label className='block mt-4 mb-1 text-slate-700'>Details</label>
                <textarea 
                    className='w-full border p-2 rounded-md' 
                    placeholder='Please include any details'
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}
                ></textarea>

                <div className='flex gap-3 mt-2 justify-end'>
                    <Button>Attach Files</Button>
                    <Button primary onClick={handleCreatePostButtonClick}>Create Post</Button>
                </div>
            </form>
        </Popup>
    )
}

export default FeedbackFormPopup