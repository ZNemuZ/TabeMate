type SideBarProps = {
  isOpen: boolean;
};

const SideBar = ({ isOpen }: SideBarProps) => {
  return (
    <div>
      <div
        className={`bg-gray-800 text-white p-4 ${isOpen ? 'block' : 'hidden'}`}
      >
        <ul className="space-y-5 mt-10">
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
