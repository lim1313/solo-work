export default class httpService {
  constructor(httpClient, tokenStorage) {
    this.httpClient = httpClient;
  }
  async singup(userId, password, email) {
    //! 왜 res가 제대로 나오지 않지??
    const res = await fetch(`${this.httpClient}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        password,
        email,
      }),
    });
    return res.status;
  }

  async checkId(userId) {
    //! 400번대 status code이지만 data가 어떻게 나오나 .???
    //! 왜 res가 제대로 나오지 않지??
    try {
      const res = await fetch(`${this.httpClient}/checkId`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
        }),
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async login(userId, password) {
    //! 400번대 status code이지만 data가 어떻게 나오나 .???
    //! 왜 res가 제대로 나오지 않지??
    const res = await fetch(`${this.httpClient}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        password,
      }),
      credentials: 'include',
    });
    if (res.status !== 401) {
      const data = await res.json();
      return data;
    } else {
      return res.status;
    }
  }

  response = (status) => {
    if (status === 409) return false;
    else if (status === 204) return true;
  };
}
