import { fetchFakeData } from 'utils';
import { AppDispatch } from 'store/config';
import { setData, setLoading } from 'store/slices/table';

export const getData = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(setLoading(true));
		const data = await fetchFakeData();
		dispatch(setData(data));
	} finally {
		dispatch(setLoading(false));
	}
};
