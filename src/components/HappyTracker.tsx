import { type FC, memo } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { happyCountSelector } from '../selectors';
import Button from './Button';
import { HappyClearButtonClicked } from '../actions';

export interface HappyTrackerProps {
    happyCount: number;
}

const HappyTracker: FC<HappyTrackerProps> = () => {
    const happyCount = useSelector(happyCountSelector);
    const dispatch = useDispatch();

    return (
        <div className='bg-orange-700 px-8 py-4 text-white'>
            <div className="flex justify-between items-center mb-4">
                <p>You were happy {happyCount} times</p>
                <Button
                    onClick={() => dispatch(HappyClearButtonClicked)}
                >
                    Clear
                </Button>
            </div>
        </div>
    );
};

export default memo(HappyTracker);