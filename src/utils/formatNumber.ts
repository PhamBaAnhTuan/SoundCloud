export const formatNumber = (num: number) => {
	if (num < 1000) return num.toString();

	if (num < 1_000_000) {
		return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
	}
	if (num < 1_000_000_000) {
		return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
	}
	return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
};

export const formatTimeLine = (num: number) => {
	if (num < 60) return num;
	if (num > 60) {
		return (num / 60).toFixed(0).replace(/\.0$/, "") + ":" + (num % 60);
	}
};
