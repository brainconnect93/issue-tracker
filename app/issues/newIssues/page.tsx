'use client';
import { Button, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className='max-w-lg space-y-4'>
      <TextField.Root>
        <TextField.Input placeholder='Title' />
      </TextField.Root>
      <SimpleMDE placeholder="Decription..." />
      <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage