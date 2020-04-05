import { useContext } from 'react';

import { emitter } from '../emitter';
import { FeaturizeContext } from '../components';

export const useAddFilterState = () => {
	const { instance } = useContext(FeaturizeContext);

	return (filter: string, state: string): void => {
		if (!instance.hasFilter(filter))
			throw instance.Featurize.errorFilterDoesNotExist(filter);

		if (!instance.hasFilterState(filter, state)) {
			instance.addFilterState(filter, state);
			emitter.emit('update');
		}
	};
};
