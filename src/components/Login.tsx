import React from 'react';
export const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="text" placeholder="id"></input>
        </div>
        <div>
          <input type="password" name="password" placeholder="password"></input>
        </div>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};
