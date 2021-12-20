import React from 'react';
import TextoCentral from '../components/TextoCentral';

export default props => {
	const params = props.route.params;
	const numero = params ? params : 0;
	return <TextoCentral corFundo="#9932cd">Tela C com {numero}</TextoCentral>;
};
