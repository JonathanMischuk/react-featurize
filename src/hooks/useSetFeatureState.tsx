import React, { useContext } from 'react';

import { emitter } from '../emitter';
import { FeaturizeContext } from '../components';

export const useSetFeatureState = () => {
	const { instance } = useContext(FeaturizeContext);

	return (state: string): void => {
		instance.setState(state);
		emitter.emit('update');
	};
};
