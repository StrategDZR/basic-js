const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string') {
        return false;
    } else {
        const activity = parseFloat(sampleActivity);

        if (activity <= 0 || activity >= 15 || isNaN(activity)) {
            return false;
        }
        const k = 0.693 / HALF_LIFE_PERIOD;
        return Math.ceil(Math.log(MODERN_ACTIVITY / activity) / k);
    }
};