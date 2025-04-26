const SideBar = () => {
  return (
    <div className="grid grid-cols-[200px_1fr] h-screen">
      <div className="bg-gray-800 text-white p-4">
        <ul className="space-y-2">
          <li>
            <a href="/foods" className="block hover:text-blue-300 ">
              食材一覧
            </a>
          </li>
          <li>
            <a href="/add" className="block hover:text-blue-300">
              食材詳細
            </a>
          </li>
          <li>
            <a href="/logout" className="block hover:text-blue-300">
              ログアウト
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
