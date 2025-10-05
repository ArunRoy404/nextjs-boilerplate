'use client'

import { toast } from 'sonner';
import { Button } from './button';

const TestButton = () => {
    return (
        <div>
            <Button
                onClick={() => toast("NextJS project all ready",{
                    description: <p className='text-gray-500'>Yo, hey there!</p>,
                    action: {
                        label: 'Close'
                    }
                })}
            >Click me</Button>

        </div>
    );
};

export default TestButton;