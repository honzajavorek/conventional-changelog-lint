import ensureCase from '../library/ensure-case';

export default (parsed, when, value) => {
	const negated = when === 'never';
	const result = ensureCase(parsed.type, value);
	return [
		negated ? !result : result,
		[
			`type must`,
			negated ? `not` : null,
			`be ${value}`
		]
		.filter(Boolean)
		.join(' ')
	];
};
