export const timeAgo = (time: number) => {
  const minutes = time;

  if (minutes <= 0) {
    return `Vài giây trước`;
  } else if (minutes < 60) {
    return `${minutes} phút trước`;
  } else if (minutes < 1440) {
    const hours = Math.floor(minutes / 60);
    return `${hours} giờ trước`;
  } else if (minutes < 43200) {
    const days = Math.floor(minutes / 1440);
    return `${days} ngày trước`;
  } else if (minutes < 525600) {
    const months = Math.floor(minutes / 43200);
    return `${months} tháng trước`;
  } else {
    const years = Math.floor(minutes / 525600);
    return `${years} năm trước`;
  }
};
