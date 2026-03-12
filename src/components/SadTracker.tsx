import { type FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { sadCountSelector } from '../selectors';
import Button from './Button';
import { SadClearButtonClicked } from '../actions';
import { useDispatch } from 'react-redux';

export interface SadTrackerProps {
    sadCount: number;
}

const SadTracker: FC<SadTrackerProps> = () => {
    const sadCount = useSelector(sadCountSelector);
    const dispatch = useDispatch();

    return (
        <div className='bg-indigo-700 px-8 py-4 text-white'>
            <div className="flex justify-between items-center mb-4">
                <p>You were sad {sadCount} times</p>
                <Button
                    onClick={() => dispatch(SadClearButtonClicked)}
                >
                    Clear
                </Button>
            </div>
        </div>
    );
};

export default memo(SadTracker);