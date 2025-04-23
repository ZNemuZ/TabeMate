import logo from '../assets/TabeMateLogo.png';

export const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="flex justify-center mb-6">
        <img
          src={logo}
          alt="TabeMate Logo"
          className="fixed top-24 left-1/2 -translate-x-1/2 h-90"
        />
      </div>
      <form className="bg-white p-6 rounded shadow-md w-full max-w-xs space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ユーザーID
          </label>
          <input
            type="text"
            name="text"
            placeholder="id"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            パスワード
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          ログイン
        </button>
      </form>
    </div>
  );
};
