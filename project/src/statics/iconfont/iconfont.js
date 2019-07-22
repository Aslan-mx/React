import { createGlobalStyle    } from 'styled-components';
export const IconfontStyle =createGlobalStyle `
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1561446854148'); /* IE9 */
  src: url('./iconfont.eot?t=1561446854148#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAZgAAsAAAAAC3QAAAYUAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDSAqJYIgGATYCJAMYCw4ABCAFhG0HXxvDCVFUbppkPwrj9uQ5exYnTnQCBKeln75PNPFAv0Z7X3Zv5++eahKNN5dUkUQySWQSmUqKEBqlQiN5Ju/846b9ENqmP62HiqZm1GdW0c0hrJ0hAYKFhbT+brA5bI7N1DlHzkSQCbdQL0hRQv+fY6mXzw8sP9C5ZAce4FHa2QFmb1hpw80KaDpAGvsu9R69TElBTODZBBRLyiFnzZ1zACYz+QHT3jEaOcAyCrkBFzTiumJtZUI2qjRxTfThU/D94Z8LBkRVAubch2+bVGDST7ADqLW3euwhMKfTQWwiYRuQCR8qDe+hUWAbqsjfIHQD6DSi/NPCP+s+2/3swP//k+GYlqCz/uVRSbIgEmqAgo6xd8GKn8BhSGE4yiQURqFMRuEIlAkoPIAVIqgnLJoBwkfi5Mx9FRiqq0TrbbUNJsIj4kfFiciswqSo6DCREGLCcbEZWCyURs2BenxulzsL7kiRya/jDgAgAu9A+0uIjaJs0D5OcuEIsB7FHfcRhI06kB/tsZmgKyBxJB8uOlzmOZ0udfopH7SPCIXKxju9fZn9xl3xd/pO4BLr9Yb7oYm3KaohKYnA6xifnDQE7e7kbo9DNNflhdDvn+P/SHrwcvLJQFsgRN3mQi4Vbw4PSJ4Gqi8UE6eCY4JS6J/zxF+FO1yEzGlP6nJvx4cI6e0QEgxK+/ICa4gNTZQQktmDOi1DKw4JBocGZ0XJaGporOOC/VS0RDW0Z9wNCOdACncc330MBi8w/qa5G5ctsmd14RIKl50YwkEUGg3gXASCwWTP4YMiF+EkjhYUuDzJyfcb3Em2NSNE+xIu0ckKVzLl3uY57BK5APDmz3EmQdt7LjfNnWTxJNu0WZ0ETPp5PPjj7h4ikSYC7f4Kd9QtrxY3vkrH/K9oCOomTJcIpiiYCSHh3xMs/MNRlUjYZDFbImWi5+Mdk8Z8soDin6eK/k4r+LEgC3CpZf/8pDfHyCoEefyI2YKYV376Y1tW3ufa25OP6i+gra0VQy0JqlHORubDYtvxK3fXZK9k31rlQdvbBf39J02rgHdRt14DfDd8q68f93lBTT9k4O5WB9qV0mVHWjfh2uz2xeaO7C0j0xTTVyeO+to3o0G4IP9uXntTr8OU2aQ1NJLT8ykAKeD/PCOb8XOiLn5b++QHU7JaQWQrmJxVNL1jr3ay+aCqR96l6V0VfINg0717m1GL6knRTUxP9mngxW/Q9Dtnz0jqN/0gsJ08YUOZyjaBTbCUaD4VXwfYpRTLzGDb13/46juFgjaDRciyHRiPLll51fHKvYcP9zx4uHmLxMavD10YsxlfQKXc/in+cktzwo9Ni86MJkZml1b1UfZ7rpdIKPpyYNaCWZ+v+nzh81lrRlT5fn+vc0Nn/u97m137XDpbATo6tWn0CzvikLufO+MnIaC0nw9H/UesRAbmPFmybqh/NN0ppkXv5bxZLBREzp5U7sas/61Y6j8bfnAQCT6fBbs67Hj+1Z0O0Vg3Zh41BvaBgfMn7E7dQFuve+gl3s95qzgBzp5R5k6xDqRasKPDQ4t6wTCA/v9052m/UPoR/wB6X/oNTQWgv5Nup0kAUL4l3c8xzsu98RELY8f9iuEfTMv3kV89ChT9nW4C8IYLdWb+CsrOPQlHsU1erTfkMDpSBtS+aD8QURT8AJYx700lmuzM/NdEkwlEAxYhaSwjM3YbKq0dqDUOodjSsrk1joMKORKwaQVAMOI0REO+QjLiRWTGvguVKd9CbSQoFI9C4p6t1TCwgaPlPK0iFQMko2RNalvNwzB9Fq3pMci5NDvAS2nOwrjJanFVPtxCm2huigWWXk0Nz6tJNccayWY4H20wsKSZY3W0khdred48prJSXXVHYiVrBNApDk2OR1MhKQwgMZRYJmqvOQ8Wvn4WmkYPAzmuoa6klKJxLJjBSdXEqjogWwSmTnW3kmvRS6MGTz41klqksoxIzaSjGawAi2SuHqVDU+KJaQf4zMaopEbqrgLx8iLjUe6BwryeOggQFBEiYUg4EgHisTzMKGcVjNBiZkxQLTdpVHId49kIpbYnJetn3GGDWmawx9TLmAEA') format('woff2'),
  url('./iconfont.woff?t=1561446854148') format('woff'),
  url('./iconfont.ttf?t=1561446854148') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1561446854148#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconAa:before {
  content: "\\e636";
}

.iconmaobi:before {
  content: "\\e6a4";
}

.iconspin:before {
  content: "\\e606";
}

.iconfangdajing:before {
  content: "\\e60c";
}

.iconchuangxiangzhizunvip:before {
  content: "\\e600";
}
`
