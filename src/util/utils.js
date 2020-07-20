const ttl = process.env.REACT_APP_ACCESS_TOKEN_DURATION_HOURS
  ? +process.env.REACT_APP_ACCESS_TOKEN_DURATION_HOURS * 60 * 60 * 1000
  : 8 * 60 * 60 * 1000; //8 hours

export const setWithExpiry = (key, value) => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getWithExpiry = (key) => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
};

export const validate = (key) => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
  }
};
