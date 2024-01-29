export default function convertDay(dayInfo) {
  const [year, month, day] = dayInfo.split('-');

  return `${year}년 ${month}월 ${day}일`;
}
