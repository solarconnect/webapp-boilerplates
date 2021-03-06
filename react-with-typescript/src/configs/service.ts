const service = {
	getValue: (obj: any | undefined, key: string, defaultValue?: any | undefined): any => {
		if (!obj) {
			return defaultValue;
		}

		if (!key) {
			return defaultValue;
		}

		const keys = key.split('.');
		let value = obj;
		for (let i = 0, len = keys.length; i < len; i += 1) {
			const newValue = value[keys[i]];
			if (!newValue) {
				return defaultValue;
			}
			value = newValue;
		}
		return value;
	},
};

export default service;
