const API_PATH = '/api'
const TOKEN_KEY = 'taisezmoi_token'

export function getToken () {
  const token = window.localStorage.getItem(TOKEN_KEY)

  if (token) {
    return token
  }

  return null
}

export function setToken(token) {
  window.localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
}

export function removeToken () {
  window.localStorage.removeItem(TOKEN_KEY);
}

function initLoginForm (form) {
  form.addEventListener('submit', event => {
    event.preventDefault()

    const { username, password } = event.target.elements

    fetch(`${API_PATH}/authentication_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    })
      .then(response => {
        if (response.status === 200) {
          return response.json()
        }

        throw new Error('Unauthorized user')
      })
      .then(data => {
        const token = data.token;
        setToken(token);
        window.location.href = '/dashboard';
      })
  })
}

window.getToken = getToken
window.initLoginForm = initLoginForm
window.removeToken = removeToken
