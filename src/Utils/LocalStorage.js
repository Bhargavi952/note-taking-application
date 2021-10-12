export const getData = (data) => {
    let details = localStorage.getItem(data)
    return details === null ? [] : JSON.parse(details)

};
export const setData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};