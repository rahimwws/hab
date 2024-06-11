const getCurrentMonthDays = () => {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const days = [];

    const startDay = currentDay - 5; // 5 days before today
    const endDay = currentDay + 5; // 5 days after today

    for (let i = startDay; i <= endDay; i++) {
        const currentDate = new Date(currentYear, currentMonth, i);
        days.push({
            day: getDayOfWeek(currentDate.getDay()),
            number: currentDate.getDate(),
        });
    }

    return days;
};


const getDayOfWeek = (dayIndex:number) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek[dayIndex];
};

export default getCurrentMonthDays();